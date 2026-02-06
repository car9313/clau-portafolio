// components/SectionTitle.tsx
import React from "react";

interface SectionTitleProps {
  titlePart1: string;
  titlePart2: string;
  description: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  titlePart1,
  titlePart2,
  description,
  className = "",
}) => {
  return (
    <div className={`mb-16 text-center ${className}`}>
      <h2 className="heading">
        {titlePart1} <span className="text-primary">{titlePart2}</span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
