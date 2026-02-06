import { Github, Linkedin, Twitter } from "lucide-react";
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Services", link: "#services" },
  { name: "Contact", link: "#contact" },
];

export const socialMedia = [
  { id: 1, Icon: Github },
  { id: 2, Icon: Twitter },
  { id: 3, Icon: Linkedin },
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
