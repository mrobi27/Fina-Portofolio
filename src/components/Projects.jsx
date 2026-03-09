export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="section-title text-2xl sm:text-3xl mb-4 tracking-tight text-center">
          Projects
        </h2>

        <p className="text-slate-400 text-sm max-w-xl mx-auto text-center mb-16 leading-relaxed">
          Academic and personal projects related to industrial systems,
          data analysis, and process improvement.
        </p>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* PROJECT 1 */}
          <div className="
          group surface p-6 rounded-xl
          border border-white/10
          transition-all duration-300
          hover:-translate-y-1
          hover:border-cyan-400/40
          hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]
          cursor-pointer
          ">
            <h3 className="
            text-base font-semibold mb-2
            text-cyan-400 group-hover:text-cyan-300 transition
            ">
              Data Analysis Project (Academic)
            </h3>

            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Statistical analysis and data processing using R and Microsoft
              Excel to support decision making in academic case studies.
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-400">
                R
              </span>
              <span className="px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-400">
                Microsoft Excel
              </span>
              <span className="px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-400">
                Statistics
              </span>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="
          group surface p-6 rounded-xl
          border border-white/10
          transition-all duration-300
          hover:-translate-y-1
          hover:border-cyan-400/40
          hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]
          cursor-pointer
          ">
            <h3 className="
            text-base font-semibold mb-2
            text-cyan-400 group-hover:text-cyan-300 transition
            ">
              Process Improvement Study
            </h3>

            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Workflow analysis and efficiency evaluation based on industrial
              engineering principles and coursework assignments.
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-400">
                Process Analysis
              </span>
              <span className="px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-400">
                Productivity
              </span>
              <span className="px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-400">
                Industrial Systems
              </span>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="
          group surface p-6 rounded-xl
          border border-white/10
          transition-all duration-300
          hover:-translate-y-1
          hover:border-cyan-400/40
          hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]
          cursor-pointer
          ">
            <h3 className="
            text-base font-semibold mb-2
            text-cyan-400 group-hover:text-cyan-300 transition
            ">
              CAD & Technical Drawing Practice
            </h3>

            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Technical drawing and 3D modeling exercises using AutoCAD and
              Autodesk Inventor for manufacturing system representation.
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-400">
                AutoCAD
              </span>
              <span className="px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-400">
                Autodesk Inventor
              </span>
              <span className="px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-400">
                CAD
              </span>
            </div>
          </div>

        </div>

        {/* NOTE */}
        <p className="text-xs text-slate-500 text-center mt-12">
          Detailed project documentation and repositories will be published
          after completion and review.
        </p>

      </div>
    </section>
  );
}