import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gradient mb-4">
          Contact
        </h2>

        <p className="text-slate-400 max-w-xl mx-auto mb-12 text-sm sm:text-base">
          Interested in collaboration, projects, or discussions around
          technology and cybersecurity? Feel free to reach out.
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
            Muhamad Robi Ardita
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 mb-8">
            Informatics Student • Cybersecurity & Frontend Enthusiast
          </p>

          {/* LINKS */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-10">

            {/* EMAIL */}
            <a
              href="mailto:robyardita5@gmail.com"
              className="
                flex items-center gap-3
                text-slate-300
                hover:text-cyan-400
                transition
                text-sm sm:text-base
              "
            >
              <FaEnvelope className="text-lg" />
              <span className="break-all sm:break-normal">
                robyardita5@gmail.com
              </span>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/mrobi27"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-3
                text-slate-300
                hover:text-cyan-400
                transition
                text-sm sm:text-base
              "
            >
              <FaGithub className="text-lg" />
              github.com/mrobi27
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/muhamad-robi-ardita-2b1076328/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-3
                text-slate-300
                hover:text-cyan-400
                transition
                text-sm sm:text-base
              "
            >
              <FaLinkedin className="text-lg" />
              LinkedIn
            </a>
          </div>

          {/* FOOTER TEXT */}
          <p className="text-[11px] sm:text-xs text-slate-500">
            © {new Date().getFullYear()} Muhamad Robi Ardita — Built with React & Tailwind
          </p>
        </div>
      </div>
    </section>
  );
}
