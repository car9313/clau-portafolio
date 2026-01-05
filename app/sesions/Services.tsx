import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import CardServices from "../components/CardServices";

const Feature = () => {
    return (
        <div
            id="features"
            className="w-full py-8 animate-fade-right-up"
        >

            <h1 className="heading">
                What <span className="text-primaryColor">I Do</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 w-full py-20">
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
                    icon={<AiFillAppstore />}
                />
                <CardServices
                    title="SEO Optimisation"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
                    icon={<SiProgress />}
                />
                <CardServices
                    title="Mobile Development"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
                    icon={<FaMobile />}
                />
                <CardServices
                    title="UX Design"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
                    icon={<SiAntdesign />}
                />
                <CardServices
                    title="Hosting Websites"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
                    icon={<FaGlobe />}
                />
            </div>
        </div>
    );
};

export default Feature;
