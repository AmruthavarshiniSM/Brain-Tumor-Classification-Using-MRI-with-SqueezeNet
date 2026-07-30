import { motion } from "framer-motion";
import {
  Brain,
  BrainCircuit,
  Cpu,
  Database,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Workflow,
} from "lucide-react";

const highlights = [
  {
    title: "Project Overview",
    description:
      "This platform helps clinicians and researchers review MRI scans with a structured, patient-centered diagnostic workflow.",
    icon: Brain,
  },
  {
    title: "Objectives",
    description:
      "The project aims to support faster triage, improve awareness of abnormal findings, and make medical imaging insights more accessible.",
    icon: BrainCircuit,
  },
  {
    title: "Why Early Detection Matters",
    description:
      "Timely identification of abnormal brain patterns can improve treatment planning and help patients receive care sooner.",
    icon: HeartPulse,
  },
];

const workflowSteps = [
  "Upload a medical MRI scan through the secure interface.",
  "The system analyzes image characteristics for suspicious patterns.",
  "A confidence-based report is generated for review.",
  "Clinical professionals can use the insight as a supportive reference.",
];

const techStack = ["React", "Tailwind CSS", "Express.js", "Python", "TensorFlow", "MongoDB"];

function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-cyan-50 px-6 py-16 text-slate-800">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-4xl border border-slate-200 bg-white/90 p-8 shadow-xl backdrop-blur sm:p-10 lg:p-14"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                <ShieldCheck size={16} />
                Healthcare Intelligence Platform
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                Brain Tumor Classification for Smarter Medical Care
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                This project combines modern web technology and medical imaging to support a safer, faster, and more informed approach to brain tumor screening.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
                  Patient-Centered Design
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700">
                  Clinical Support Workflow
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-linear-to-br from-blue-600 to-cyan-500 p-8 text-white shadow-lg">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white/20 p-3">
                  <Stethoscope size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                    Medical Focus
                  </p>
                  <h2 className="text-2xl font-bold">Supportive Care Insights</h2>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl bg-white/15 p-4">
                  <p className="text-sm text-blue-50">Early review of abnormal brain imaging patterns can improve decision-making.</p>
                </div>
                <div className="rounded-2xl bg-white/15 p-4">
                  <p className="text-sm text-blue-50">The experience is designed to be clear, calm, and easy for medical teams to use.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-md"
              >
                <div className="inline-flex rounded-2xl bg-blue-100 p-3 text-blue-600">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-600">
                <Sparkles size={22} />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">How AI Assists Diagnosis</h2>
            </div>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Advanced image analysis supports radiology workflows by highlighting patterns that may require closer review. It helps streamline case prioritization and allows clinicians to focus attention where it matters most.
            </p>
            <div className="mt-6 rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-600">
              The system is designed as a supportive tool for medical professionals, offering a second perspective that can contribute to more confident decision-making.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-blue-100 p-3 text-blue-600">
                <Workflow size={22} />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">Project Workflow</h2>
            </div>
            <div className="mt-6 space-y-4">
              {workflowSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-7 text-slate-600">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-md"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600">
              <Cpu size={22} />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900">Technology Stack</h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {techStack.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mt-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-amber-100 p-3 text-amber-700">
              <Database size={22} />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900">Medical Disclaimer</h2>
          </div>
          <p className="mt-4 text-base leading-8 text-slate-700">
            This application is intended for educational and supportive purposes. It does not replace professional medical diagnosis, imaging review, or clinical judgment.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;