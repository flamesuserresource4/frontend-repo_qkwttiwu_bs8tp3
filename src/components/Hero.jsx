import { Sparkles, Clock } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm bg-indigo-100 text-indigo-700">
              <Sparkles size={16} />
              <span>Your AI Study Partner</span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Master JEE, NEET, UPSC and more with intelligent tutoring
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Upload your materials, get AI-powered insights, and prepare smarter with
              personalized study plans, instant explanations, and mock tests designed
              for your exam.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3" id="cta">
              <a
                href="#exams"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow"
              >
                Start Learning Now
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-white border border-black/10 shadow-sm">
                  <Clock size={16} /> 24/7 AI-Powered Tutoring
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-white border border-black/10 shadow-sm">
                  All Exams Supported
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-1 shadow-xl">
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white">
                <div className="absolute inset-0">
                  <Spline
                    scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_60%),radial-gradient(circle_at_80%_60%,rgba(236,72,153,0.12),transparent_55%)]" />
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-500 text-center">
              Interactive AI bot: move your cursor to see the head follow your motion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
