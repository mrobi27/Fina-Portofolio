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

        <h2 className="text-3xl font-bold text-gradient mb-4">
          Tech Stack
        </h2>

        <p className="text-slate-400 max-w-xl mx-auto mb-16">
          Technologies and tools I use for data analysis, process improvement, and industrial system design.
        </p>

        {/* Marquee */}
        <div className="relative mb-12 pt-6 flex justify-center overflow-hidden">
        <div className="w-full max-w-4xl">
          <div className="tech-marquee gap-6 px-4 py-4">
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
                    <span className="mt-2 text-sm text-slate-400 group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CARDS (TETAP) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <h3 className="font-semibold mb-2 text-slate-100">Data Analysis</h3>
            <p className="text-sm text-slate-400">
              Statistical analysis and decision support using R and Excel.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <h3 className="font-semibold mb-2 text-slate-100">Process Improvement</h3>
            <p className="text-sm text-slate-400">
              Workflow analysis and efficiency optimization.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <h3 className="font-semibold mb-2 text-slate-100">Manufacturing Systems</h3>
            <p className="text-sm text-slate-400">
              Production systems and operations planning.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <h3 className="font-semibold mb-2 text-slate-100">CAD & Technical Tools</h3>
            <p className="text-sm text-slate-400">
              Technical drawing and 3D modeling with AutoCAD and Inventor.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}