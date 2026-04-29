import { ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import SpotlightWrapper from "@/components/SpotlightWrapper";
import SideNav from "@/components/SideNav";
import Divider from "@/components/ui/Divider";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black">
      <SideNav />
      <SpotlightWrapper>
        <Navbar />
        <main>
          <Hero />
          <Divider />
          <About />
          <Divider />
          <TechStack />
          <Divider />
          <Projects />
          <Divider />
          <Experience />
          <Divider />
          <Education />
          <Divider />
          <Contact />
        </main>

      <footer className="border-t border-border mt-8">
        <div className="max-w-5xl mx-auto px-6 py-8 relative flex items-center justify-center">
          <p className="text-sm text-muted/60">
            Copyright &copy; {new Date().getFullYear()} Oleksii Kobzan
          </p>
          <a
            href="#hero"
            aria-label="Back to top"
            className="absolute right-6 w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted/50 hover:text-text hover:border-border transition-all duration-200"
          >
            <ChevronUp size={14} />
          </a>
        </div>
      </footer>
      </SpotlightWrapper>
    </div>
  );
}