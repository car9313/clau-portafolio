import {
  Code2,
  Server,
  Database,
  FileCode,
  Palette,
  Globe,
  Cpu,
  Layers,
  GitBranch,
  Container,
  Figma,
  Box,
  Terminal,
  Braces,
  FileJson,
  Workflow,
  Cloud,
  Smartphone,
} from "lucide-react";
import { SkillCategory } from "../components/skills/skill-category";
import { ToolGrid } from "../components/skills/tool-grid";
import SectionTitle from "../components/section-title";

const frontendSkills = [
  { name: "React", icon: <Code2 className="h-5 w-5" /> },
  { name: "Vue.js", icon: <Layers className="h-5 w-5" /> },
  { name: "HTML5 / CSS3", icon: <FileCode className="h-5 w-5" /> },
  { name: "JavaScript / TypeScript", icon: <Braces className="h-5 w-5" /> },
];

const backendSkills = [
  { name: "Node.js", icon: <Server className="h-5 w-5" /> },
  { name: "Python", icon: <Terminal className="h-5 w-5" /> },
  { name: "REST APIs", icon: <Cloud className="h-5 w-5" /> },
  { name: "GraphQL", icon: <Workflow className="h-5 w-5" /> },
];

const databaseSkills = [
  { name: "PostgreSQL", icon: <Database className="h-5 w-5" /> },
  { name: "MongoDB", icon: <FileJson className="h-5 w-5" /> },
  { name: "Redis", icon: <Cpu className="h-5 w-5" /> },
];

const tools = [
  { name: "Git", icon: <GitBranch className="h-6 w-6" /> },
  { name: "Docker", icon: <Container className="h-6 w-6" /> },
  { name: "VS Code", icon: <Code2 className="h-6 w-6" /> },
  { name: "Figma", icon: <Figma className="h-6 w-6" /> },
  { name: "Terminal", icon: <Terminal className="h-6 w-6" /> },
  { name: "npm", icon: <Box className="h-6 w-6" /> },
  { name: "Vercel", icon: <Globe className="h-6 w-6" /> },
  { name: "AWS", icon: <Cloud className="h-6 w-6" /> },
  { name: "Webpack", icon: <Workflow className="h-6 w-6" /> },
  { name: "Tailwind", icon: <Palette className="h-6 w-6" /> },
  { name: "Next.js", icon: <Layers className="h-6 w-6" /> },
  { name: "Mobile", icon: <Smartphone className="h-6 w-6" /> },
];

export default function Skills() {
  return (
    <section className="section-container">
      {/* Header */}
      <SectionTitle
        titlePart1="Habilidades"
        titlePart2="Técnicas"
        description=" Tecnologías y herramientas que domino para crear experiencias
          digitales excepcionales"
      />

      {/* Skills Categories Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <SkillCategory
          title="Frontend"
          description="Interfaces de usuario modernas"
          icon={<Globe className="h-5 w-5" />}
          skills={frontendSkills}
        />
        <SkillCategory
          title="Backend"
          description="APIs y servicios robustos"
          icon={<Server className="h-5 w-5" />}
          skills={backendSkills}
        />
        <SkillCategory
          title="Bases de Datos"
          description="Gestión eficiente de datos"
          icon={<Database className="h-5 w-5" />}
          skills={databaseSkills}
        />
      </div>

      {/* Tools Grid */}
      <section>
        <ToolGrid tools={tools} />
      </section>
    </section>
  );
}
