import Projects from "@/sessions/projects";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Footer from "../components/footer";

import Hero from "../sessions/hero";
import Skills from "../sessions/skills";
import Services from "../sessions/services";
import { About } from "../sessions/about";

export default function Home() {
  return (
    <>
      <main className="bg-background overflow-hidden w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Projects />
        <Skills />
        <Services />
        <About />
      </main>
      <Footer />
    </>
  );
}
