import { useState, useEffect } from "react";
import smkp from "../assets/foto/smkp.png";
import inter from "../assets/foto/Inter.png";
import speaking from "../assets/foto/publicSpeaking.png";

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  // lock scroll when modal open
  useEffect(() => {
    document.body.style.overflow = activeCert ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [activeCert]);

  return (
    <section
      id="certificates"
      aria-labelledby="certificates-title"
      className="py-24 sm:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* TITLE */}
        <h2
          id="certificates-title"
          className="section-title text-2xl sm:text-3xl mb-4 tracking-tight text-center"
        >
          Certificates & Achievements
        </h2>

        <p className="text-slate-400 theme-light:text-slate-600 max-w-xl mx-auto text-center mb-16 text-sm sm:text-base leading-relaxed">
          Academic and non-academic achievements related to industrial
          engineering, safety management, and professional development.
        </p>

        {/* CERT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <CertificateCard
            image={smkp}
            alt="Mining Safety Management System"
            title="Mining Safety Management System (Basic)"
            desc="Training on Sistem Manajemen Keselamatan Pertambangan (SMKP) based on Kepmen ESDM No. 1827 K/30/MEM/2018."
            tags={["Safety Management","Mining Safety","Risk Awareness"]}
            onClick={() => setActiveCert(smkp)}
          />

          <CertificateCard
            image={inter}
            alt="International Youth Goals Program"
            title="International Youth Goals Program"
            desc="Participation in the International Youth Goals program involving Singapore, Malaysia, and Thailand."
            tags={["International Program","Youth Development","Global Collaboration"]}
            onClick={() => setActiveCert(inter)}
          />

          <CertificateCard
            image={speaking}
            alt="Public Speaking Training"
            title="Public Speaking Training – Dare To Speak To Get Attention"
            desc="Completed a public speaking training session with Scientia Judith, focusing on confidence, communication clarity, and audience engagement."
            tags={[
              "Public Speaking",
              "Communication",
              "Self Development"
            ]}
            onClick={() => setActiveCert(speaking)}
          />

        </div>
      </div>

      {/* MODAL */}
      {activeCert && (
        <div
          onClick={() => setActiveCert(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
        >
          <img
            src={activeCert}
            alt="Certificate Preview"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={() => setActiveCert(null)}
            className="absolute top-6 right-6 text-white text-3xl hover:opacity-70 transition"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}

/* CERTIFICATE CARD */
function CertificateCard({ image, alt, title, desc, tags, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
      group cursor-pointer
      p-6 rounded-xl
      border border-white/10
      theme-light:border-slate-200
      bg-white/[0.04]
      theme-light:bg-white
      shadow-xl
      theme-light:shadow-md
      theme-light:shadow-slate-200/70
      backdrop-blur-md
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-2xl
      theme-light:hover:shadow-slate-300/80
      "
    >

      {/* IMAGE FRAME */}
      <div className="flex justify-center items-center mb-6">
        <img
          src={image}
          alt={alt}
          className="
          w-full
          max-h-80
          object-contain
          transition-transform duration-300
          group-hover:scale-105
          "
        />
      </div>

      {/* TITLE */}
      <h3 className="
      text-slate-100
      theme-light:text-slate-900
      font-semibold
      mb-2
      group-hover:text-cyan-400
      transition-colors
      ">
        {title}
      </h3>

      {/* DESC */}
      <p className="text-sm text-slate-400 theme-light:text-slate-600 leading-relaxed mb-3">
        {desc}
      </p>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="
            text-xs font-medium
            px-2 py-1 rounded-full
            bg-cyan-400/10 text-cyan-400
            theme-light:bg-cyan-600/10 theme-light:text-cyan-600
            "
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
}