import path from 'path';
import fs from 'fs';
import { ensureUploadDirectory, validateImageFile } from '../utils/fileUtils.js';
import { runFlaskInference } from '../services/flaskService.js';

const buildResponse = (success, message, data = null, meta = null) => ({
  success,
  message,
  ...(data !== null ? { data } : {}),
  ...(meta !== null ? { meta } : {})
});

export const uploadImage = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json(
        buildResponse(false, 'Please upload a valid image file', null, { code: 'NO_FILE' })
      );
    }

    const uploadDir = ensureUploadDirectory(process.env.UPLOAD_DIR || 'uploads/temp');
    const filePath = path.join(uploadDir, req.file.filename);
    const validation = validateImageFile(filePath, req.file.mimetype);

    if (!validation.valid) {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }

      return res.status(400).json(
        buildResponse(false, validation.message, null, { code: 'INVALID_IMAGE' })
      );
    }

    const prediction = await runFlaskInference(filePath);

    res.status(200).json(
      buildResponse(true, 'Image uploaded and classified successfully', {
        file: {
          filename: req.file.filename,
          originalName: req.file.originalname,
          mimetype: req.file.mimetype,
          size: req.file.size,
          path: path.posix.join('uploads', req.file.filename),
          uploadedAt: new Date().toISOString()
        },
        prediction
      }, {
        tempUploadDir: 'uploads/temp',
        modelLoaded: true,
        readyForFlask: true
      })
    );
  } catch (error) {
    next(error);
  }
};

export const getUploadStatus = (req, res) => {
  res.status(200).json(
    buildResponse(true, 'Upload service is ready', {
      supportedFormats: ['jpg', 'jpeg', 'png', 'webp'],
      maxFileSize: Number(process.env.MAX_FILE_SIZE || 5 * 1024 * 1024),
      tempUploadDir: 'uploads/temp'
    }, {
      readyForFlask: true,
      flaskPredictionEndpoint: process.env.FLASK_PREDICTION_URL || 'http://localhost:5001/predict'
    })
  );
};
