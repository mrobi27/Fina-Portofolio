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
            I am an Informatics student with a strong interest in modern
            technology, particularly in{" "}
            <span className="text-slate-200">front-end development</span>,
            <span className="text-slate-200"> UI/UX design</span>, and
            <span className="text-slate-200"> cybersecurity</span>.
          </p>

          <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
            I enjoy crafting clean and intuitive interfaces, transforming
            design concepts into responsive and user-friendly web applications.
            Alongside front-end development, I actively explore cybersecurity
            topics and participate in CTF challenges to sharpen my analytical
            thinking and problem-solving skills.
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
            title="Front-End Development"
            desc="Responsive UI & modern web interfaces"
            gradient="from-cyan-500/20 via-transparent to-blue-500/20"
          />

          <SkillCard
            title="UI / UX Design"
            desc="Wireframing, prototyping & visual systems"
            gradient="from-purple-500/20 via-transparent to-cyan-500/20"
          />

          <SkillCard
            title="Cybersecurity"
            desc="CTF challenges & security fundamentals"
            gradient="from-red-500/20 via-transparent to-orange-500/20"
          />

          <SkillCard
            title="Problem Solving"
            desc="Logic, analysis & debugging mindset"
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
