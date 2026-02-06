import { X } from "lucide-react";
import CardServices from "../components/card-services";
import SectionTitle from "../components/section-title";

const Services = () => {
  return (
    <section id="services" className="section-container animate-fade-right-up">
      <SectionTitle
        titlePart1="Servicios de"
        titlePart2="Desarrollo Web"
        description=" Soluciones tecnológicas integrales para transformar ideas en
          experiencias digitales funcionales, escalables y de alto impacto"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <CardServices
          title="Business Stratagy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
          icon={null}
        />
        <CardServices
          title="App Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
          icon={<X />}
        />
        <CardServices
          title="SEO Optimisation"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
          icon={<X />}
        />
        <CardServices
          title="Mobile Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
          icon={<X />}
        />
        <CardServices
          title="UX Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
          icon={<X />}
        />
        <CardServices
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
          icon={<X />}
        />
      </div>
    </section>
  );
};

export default Services;
