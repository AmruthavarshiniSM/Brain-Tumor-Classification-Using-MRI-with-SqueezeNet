import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, ImageIcon } from "lucide-react";

function UploadArea() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [fileName, setFileName] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setFileName(file.name);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    maxFiles: 1,
  });

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition ${
          isDragActive
            ? "border-blue-600 bg-blue-50"
            : "border-slate-300"
        }`}
      >
        <input {...getInputProps()} />

        <UploadCloud size={60} className="mx-auto text-blue-600" />

        <h2 className="mt-6 text-2xl font-semibold">
          Drag & Drop MRI Image
        </h2>

        <p className="mt-3 text-slate-500">
          Click anywhere here or drag an MRI image into this box.
        </p>

        <p className="mt-5 text-sm text-slate-500">
          Supported formats: JPG, JPEG, PNG
        </p>
      </div>

      {selectedImage && (
        <div className="mt-10">

          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ImageIcon />
            MRI Preview
          </h3>

          <img
            src={selectedImage}
            alt="MRI Preview"
            className="mx-auto max-h-96 rounded-2xl shadow-lg"
          />

          <p className="mt-4 text-center text-slate-600">
            <strong>Selected File:</strong> {fileName}
          </p>

        </div>
      )}
    </div>
  );
}

export default UploadArea;