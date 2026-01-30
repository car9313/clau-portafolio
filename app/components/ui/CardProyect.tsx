
import Image from "next/image";
import { title } from "process";
import { BiExpand } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

import { FaYoutube } from "react-icons/fa";

type Props = {
  name: string;
  description: string;
  image: string;
  load: boolean;
};

const CardProyect = ({ name, description, image, load }: Props) => {
  return (
    <div
      className={`${load ? "animate-zoomIn" : ""
        } group relative cursor-pointer items-center justify-center overflow-hidden rounded-lg shadow-shadowOne transition-shadow hover:shadow-xl hover:shadow-black/30`}
    >
      <div className="h-[400px] w-full">
        <Image
          className="h-full w-full object-cover  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={image}
          alt=""
          layout="fill"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primaryColor/60 group-hover:from-primaryColor/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex h-auto translate-y-[400px] flex-col items-center justify-center px-4 text-start transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif mb-10 text-3xl font-bold text-white">
          {name}
        </h1>
        <div className="flex gap-2">
          <a href="https://github.com/noorjsdivs" target="_blank">
            <span className="selection inline-flex h-10 w-10 items-center justify-center rounded-full bg-bgPrimary text-lg text-white duration-300 hover:text-primaryColor">
              <BsGithub size={30} />
            </span>
          </a>
          <a href="https://www.youtube.com/@reactjsBD" target="_blank">
            <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-bgPrimary text-lg text-white duration-300 hover:text-primaryColor">
              <FaYoutube size={30} />
            </span>
          </a>
        </div>
        <p className="my-3 cursor-text text-sm text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {description}
        </p>
        <button aria-label={`Ver más detalles de ${title}`} className="font-com rounded-lg bg-bgPrimary px-3.5 py-2 text-sm capitalize text-white shadow shadow-black/60">
              Ver más
        </button>
      </div>
    </div>
  );
};

export default CardProyect;
