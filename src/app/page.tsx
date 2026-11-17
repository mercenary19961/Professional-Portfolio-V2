import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Shipped from "@/components/Shipped";
import Activity from "@/components/Activity";
import Career from "@/components/Career";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Shipped />
        <Activity />
        <Career />
        <Stack />
        <Contact />
      </main>
      <footer className="foot">
        <div className="wrap">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>
            <span className="ok">●</span> exit 0
          </span>
        </div>
      </footer>
    </>
  );
}
