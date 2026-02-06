import { X } from "lucide-react";
import MagicButton from "./ui/magic-button";
import { Spotlight } from "./ui/spotlight";
import { socialMedia } from "../data";

const Footer = () => {
  return (
    <footer className="w-full py-8" id="contact">
      <div>
        <Spotlight
          className="-botton-40 -left-10 md:-left-32 md:-botton-20 h-screen"
          fill="indigo"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] botton-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="left-80 botton-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      <div className=" flex flex-col items-center w-full py-8">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-primaryColor">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<X />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Claudia Alfonso Rodriguez
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map(({ id, Icon }) => (
              <Icon key={id} className="w-5 h-5" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
