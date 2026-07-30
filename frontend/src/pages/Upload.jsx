import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  CloudUpload,
  ImageIcon,
  RefreshCw,
  X,
} from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/common/Footer";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleFileSelection = (file) => {
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

    if (!allowedTypes.includes(file.type)) {
      setError("Please upload a valid MRI image in JPG, JPEG, or PNG format.");
      setSelectedFile(null);
      setPreviewUrl("");
      return;
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    const objectUrl = URL.createObjectURL(file);
    setSelectedFile(file);
    setPreviewUrl(objectUrl);
    setError("");
    setProgress(0);
    setIsUploading(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    handleFileSelection(file);
  };

  const handleInputChange = (event) => {
    const file = event.target.files?.[0];
    handleFileSelection(file);
  };

  const handleRemoveImage = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setSelectedFile(null);
    setPreviewUrl("");
    setError("");
    setProgress(0);
    setIsUploading(false);
  };

  const handleClassify = () => {
    if (!selectedFile) {
      setError("Please select an MRI image before classification.");
      return;
    }

    setError("");
    setIsUploading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return current + 12;
      });
    }, 180);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-cyan-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <ImageIcon size={16} />
              Secure MRI Upload Portal
            </div>
            <h1 className="mt-6 text-4xl font-bold text-slate-800 sm:text-5xl">
              Upload MRI Scan
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Upload a brain MRI image to begin the review workflow with a professional and streamlined healthcare experience.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="rounded-4xl border border-slate-200 bg-white p-8 shadow-xl"
            >
              <div
                onDragOver={(event) => {
                  event.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`rounded-3xl border-2 border-dashed p-8 text-center transition ${
                  isDragging
                    ? "border-blue-600 bg-blue-50"
                    : "border-slate-300 bg-slate-50"
                }`}
              >
                <CloudUpload size={56} className="mx-auto text-blue-600" />
                <h2 className="mt-5 text-2xl font-semibold text-slate-800">
                  Drag & Drop MRI Image
                </h2>
                <p className="mt-3 text-slate-600">
                  Drop a scan here or select a file from your device.
                </p>

                <label className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
                  <RefreshCw size={18} />
                  Choose Image
                  <input type="file" accept=".jpg,.jpeg,.png" className="hidden" onChange={handleInputChange} />
                </label>

                <p className="mt-4 text-sm text-slate-500">
                  Supported formats: JPG, JPEG, PNG
                </p>
              </div>

              {error ? (
                <div className="mt-5 flex items-center gap-2 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
                  <AlertCircle size={18} />
                  {error}
                </div>
              ) : null}

              {selectedFile ? (
                <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-800">Selected File</p>
                      <p className="mt-1 text-sm text-slate-600">{selectedFile.name}</p>
                    </div>
                    <button
                      onClick={handleRemoveImage}
                      className="rounded-full bg-white p-2 text-slate-500 shadow-sm transition hover:text-red-500"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <div className="mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3">
                    <img
                      src={previewUrl}
                      alt="MRI Preview"
                      className="mx-auto max-h-72 rounded-2xl object-contain"
                    />
                  </div>
                </div>
              ) : (
                <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-center text-slate-500">
                  <p className="font-medium">No image selected yet</p>
                  <p className="mt-2 text-sm">Your preview will appear here after upload.</p>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="rounded-4xl border border-slate-200 bg-white p-8 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-600">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-800">
                    Upload Status
                  </h2>
                  <p className="text-sm text-slate-600">
                    Review upload progress before classification.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                {isUploading ? (
                  <div>
                    <div className="flex items-center justify-between text-sm font-medium text-slate-700">
                      <span>Uploading MRI image</span>
                      <span>{progress}%</span>
                    </div>
                    <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-blue-500 to-cyan-500 transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="text-sm leading-7 text-slate-600">
                    <p>
                      {selectedFile
                        ? "The image is ready for review and classification."
                        : "Choose an MRI image to begin the workflow."}
                    </p>
                  </div>
                )}
              </div>

              <button
                onClick={handleClassify}
                disabled={!selectedFile || isUploading}
                className="mt-8 w-full rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
              >
                {isUploading ? "Processing..." : "Classify MRI"}
              </button>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Upload;