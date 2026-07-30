import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import uploadRoutes from './src/routes/uploadRoutes.js';
import { errorHandler, notFoundHandler } from './src/middleware/errorMiddleware.js';
import { ensureUploadDirectory } from './src/utils/fileUtils.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const uploadDir = ensureUploadDirectory(process.env.UPLOAD_DIR || 'uploads/temp');

app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173', credentials: true }));
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Brain Tumor Classification API is running',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/test', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Backend API is ready for testing',
    data: {
      service: 'brain-tumor-backend',
      environment: process.env.NODE_ENV || 'development',
      uploadDir: path.relative(__dirname, uploadDir) || 'uploads/temp',
      flaskIntegration: {
        ready: true,
        endpoint: process.env.FLASK_PREDICTION_URL || 'http://localhost:5001/predict'
      }
    }
  });
});

app.post('/api/predict', (req, res) => {
  res.status(202).json({
    success: true,
    message: 'Prediction endpoint is ready for Flask integration',
    data: {
      status: 'pending_flask_integration',
      flaskEndpoint: process.env.FLASK_PREDICTION_URL || 'http://localhost:5001/predict',
      note: 'Upload a file first and forward it to the Flask service to start tumor classification.'
    }
  });
});

app.use('/api/upload', uploadRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
