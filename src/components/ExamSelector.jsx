import { ArrowRight, BookOpen, Cog, FlaskConical, Wrench } from "lucide-react";

const exams = [
  {
    key: "jee",
    title: "JEE Main & Advanced",
    desc: "Engineering entrance exams",
    icon: Wrench,
    color: "from-amber-500 to-orange-600",
  },
  {
    key: "neet",
    title: "NEET",
    desc: "Medical entrance exam",
    icon: FlaskConical,
    color: "from-emerald-500 to-teal-600",
  },
  {
    key: "upsc",
    title: "UPSC",
    desc: "Civil services examination",
    icon: Cog,
    color: "from-indigo-500 to-violet-600",
  },
  {
    key: "other",
    title: "Other Exams",
    desc: "Regional & college exams",
    icon: BookOpen,
    color: "from-rose-500 to-pink-600",
  },
];

export default function ExamSelector() {
  return (
    <section id="exams" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Choose Your Exam
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Select the exam you're preparing for, and we'll personalize your learning experience
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {exams.map((exam) => (
            <ExamCard key={exam.key} {...exam} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExamCard({ title, desc, icon: Icon, color }) {
  return (
    <a
      href="#features"
      className="group relative rounded-2xl border border-black/10 bg-white p-5 hover:shadow-lg transition-shadow"
    >
      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${color} text-white flex items-center justify-center shadow`}> 
        <Icon size={22} />
      </div>
      <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{desc}</p>
      <div className="mt-4 inline-flex items-center gap-1 text-indigo-600 font-medium">
        Start now <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
      </div>
    </a>
  );
}
