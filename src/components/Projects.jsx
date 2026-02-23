export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-gradient text-center mb-4">
          Projects
        </h2>

        <p className="text-slate-400 text-sm max-w-xl mx-auto text-center mb-16 leading-relaxed">
          Academic and personal projects related to industrial systems,
          data analysis, and process improvement.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* PROJECT 1 */}
          <div className="surface p-6">
            <h3 className="text-base font-semibold text-slate-200 mb-2">
              Data Analysis Project (Academic)
            </h3>
            <p className="text-sm text-slate-400 mb-3">
              Statistical analysis and data processing using R and Microsoft Excel
              to support decision making in academic case studies.
            </p>
            <p className="text-xs text-slate-500">
              R · Microsoft Excel · Statistics
            </p>
          </div>

          {/* PROJECT 2 */}
          <div className="surface p-6">
            <h3 className="text-base font-semibold text-slate-200 mb-2">
              Process Improvement Study
            </h3>
            <p className="text-sm text-slate-400 mb-3">
              Workflow analysis and efficiency evaluation based on industrial
              engineering principles and coursework assignments.
            </p>
            <p className="text-xs text-slate-500">
              Process Analysis · Productivity · Industrial Systems
            </p>
          </div>

          {/* PROJECT 3 */}
          <div className="surface p-6">
            <h3 className="text-base font-semibold text-slate-200 mb-2">
              CAD & Technical Drawing Practice
            </h3>
            <p className="text-sm text-slate-400 mb-3">
              Technical drawing and 3D modeling exercises using AutoCAD and
              Autodesk Inventor for manufacturing system representation.
            </p>
            <p className="text-xs text-slate-500">
              AutoCAD · Autodesk Inventor · CAD
            </p>
          </div>

        </div>

        {/* NOTE */}
        <p className="text-xs text-slate-500 text-center mt-10">
          Detailed project documentation and repositories will be published
          after completion and review.
        </p>

      </div>
    </section>
  );
}