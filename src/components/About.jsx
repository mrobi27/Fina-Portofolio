export default function About() {
  return (
    <section
      id="about"
      className="
        scroll-mt-24 sm:scroll-mt-32
        py-24 sm:py-32
        relative overflow-hidden
      "
    >
      <div
        className="
          max-w-6xl mx-auto px-6
          grid md:grid-cols-2
          gap-12 md:gap-20
          items-start
        "
      >
        {/* ===== LEFT : ABOUT TEXT ===== */}
        <div className="animate-fade-up text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gradient mb-4">
            About Me
          </h2>

          <p className="text-slate-400 leading-relaxed mb-5 text-sm sm:text-base">
            I am an Industrial Engineering student with a strong interest in data analysis, process improvement, and industrial systems. 
            I enjoy analyzing data, identifying inefficiencies, and designing solutions to improve system performance.
          </p>

          <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
            My academic background has equipped me with knowledge in statistics, operations research, manufacturing systems, and work system design. 
            I am experienced in using R programming, Microsoft Excel, AutoCAD, and Autodesk Inventor to support data-driven decision making and effective 
            industrial solutions.
          </p>
        </div>

        {/* ===== RIGHT : SKILL HIGHLIGHTS ===== */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2
            gap-4 sm:gap-6
            animate-fade-up animate-delay-2
          "
        >
          <SkillCard
            title="Data Analysis"
            desc="Statistical analysis & data-driven insights"
            gradient="from-cyan-500/20 via-transparent to-blue-500/20"
          />

          <SkillCard
            title="Process Improvement"
            desc="System efficiency & workflow optimization"
            gradient="from-purple-500/20 via-transparent to-cyan-500/20"
          />

          <SkillCard
            title="Manufacturing Systems"
            desc="Production systems & operations planning"
            gradient="from-red-500/20 via-transparent to-orange-500/20"
          />

          <SkillCard
            title="Technical Tools"
            desc="R Programming, Excel, AutoCAD & Inventor"
            gradient="from-emerald-500/20 via-transparent to-cyan-500/20"
          />
        </div>
      </div>
    </section>
  );
}

/* ===== REUSABLE CARD ===== */
function SkillCard({ title, desc, gradient }) {
  return (
    <div
      className="
        group relative
        p-5 sm:p-6
        rounded-xl
        border border-white/10
        bg-white/[0.02]
        backdrop-blur-sm
        overflow-hidden
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      {/* glow aura */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br ${gradient} blur-xl`}
      />

      <h3 className="relative font-semibold text-slate-200 mb-1 text-sm sm:text-base">
        {title}
      </h3>

      <p className="relative text-xs sm:text-sm text-slate-400">
        {desc}
      </p>
    </div>
  );
}
