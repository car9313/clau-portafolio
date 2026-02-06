import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import MagicButton from "../components/ui/magic-button";
import { Spotlight } from "../components/ui/spotlight";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { ArrowBigDown, Download, Mail } from "lucide-react";
import { socialMedia } from "../data";

const Hero = () => {
  return (
    <section className="session-container">
      <>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="indigo"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </>
      <div className="flex justify-center my-20 z-10 animate-fade-in-up">
        <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-4 mt-8">
          <h2 className="uppercase tracking-widest text-xs text-center py-2 text-primary max-w-80">
            Ingeniería de Software & Desarrollo Web
          </h2>
          <TextGenerateEffect
            words="Transformando Visiones en Experiencias Digitales Excepcionales"
            className="text-center text-4xl md:text-6xl lg:text-7xl font-extrabold"
          />
          {/*  <p className="text-center text-primary font-semibold   md:tracking-wide text-sm md:text-lg lg:text-2xl py-2">
            Hi! I&apos;m Claudia, a React Developer .
          </p> */}
          <p className="text-lg font-medium text-foreground/90 md:text-xl lg:text-2xl">
            ¡Hola! Soy{" "}
            <span className="font-semibold text-primary">Claudia</span>
          </p>
          <p className="text-base text-muted-foreground md:text-lg lg:text-xl">
            Ingeniera de Software especializada en desarrollo Full-Stack con
            React, Next.js y arquitecturas modernas. Combino innovación
            tecnológica con diseño centrado en el usuario para crear soluciones
            escalables.
          </p>
          <div className="flex  justify-center items-center gap-4 py-2">
            <a
              href="#about"
              className="transition-all duration-500 hover:-translate-y-2"
            >
              <MagicButton
                title="Show my Word"
                icon={<ArrowBigDown />}
                position="right"
              />
            </a>
            <a
              href="/cv.pdf"
              download="Claudia_CV.pdf"
              className="transition-all duration-500 hover:-translate-y-2"
            >
              <MagicButton
                title="Descargar CV"
                icon={<Download />}
                position="right"
              />
            </a>
          </div>
          <SocialMediaIcons
            socialMedia={socialMedia}
            iconSize={22}
            variant="elegant"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
