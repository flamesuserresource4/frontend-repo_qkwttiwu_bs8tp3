import { GraduationCap, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center shadow-sm">
              <GraduationCap size={20} />
            </div>
            <span className="font-semibold text-lg tracking-tight">ExamSarthi</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#exams" className="hover:text-gray-900">Exams</a>
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#cta" className="hover:text-gray-900">Get Started</a>
            <a
              href="#cta"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
            >
              Start Learning
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-black/5"
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              <a href="#exams" className="px-2 py-2 rounded-lg hover:bg-black/5">Exams</a>
              <a href="#features" className="px-2 py-2 rounded-lg hover:bg-black/5">Features</a>
              <a href="#cta" className="px-2 py-2 rounded-lg hover:bg-black/5">Get Started</a>
              <a
                href="#cta"
                className="mt-1 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                Start Learning
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
