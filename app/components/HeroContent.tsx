
import { TextGenerateEffect } from './ui/text-generate-effect';
import MagicButton from './MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '../data';
import SocialMediaIcon from './ui/SocialMedia';
export default function HeroContent() {
    return (
        <div className="flex justify-center my-20 z-10 animate-fade-in-up">
            <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-4 mt-8">
                <h2 className="uppercase tracking-widest text-xs text-center py-2 text-primaryColor max-w-80">
                    Dynamic Web Magic with Next.js
                </h2>
                <TextGenerateEffect
                    words="Transforming Concepts into Seamless User Experiences"
                    className="text-center text-[40px] md:text-5xl lg:text-6xl"
                />
                <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-2xl py-2">
                    Hi! I&apos;m Claudia, a React Developer .
                </p>
                <div className="flex  justify-center items-center gap-4 py-2">
                    <a href="#about" className="transition-all duration-500 hover:-translate-y-2">
                        <MagicButton title="Show my Word" />
                    </a>
                    <a href="#about" className="transition-all duration-500 hover:-translate-y-2">
                        <MagicButton
                            title="Contact"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
                <div className="flex items-center md:gap-3 gap-6 py-2">
                    {socialMedia.map((info) => (

                        <SocialMediaIcon key={info.id} urlImagen={info.img} />
                    ))}
                </div>
            </div>
        </div>
    )
}