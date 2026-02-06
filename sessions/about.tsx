import SectionTitle from "../components/section-title";
import Timeline from "../components/ui/time-line";

export const About = () => {
  return (
    <section id="about" className="section-container">
      <SectionTitle
        titlePart1="Sobre"
        titlePart2="Mí"
        description="Ingeniera de software y desarrolladora web apasionada por transformar ideas en experiencias digitales funcionales y atractivas. Combino creatividad con metodologías ágiles para crear soluciones tecnológicas que generan impacto real"
      />

      <Timeline />
    </section>
  );
};
