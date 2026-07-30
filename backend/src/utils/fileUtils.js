import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const ensureUploadDirectory = (dir = 'uploads/temp') => {
  const uploadDir = path.resolve(__dirname, '../../', dir);

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  return uploadDir;
};

export const generateFileName = (originalName) => {
  const timestamp = Date.now();
  const ext = path.extname(originalName).toLowerCase() || '.jpg';
  const baseName = path.basename(originalName, ext).replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
  return `${baseName}_${timestamp}${ext}`;
};

export const validateImageFile = (filePath, mimetype) => {
  const allowedTypes = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/jpg']);

  if (!allowedTypes.has(mimetype)) {
    return {
      valid: false,
      message: 'Only JPG, PNG, and WEBP images are allowed'
    };
  }

  if (!fs.existsSync(filePath)) {
    return {
      valid: false,
      message: 'Uploaded file could not be found'
    };
  }

  const buffer = fs.readFileSync(filePath);

  if (buffer.length === 0) {
    return {
      valid: false,
      message: 'Uploaded file is empty'
    };
  }

  const header = buffer.subarray(0, 12);
  const isJpeg = header[0] === 0xff && header[1] === 0xd8 && header[2] === 0xff;
  const isPng = header[0] === 0x89 && header[1] === 0x50 && header[2] === 0x4e && header[3] === 0x47;
  const isWebp = header[0] === 0x52 && header[1] === 0x49 && header[2] === 0x46 && header[3] === 0x46 && header.toString('ascii', 8, 12) === 'WEBP';

  if (!isJpeg && !isPng && !isWebp) {
    return {
      valid: false,
      message: 'File content does not look like a valid image'
    };
  }

  return { valid: true };
};
