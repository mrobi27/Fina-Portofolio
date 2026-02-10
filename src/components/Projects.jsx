import { FaGithub, FaFigma, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Sentinel Web Exploitation Lab",
    category: "security",
    desc: "Frontend-based exploitation challenge focused on observation, source code analysis, and security awareness.",
    tech: "React · JavaScript · Web Exploitation · CTF",
    github: "https://github.com/mrobi27/web-exploitation-lab",
    live: "https://web-exploitation-lab.vercel.app",
    figma: "",
  },
  {
    title: "Kaliber CTF 2025 – Challenge Development",
    category: "security",
    desc: "Internal CTF challenge repository focusing on offensive security and challenge design.",
    tech: "Cybersecurity · Red Team · CTF · Collaboration",
    github: "https://github.com/mrobi27/cyberkaliber2025",
    live: "",
    figma: "",
  },
  {
    title: "CFG-Based Java Syntax Parser",
    category: "academic",
    desc: "Context Free Grammar (CFG) parser for analyzing and validating Java language syntax.",
    tech: "Python · Formal Language · CFG · System Analysis",
    github: "https://github.com/mrobi27/REGEX-Bahasa-Jawa-TBO",
    live: "",
    figma: "",
  },
  {
    title: "Advanced Java Programming",
    category: "academic",
    desc: "Academic repository covering advanced Java programming concepts and structured practice modules.",
    tech: "Java · OOP · Academic Project",
    github: "https://github.com/mrobi27/Pemrograman-Lanjut",
    live: "",
    figma: "",
  },
  {
    title: "IMK Lab Project – UI/UX Design",
    category: "design",
    desc: "Mobile UI/UX design project emphasizing usability, interaction flow, and visual consistency.",
    tech: "Figma · UI/UX · Mobile Design",
    github: "",
    live: "",
    figma: "https://www.figma.com/design/GnGMYeOTPOaNmC5lWyQhbY/IMK-LAB-PROJECT",
  },
  {
    title: "Network & System Lab (Cisco NetAcad)",
    category: "system",
    desc: "Hands-on networking and system labs covering routing, switching, subnetting, and Linux operations.",
    tech: "Cisco NetAcad · Networking · Linux · System Admin",
    github: "",
    live: "https://www.netacad.com/",
    figma: "",
  },
];

const categoryAccent = {
  security: "border-red-500/40",
  system: "border-cyan-500/40",
  design: "border-purple-500/40",
  academic: "border-emerald-500/40",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-gradient text-center mb-4">
          Projects
        </h2>

        <p className="text-slate-400 text-sm max-w-xl mx-auto text-center mb-16 leading-relaxed">
          Selected projects demonstrating practical implementation, system exploration,
          and security-oriented problem solving.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`
                surface p-6 flex flex-col justify-between
                border-t-2 ${categoryAccent[p.category]}
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
              `}
            >
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-slate-200 leading-snug">
                  {p.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {p.desc}
                </p>

                <p className="text-xs text-slate-500 tracking-wide">
                  {p.tech}
                </p>
              </div>

              <div className="flex gap-4 mt-6 text-slate-400">
                {p.github && (
                  <a href={p.github} target="_blank" className="hover:text-white">
                    <FaGithub />
                  </a>
                )}
                {p.figma && (
                  <a href={p.figma} target="_blank" className="hover:text-white">
                    <FaFigma />
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" className="hover:text-white">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
