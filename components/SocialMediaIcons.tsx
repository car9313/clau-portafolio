// components/SocialMediaIcons.tsx
import React from "react";

interface SocialMediaItem {
  id: number;
  Icon: React.ComponentType<{ className?: string }>;
  url: string;
  name: string;
  color?: string;
}

interface SocialMediaIconsProps {
  socialMedia: SocialMediaItem[];
  iconSize?: number;
  className?: string;
  variant?: "default" | "minimal" | "elegant";
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({
  socialMedia,
  iconSize = 20,
  className = "",
  variant = "default",
}) => {
  // Estilos por variante
  const variantStyles = {
    default:
      "backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-primary/20 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-primary/40 hover:shadow-lg",
    minimal:
      "bg-transparent hover:bg-primary/10 rounded-full border-none hover:shadow-md",
    elegant:
      "bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-md rounded-xl border border-white/10 shadow-sm hover:shadow-xl",
  };

  // Colores específicos para cada red social
  const getIconColor = (name: string, color?: string) => {
    if (color) return color;

    const colorMap: Record<string, string> = {
      github: "hover:text-gray-800 dark:hover:text-gray-300",
      linkedin: "hover:text-blue-600",
      twitter: "hover:text-sky-500",
      instagram: "hover:text-pink-600",
      facebook: "hover:text-blue-700",
      youtube: "hover:text-red-600",
      email: "hover:text-red-500",
      default: "hover:text-primary",
    };

    return colorMap[name.toLowerCase()] || colorMap.default;
  };

  return (
    <div className={`flex items-center md:gap-3 gap-6 py-2 ${className}`}>
      {socialMedia.map(({ id, Icon, url, name, color }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            cursor-pointer 
            flex justify-center items-center 
            p-3 md:p-4
            transition-all duration-300 
            transform hover:-translate-y-1 
            active:scale-95
            ${variantStyles[variant]}
            ${getIconColor(name, color)}
          `}
          aria-label={`Visita mi ${name}`}
          title={name}
        >
          <Icon
            className={`
              w-${iconSize} h-${iconSize} 
              transition-transform duration-300 
              group-hover:scale-110
            `}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
