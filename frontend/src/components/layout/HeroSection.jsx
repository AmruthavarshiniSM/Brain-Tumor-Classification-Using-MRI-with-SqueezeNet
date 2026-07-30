import { motion } from "framer-motion";
import { ArrowRight, Brain, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="bg-linear-to-br from-blue-50 via-white to-cyan-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-6 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <Sparkles size={16} />
            Healthcare Imaging Review
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Brain Tumor Classification for Modern Medical Care
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Review MRI scans through a professional, responsive platform built to support faster clinical awareness and clearer diagnostic workflows.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/upload"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Upload MRI
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-[420px] rounded-4xl border border-slate-200 bg-white/80 p-6 shadow-[0_25px_70px_-25px_rgba(2,132,199,0.35)] backdrop-blur">
            <div className="rounded-3xl bg-linear-to-br from-blue-600 to-cyan-500 p-8 text-white">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white/20 p-3">
                  <Brain size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                    Diagnostic Support
                  </p>
                  <h2 className="text-2xl font-semibold">Clinical Review System</h2>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 rounded-2xl bg-white/15 px-4 py-3">
                  <ShieldCheck size={18} />
                  <span className="text-sm">Secure MRI upload workflow</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/15 px-4 py-3">
                  <ShieldCheck size={18} />
                  <span className="text-sm">Professional medical interface</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/15 px-4 py-3">
                  <ShieldCheck size={18} />
                  <span className="text-sm">Clear prediction and review experience</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;