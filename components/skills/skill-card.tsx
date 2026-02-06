"use client";

import type React from "react";
import { useRef } from "react";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
}

export function SkillCard({ name, icon }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 8;
    const rotateY = (centerX - x) / 8;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group flex items-center gap-3 rounded-xl bg-card p-3 transition-all duration-300 ease-out hover:bg-secondary hover:shadow-xl hover:shadow-primary/10"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
        style={{ transform: "translateZ(20px)" }}
      >
        {icon}
      </div>
      <span
        className="font-medium text-foreground"
        style={{ transform: "translateZ(10px)" }}
      >
        {name}
      </span>
    </div>
  );
}
