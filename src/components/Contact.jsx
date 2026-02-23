export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gradient mb-4">
          Contact
        </h2>

        <p className="text-slate-400 max-w-xl mx-auto mb-12 text-sm sm:text-base">
          Interested in collaboration or academic discussions related to
          industrial systems, data analysis, and process improvement.
        </p>

        {/* CONTACT CARD */}
        <div
          className="
            p-8 sm:p-10
            rounded-2xl
            border border-white/10
            bg-white/[0.02]
            backdrop-blur-sm
          "
        >
          {/* NAME */}
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
            Fina Adiyanti
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 mb-8">
            Industrial Engineering Student · Data Analysis & Process Improvement
          </p>

          {/* SAFE CONTACT INFO */}
          <div className="flex justify-center mb-10">
            <span className="text-sm text-slate-300">
              Contact information available upon request
            </span>
          </div>

          {/* FOOTER */}
          <p className="text-[11px] sm:text-xs text-slate-500">
            © {new Date().getFullYear()} Fina Adiyanti — Built with React & Tailwind
          </p>
        </div>
      </div>
    </section>
  );
}