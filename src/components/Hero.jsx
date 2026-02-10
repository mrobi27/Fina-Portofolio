import { useRef, useState, useEffect } from "react";
import foto from "../assets/foto/Foto 3x4.JPG";

export default function Hero() {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  /* =======================
     TYPING EFFECT (NAME)
  ======================= */
  const fullName = "Muhamad Robi Ardita";
  const [displayText, setDisplayText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplayText(fullName.slice(0, i + 1));
      i++;

      if (i === fullName.length) {
        clearInterval(typing);
        setTypingDone(true);
      }
    }, 120);

    return () => clearInterval(typing);
  }, []);

  /* =======================
     3D CARD + COLOR AURA
  ======================= */
  const handleMove = (e) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * -6;

    card.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.04)
    `;

    glow.style.background = `
      radial-gradient(
        300px at ${x}px ${y}px,
        rgba(56,189,248,0.35),
        rgba(168,85,247,0.25),
        transparent 70%
      )
    `;
  };

  const reset = () => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    card.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";

    glow.style.background = `
      radial-gradient(
        260px at center,
        rgba(56,189,248,0.25),
        rgba(168,85,247,0.2),
        transparent 70%
      )
    `;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-32"
    >
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 sm:gap-14 items-center">

        {/* TEXT */}
        <div className="animate-fade-up md:pl-6 text-center md:text-left">
          <span className="block text-xs sm:text-sm tracking-widest text-cyan-400 mb-3">
            INFORMATICS STUDENT
          </span>

          {/* NAME */}
          <h1 className="font-bold leading-tight">
            <span
              className="
                inline-block
                whitespace-nowrap
                animated-gradient
                text-[1.65rem]
                sm:text-4xl
                md:text-5xl
                min-w-[18ch]
                sm:min-w-[22ch]
              "
            >
              {displayText}
              {!typingDone && <span className="typing-cursor">|</span>}
            </span>
          </h1>

          <p className="mt-5 text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed text-sm sm:text-base">
            An Informatics student with a strong interest in modern technology,
            cybersecurity, and digital system development. Passionate about
            building strong fundamentals and creating impactful digital
            solutions.
          </p>
        </div>

        {/* PHOTO CARD */}
        <div className="relative flex justify-center animate-fade-up animate-delay-2">
          <div
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            className="
              relative
              w-64 h-88
              sm:w-72 sm:h-96
              rounded-2xl
              transition-transform duration-200 ease-out
              will-change-transform
            "
          >
            {/* COLOR AURA */}
            <div
              ref={glowRef}
              className="
                absolute inset-[-18px]
                rounded-[28px]
                blur-2xl
                transition-all duration-200
                pointer-events-none
              "
            />

            {/* IMAGE */}
            <img
              src={foto}
              alt="Muhamad Robi Ardita"
              className="
                relative
                w-full h-full
                object-cover
                rounded-2xl
                border border-white/10
                shadow-[0_30px_70px_rgba(0,0,0,0.6)]
                bg-[#020617]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
