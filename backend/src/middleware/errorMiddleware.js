import { MulterError } from 'multer';

const buildErrorResponse = (statusCode, message, code = 'INTERNAL_ERROR', err = null) => ({
  success: false,
  error: {
    code,
    message
  },
  ...(process.env.NODE_ENV !== 'production' && err ? { stack: err.stack } : {})
});

export const notFoundHandler = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  if (err instanceof MulterError) {
    let message = err.message;
    if (err.code === 'LIMIT_FILE_SIZE') {
      message = 'File size exceeds the allowed 5MB limit';
    } else if (err.code === 'LIMIT_UNEXPECTED_FILE') {
      message = 'Unexpected file field received';
    }

    return res.status(400).json(buildErrorResponse(400, message, 'UPLOAD_ERROR', err));
  }

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const message = err.message || 'Internal Server Error';
  const code = err.code || 'INTERNAL_ERROR';

  return res.status(statusCode).json(buildErrorResponse(statusCode, message, code, err));
};
