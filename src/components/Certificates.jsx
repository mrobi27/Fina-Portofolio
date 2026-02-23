export default function Certificates() {
  return (
    <section id="certificates" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-gradient mb-4">
          Certificates & Achievements
        </h2>

        <p className="text-slate-400 max-w-xl mx-auto mb-16 text-sm sm:text-base">
          Academic and non-academic achievements related to industrial
          engineering, data analysis, and professional development.
        </p>

        {/* PLACEHOLDER CARD */}
        <div
          className="
            mx-auto
            max-w-xl
            p-10
            rounded-2xl
            border border-white/10
            bg-white/[0.02]
            backdrop-blur-sm
          "
        >
          <h3 className="text-slate-200 font-semibold mb-2">
            Certificates in Progress
          </h3>

          <p className="text-sm text-slate-400 leading-relaxed">
            Certificates and official documentation will be published
            after completion and verification of ongoing programs,
            competitions, and academic activities.
          </p>
        </div>

      </div>
    </section>
  );
}