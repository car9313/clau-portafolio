import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagicButtonProps {
  title: string;
  icon?: ReactNode;
  position?: "left" | "right";
  onClick?: () => void;
  className?: string;
}

const MagicButton = ({
  title,
  icon,
  position = "left",
  onClick,
  className,
}: MagicButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex h-12 overflow-hidden rounded-md p-px focus:outline-none"
    >
      {/* Border animado */}
      <span
        aria-hidden
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
        bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
      />

      {/* Contenido */}
      <span
        className={cn(
          "relative inline-flex h-full w-full items-center justify-center gap-2 rounded-md bg-background/80 px-4 text-sm font-medium text-primary backdrop-blur-3xl",
          className,
        )}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
