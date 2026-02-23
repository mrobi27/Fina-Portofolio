import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      {/* =====================
         GLOBAL BACKGROUND LAYERS
      ===================== */}

      {/* BASE DARK BACKGROUND */}
      <div className="fixed inset-0 -z-50 global-bg" />

      {/* NEON PURPLE AURORA (GLOBAL, HALUS) */}
      <div className="fixed inset-0 -z-40 bg-aurora-global pointer-events-none" />

      {/* DOT GRID */}
      <div className="fixed inset-0 -z-30 bg-dots pointer-events-none" />

      {/* NOISE / GRAIN */}
      <div className="fixed inset-0 -z-20 bg-noise pointer-events-none" />

      {/* =====================
         MAIN CONTENT
      ===================== */}
      <main className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </>
  );
}