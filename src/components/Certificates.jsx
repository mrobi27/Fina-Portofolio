import { useState, useEffect } from "react";
import ctfCert from "../assets/foto/serJuara3.png";
import gsaCert from "../assets/foto/serGSA.png";

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  // lock scroll when modal open
  useEffect(() => {
    if (activeCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [activeCert]);

  return (
    <section id="certificates" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-gradient mb-4 text-center">
          Achievements & Certificates
        </h2>

        <p className="text-slate-400 max-w-xl mx-auto text-center mb-16">
          Verified achievements and recognitions highlighting my journey
          in cybersecurity, leadership, and technology communities.
        </p>

        {/* CERT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* CTF CERT */}
          <div
            onClick={() => setActiveCert(ctfCert)}
            className="group surface p-5 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={ctfCert}
                alt="CTF Kaliber Juara 3"
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h3 className="text-slate-200 font-semibold mb-1">
              3rd Place – Capture The Flag (CTF)
            </h3>
            <p className="text-sm text-slate-400">
              Awarded by LSO Kaliber UMM for achieving 3rd place in a
              cybersecurity Capture The Flag competition.
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Web Exploitation • Cryptography • OSINT • Cybersecurity
            </p>
          </div>

          {/* GSA CERT */}
          <div
            onClick={() => setActiveCert(gsaCert)}
            className="group surface p-5 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={gsaCert}
                alt="Google Student Ambassador"
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h3 className="text-slate-200 font-semibold mb-1">
              Google Student Ambassador – Class of 2025
            </h3>
            <p className="text-sm text-slate-400">
              Selected as a Google Student Ambassador for leadership,
              community contribution, and advocacy of Google technologies.
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Leadership • Community • Google AI • Technology Advocacy
            </p>
          </div>

        </div>
      </div>

      {/* MODAL / LIGHTBOX */}
      {activeCert && (
        <div
          onClick={() => setActiveCert(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
        >
          <img
            src={activeCert}
            alt="Certificate Preview"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setActiveCert(null)}
            className="absolute top-6 right-6 text-white text-3xl hover:opacity-70"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
