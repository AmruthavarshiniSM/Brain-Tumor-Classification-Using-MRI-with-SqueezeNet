import { Link } from "react-router-dom";
import { Brain, HeartPulse } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-blue-600/20 p-2 text-blue-300">
              <Brain size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-white">Brain Tumor Classification</h3>
              <p className="text-sm text-slate-400">MRI Care Portal</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            A professional healthcare-focused interface designed to support medical imaging review with clarity and confidence.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li><Link to="/" className="transition hover:text-white">Home</Link></li>
            <li><Link to="/about" className="transition hover:text-white">About</Link></li>
            <li><Link to="/upload" className="transition hover:text-white">Upload MRI</Link></li>
            <li><Link to="/prediction" className="transition hover:text-white">Prediction</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Support</h4>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
            <HeartPulse size={16} className="text-blue-400" />
            Medical guidance should always be reviewed by a qualified professional.
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 px-6 py-4 text-center text-sm text-slate-500 lg:px-8">
        © 2026 Brain Tumor Classification. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;