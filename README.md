# Brain Tumor Classification Using MRI with SqueezeNet

## Dataset

This project uses the public Kaggle dataset:
- Dataset name: Brain Tumor MRI Dataset
- Kaggle URL: https://www.kaggle.com/datasets/masoudnickparvar/brain-tumor-mri-dataset
- Number of classes: 4
- Class names: glioma, meningioma, pituitary, notumor
- Credit: This dataset was originally published by Masoud Nickparvar.

The dataset was downloaded from Kaggle and reorganized into the following structure without modifying any images:

```text
dataset/
├── Training/
│   ├── glioma/
│   ├── meningioma/
│   ├── pituitary/
│   └── notumor/
└── Testing/
    ├── glioma/
    ├── meningioma/
    ├── pituitary/
    └── notumor/
```

## Model training

The model is trained from the real Kaggle dataset using a TensorFlow/Keras image classifier. The trained artifact is saved as ai-model/model.keras.

## Backend

The Express backend remains unchanged for the frontend integration, while the Python inference service is available through ai-model/app.py.

## Run locally

### 1. Clone the repository

```bash
git clone https://github.com/AmruthavarshiniSM/Brain-Tumor-Classification-Using-MRI-with-SqueezeNet.git
cd Brain-Tumor-Classification-Using-MRI-with-SqueezeNet
```

### 2. Install dependencies

Frontend:

```bash
cd frontend
npm install
```

Backend:

```bash
cd ../backend
npm install
```

### 3. Start the app

Start the backend:

```bash
cd ../backend
npm start
```

Start the frontend in a second terminal:

```bash
cd ../frontend
npm run dev
```

The frontend will be available at http://localhost:5173 and the backend at http://localhost:5000.

### 4. Notes

- The trained model file is expected in the ai-model folder.
- If you are using the local dataset, place it under the dataset folder before training or inference.
- Keep large model and dataset files locally if you do not want to push them to Git.
