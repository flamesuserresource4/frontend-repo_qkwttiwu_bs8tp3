import { Sparkles, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white" />
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
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-500 p-1 shadow-xl">
              <div className="h-full w-full rounded-2xl bg-white grid grid-cols-2 grid-rows-2 overflow-hidden">
                <div className="p-6 border-r border-b border-black/5">
                  <p className="text-sm text-gray-500">AI Tutor Chat</p>
                  <p className="mt-2 text-gray-900 font-semibold">Ask anything, anytime</p>
                </div>
                <div className="p-6 border-b border-black/5">
                  <p className="text-sm text-gray-500">Upload Material</p>
                  <p className="mt-2 text-gray-900 font-semibold">PDFs, notes, handouts</p>
                </div>
                <div className="p-6 border-r border-black/5">
                  <p className="text-sm text-gray-500">Study Plan</p>
                  <p className="mt-2 text-gray-900 font-semibold">Tailored to your exam</p>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500">Practice Tests</p>
                  <p className="mt-2 text-gray-900 font-semibold">Exam-like questions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
