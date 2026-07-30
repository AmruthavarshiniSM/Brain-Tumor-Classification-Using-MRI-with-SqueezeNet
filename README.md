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
