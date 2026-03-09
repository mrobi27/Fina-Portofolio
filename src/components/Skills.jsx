import {
  FaPython,
  FaFileExcel,
  FaDraftingCompass,
  FaCubes,
} from "react-icons/fa";
import { SiR } from "react-icons/si";

const skills = [
  { name: "R Programming", icon: SiR, color: "#276DC3" },
  { name: "Microsoft Excel", icon: FaFileExcel, color: "#22c55e" },
  { name: "AutoCAD", icon: FaDraftingCompass, color: "#ef4444" },
  { name: "Autodesk Inventor", icon: FaCubes, color: "#f97316" },
  { name: "Python", icon: FaPython, color: "#3776ab" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
      py-24 sm:py-32
      animate-fade-up
      transition-all
      duration-700
      ease-out
      will-change-[opacity,filter,transform]
      blur-enter
      "
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="section-title text-2xl sm:text-3xl mb-4 tracking-tight text-center">
          Tech Stack
        </h2>

        <p className="text-slate-400 max-w-xl mx-auto mb-16">
          Technologies and tools I use for data analysis, process improvement,
          and industrial system design.
        </p>

        {/* ICON MARQUEE */}
        <div className="relative mb-14 pt-6 flex justify-center overflow-hidden">
          <div className="w-full max-w-4xl">
            <div className="tech-marquee gap-12 px-6 py-6">
              {[...skills, ...skills, ...skills].map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={i}
                    className="group flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
                  >
                    <Icon
                      className="text-5xl"
                      style={{
                        color: skill.color,
                        filter: "drop-shadow(0 0 12px rgba(255,255,255,0.15))",
                      }}
                    />
                    <span className="mt-3 text-sm text-slate-400 group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SKILL CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">

          {/* DATA ANALYSIS */}
          <div className="
          group p-6 rounded-xl
          border border-white/10
          bg-white/[0.02]
          backdrop-blur-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:border-cyan-400/40
          hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]
          cursor-pointer
          ">
            <h3 className="font-semibold mb-2 text-cyan-400 group-hover:text-cyan-300 transition">
              Data Analysis
            </h3>
            <p className="text-sm text-slate-400">
              Statistical analysis and decision support using R and Excel.
            </p>
          </div>

          {/* PROCESS IMPROVEMENT */}
          <div className="
          group p-6 rounded-xl
          border border-white/10
          bg-white/[0.02]
          backdrop-blur-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:border-cyan-400/40
          hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]
          cursor-pointer
          ">
            <h3 className="font-semibold mb-2 text-cyan-400 group-hover:text-cyan-300 transition">
              Process Improvement
            </h3>
            <p className="text-sm text-slate-400">
              Workflow analysis and efficiency optimization.
            </p>
          </div>

          {/* MANUFACTURING */}
          <div className="
          group p-6 rounded-xl
          border border-white/10
          bg-white/[0.02]
          backdrop-blur-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:border-cyan-400/40
          hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]
          cursor-pointer
          ">
            <h3 className="font-semibold mb-2 text-cyan-400 group-hover:text-cyan-300 transition">
              Manufacturing Systems
            </h3>
            <p className="text-sm text-slate-400">
              Production systems and operations planning.
            </p>
          </div>

          {/* CAD */}
          <div className="
          group p-6 rounded-xl
          border border-white/10
          bg-white/[0.02]
          backdrop-blur-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:border-cyan-400/40
          hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]
          cursor-pointer
          ">
            <h3 className="font-semibold mb-2 text-cyan-400 group-hover:text-cyan-300 transition">
              CAD & Technical Tools
            </h3>
            <p className="text-sm text-slate-400">
              Technical drawing and 3D modeling with AutoCAD and Inventor.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}