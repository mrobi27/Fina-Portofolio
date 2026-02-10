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
         GLOBAL BACKGROUND
      ===================== */}
      <div className="fixed inset-0 -z-50 global-bg" />
      <div className="fixed inset-0 -z-40 bg-dots pointer-events-none" />
      <div className="fixed inset-0 -z-30 bg-noise pointer-events-none" />

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
