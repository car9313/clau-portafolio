import { Send } from "lucide-react";
import MagicButton from "./ui/magic-button";
import SocialMediaIcons from "./SocialMediaIcons";
import { socialMedia } from "../data";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full bg-background border-t border-border"
    >
      {/* CONTENIDO PRINCIPAL */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* TEXTO */}
          <div>
            <h2 className="text-3xl font-bold leading-tight">
              Let&apos;s work together
            </h2>

            <p className="mt-4 text-muted-foreground max-w-md">
              ¿Tienes una idea, un producto o un reto técnico? Escríbeme y vemos
              cómo convertirlo en una solución sólida, escalable y bien
              diseñada.
            </p>
          </div>

          {/* CTA EMAIL */}
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground max-w-md">
              Prefieres escribir directamente desde tu correo? Haz clic y se
              abrirá tu cliente de email con el mensaje listo.
            </p>

            <a
              href="mailto:claudia@email.com?subject=Collaboration%20or%20Project"
              className="transition-all duration-500 hover:-translate-y-2"
            >
              <MagicButton
                title="Send me an email"
                icon={<Send />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER INFERIOR */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Claudia Alfonso Rodriguez
          </p>

          <SocialMediaIcons
            socialMedia={socialMedia}
            iconSize={22}
            variant="elegant"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
