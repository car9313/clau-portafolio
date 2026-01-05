import Hero from "./sesions/Hero";
import Projects from "./sesions/Projects";
import { navItems } from "./data";
import About from "./sesions/About";
import Skills from "./sesions/Skills";
import { FloatingNav } from "./components/FloatingNav";
import Footer from "./sesions/Footer";
import Services from "./sesions/Services";
export default function Home() {
  return (
    <main className="relative bg-background flex justify-center items-center flex-col gap-8 overflow-hidden mx-auto sm:px-10 px-5 ">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Projects />
      <Services />
      <Skills />
      <About />
      <Footer />
    </main>
  );
}
