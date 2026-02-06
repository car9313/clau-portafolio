import { Github, Linkedin, Mail } from "lucide-react";
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Services", link: "#services" },
  { name: "Contact", link: "#contact" },
];

export const socialMedia = [
  {
    id: 1,
    Icon: Github, // Asegúrate de importar Github de lucide-react
    url: "https://github.com/tu-usuario",
    name: "GitHub",
    color: "hover:text-primary",
  },
  {
    id: 2,
    Icon: Linkedin, // Asegúrate de importar Linkedin de lucide-react
    url: "https://linkedin.com/in/tu-usuario",
    name: "LinkedIn",
    color: "hover:text-primary",
  },
  {
    id: 3,
    Icon: Mail, // Ya está importado
    url: "mailto:tu@email.com",
    name: "Email",
    color: "hover:text-primary",
  },
];

export const technologies = [
  {
    id: 1,
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Redux",
      "GraphQL",
    ],
  },
  {
    id: 2,
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
  },
  {
    id: 3,
    category: "DevOps",
    skills: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx"],
  },
  {
    id: 4,
    category: "Tools",
    skills: ["VS Code", "Postman", "Figma", "Jest", "GitHub", "Vercel"],
  },
];
