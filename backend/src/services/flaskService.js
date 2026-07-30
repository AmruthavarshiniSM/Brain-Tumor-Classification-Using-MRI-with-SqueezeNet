import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __filenameBase = path.dirname(__filename);
const rootDir = path.resolve(__filenameBase, '../../../');

export const runFlaskInference = (imagePath) => {
  return new Promise((resolve, reject) => {
    const pythonScript = path.join(rootDir, 'ai-model', 'predict.py');
    const pythonExecutable = path.join(rootDir, '.venv', 'Scripts', 'python.exe');

    const child = spawn(pythonExecutable, [pythonScript, imagePath], {
      cwd: rootDir,
      stdio: ['ignore', 'pipe', 'pipe']
    });

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on('data', (chunk) => {
      stderr += chunk.toString();
    });

    child.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(stderr || 'Flask integration failed'));
        return;
      }

      try {
        resolve(JSON.parse(stdout));
      } catch (error) {
        reject(new Error('Unable to parse prediction response from Python model'));
      }
    });
  });
};
