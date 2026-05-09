import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import CurrentlyStudying from "@/components/CurrentlyStudying";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <CurrentlyStudying />
        <Contact />
      </main>
      <footer className="border-t border-card-border py-6 text-center">
        <p className="font-mono text-xs text-zinc-600">
          © {new Date().getFullYear()} Zaid Al-Sabbagh
        </p>
      </footer>
    </>
  );
}
