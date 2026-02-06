"use client";

import type React from "react";
import { useRef } from "react";

interface Tool {
  name: string;
  icon: React.ReactNode;
}

interface ToolGridProps {
  tools: Tool[];
}

function ToolItem({ tool }: { tool: Tool }) {
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 6;
    const rotateY = (centerX - x) / 6;

    itemRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.1, 1.1, 1.1)`;
  };

  const handleMouseLeave = () => {
    if (!itemRef.current) return;
    itemRef.current.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <div
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group flex flex-col items-center justify-center gap-2 rounded-xl bg-secondary/50 p-4 transition-all duration-300 ease-out hover:bg-secondary hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="text-muted-foreground transition-colors group-hover:text-primary"
        style={{ transform: "translateZ(15px)" }}
      >
        {tool.icon}
      </div>
      <span
        className="text-xs text-muted-foreground text-center transition-colors group-hover:text-foreground"
        style={{ transform: "translateZ(10px)" }}
      >
        {tool.name}
      </span>
    </div>
  );
}

export function ToolGrid({ tools }: ToolGridProps) {
  return (
    <div className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-foreground mb-2">
        Herramientas y Tecnologías
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Stack de desarrollo y productividad
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {tools.map((tool) => (
          <ToolItem key={tool.name} tool={tool} />
        ))}
      </div>
    </div>
  );
}
