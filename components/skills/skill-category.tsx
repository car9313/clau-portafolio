import React from "react";
import { SkillCard } from "./skill-card";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategoryProps {
  title: string;
  description: string;
  skills: Skill[];
  icon: React.ReactNode;
}

export function SkillCategory({
  title,
  description,
  skills,
  icon,
}: SkillCategoryProps) {
  return (
    <div className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="mt-6 space-y-3">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}
