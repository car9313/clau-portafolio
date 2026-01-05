import { Spotlight } from "../components/Spotlight";
import HeroContent from "../components/HeroContent";

const Hero = () => {
  return (
    <section className="session-container">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="indigo"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <HeroContent />
    </section>
  );
};

export default Hero;
