import { useState } from "react";
import { ArrowLeft, Brain, LoaderCircle, ShieldCheck, UploadCloud } from "lucide-react";
import { Link } from "react-router-dom";

function Prediction() {
  const [imagePreview, setImagePreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasResult, setHasResult] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
    setHasResult(false);
  };

  const handlePredict = () => {
    if (!imagePreview) return;

    setIsLoading(true);
    setHasResult(false);

    setTimeout(() => {
      setIsLoading(false);
      setHasResult(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_100%)] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/upload"
            className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600 transition"
          >
            <ArrowLeft size={18} />
            Back to Upload
          </Link>

          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm text-slate-600">
            <Brain size={18} className="text-blue-600" />
            Medical Prediction
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-blue-100 p-3 text-blue-600">
                <UploadCloud size={24} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-800">
                  MRI Scan Review
                </h1>
                <p className="mt-1 text-slate-600">
                  Upload and review the selected MRI image before analysis.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="MRI Preview"
                  className="mx-auto max-h-105 rounded-2xl object-contain shadow-md"
                />
              ) : (
                <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white text-center">
                  <UploadCloud size={48} className="text-slate-400" />
                  <p className="mt-4 text-lg font-semibold text-slate-600">
                    No MRI image selected
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Choose an MRI scan to preview it here.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6">
              <label className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                <UploadCloud size={18} />
                Upload MRI Image
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              </label>
            </div>

            <button
              onClick={handlePredict}
              disabled={!imagePreview || isLoading}
              className="mt-8 w-full rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
            >
              {isLoading ? "Analyzing MRI..." : "Predict"}
            </button>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Clinical Assessment
                </h2>
                <p className="mt-1 text-slate-600">
                  Review the diagnostic output below.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              {isLoading ? (
                <div className="flex min-h-65 flex-col items-center justify-center">
                  <LoaderCircle size={44} className="animate-spin text-blue-600" />
                  <p className="mt-4 text-lg font-semibold text-slate-700">
                    Processing MRI scan...
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Please wait while the report is being prepared.
                  </p>
                </div>
              ) : hasResult ? (
                <div>
                  <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                      Predicted Tumor Type
                    </p>
                    <h3 className="mt-2 text-3xl font-bold text-slate-800">
                      Glioma
                    </h3>
                  </div>

                  <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                        Confidence Percentage
                      </p>
                      <p className="text-xl font-bold text-blue-600">
                        98.72%
                      </p>
                    </div>

                    <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-[98.72%] rounded-full bg-[linear-gradient(to_right,#3b82f6,#22d3ee)]" />
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
                    This prediction is AI-assisted and should not replace professional medical diagnosis.
                  </div>
                </div>
              ) : (
                <div className="flex min-h-65 flex-col items-center justify-center text-center">
                  <p className="text-lg font-semibold text-slate-700">
                    No analysis has been performed yet.
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Click predict to view the diagnostic result.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prediction;