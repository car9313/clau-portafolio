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
    <main className="relative bg-background flex justify-center items-center flex-col gap-8 overflow-hidden mx-auto sm:px-10 px-5 ">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Projects />
      <Skills />
      <Services />
      <About />
      <Footer />
    </main>
  );
}
