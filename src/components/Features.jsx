import { MessageSquare, Upload, Calendar, Layers, ClipboardCheck, BarChart3 } from "lucide-react";

const features = [
  {
    title: "AI Tutor Chat",
    desc: "Get instant answers and explanations from your personal AI tutor available 24/7",
    icon: MessageSquare,
  },
  {
    title: "Upload Study Material",
    desc: "Upload your own notes, PDFs, and documents for personalized learning",
    icon: Upload,
  },
  {
    title: "Custom Study Plans",
    desc: "Receive AI-generated study schedules tailored to your exam date and goals",
    icon: Calendar,
  },
  {
    title: "Smart Flashcards",
    desc: "Auto-generated flashcards from your study material for efficient revision",
    icon: Layers,
  },
  {
    title: "Practice Tests",
    desc: "Take mock tests and quizzes designed to match your exam pattern",
    icon: ClipboardCheck,
  },
  {
    title: "Progress Tracking",
    desc: "Monitor your learning journey with detailed analytics and insights",
    icon: BarChart3,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-gradient-to-b from-white to-indigo-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Everything You Need to Excel
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Comprehensive tools and features designed to make your exam preparation effective and efficient
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, desc, icon: Icon }) {
  return (
    <div className="relative rounded-2xl border border-black/10 bg-white p-6 hover:shadow-lg transition-shadow">
      <div className="h-12 w-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow">
        <Icon size={22} />
      </div>
      <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}
