import { motion } from "framer-motion";
import { Activity, HeartPulse, ScanLine } from "lucide-react";

const cards = [
  {
    title: "Clinical Focus",
    description: "A polished workflow designed to make MRI review feel calm, structured, and easy to navigate.",
    icon: ScanLine,
  },
  {
    title: "Patient Care",
    description: "The experience emphasizes early awareness and clearer communication around medical imaging insights.",
    icon: HeartPulse,
  },
  {
    title: "Reliable Experience",
    description: "Thoughtful design, responsive layouts, and modern UI details support every stage of the review process.",
    icon: Activity,
  },
];

function AboutSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <ScanLine size={16} />
            About the Platform
          </div>
          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
            A professional healthcare experience for MRI-based review
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            This project brings together accessible medical design and thoughtful technology to present MRI-based insights in a confident, supportive way.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm"
              >
                <div className="inline-flex rounded-2xl bg-blue-100 p-3 text-blue-600">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;