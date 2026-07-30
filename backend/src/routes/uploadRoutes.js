import express from 'express';
import { uploadImage, getUploadStatus } from '../controllers/uploadController.js';
import { upload } from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.get('/health', getUploadStatus);
router.post('/', upload.single('image'), uploadImage);

export default router;
