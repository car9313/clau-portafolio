'use client'
import React, { useEffect, useRef, useState } from "react";
import { ProjectCard } from "../components/project-card";
import { AnimatePresence } from "motion/react";
import { motion } from 'framer-motion';

export type ProjectStatus = "completed" | "in-development"
export type ProjectContext = "personal" | "freelance" | "company" | "open-source"
export type TechCategory = "frontend" | "backend" | "database" | "tools"


export interface TechWithCategory {
  name: string
  category: TechCategory
}

export interface ProjectPrueba {
  title: string
  description: string
  fullDescription: string
  features: string[]
  technologies: TechWithCategory[]
  images: string[]
  githubUrl: string
  demoUrl: string
  status: ProjectStatus
  context: ProjectContext
  challenges: string[]
  learnings: string[]
}

const sampleProjects: ProjectPrueba[] = [
  {
    title: "E-Commerce Dashboard",
    description: "Panel de administración moderno para tiendas online con análisis en tiempo real y gestión de inventario.",
    fullDescription: "Una solución completa de dashboard para e-commerce que permite a los propietarios de tiendas monitorear ventas, gestionar inventario y analizar el comportamiento de los clientes en tiempo real. Incluye gráficos interactivos, exportación de reportes y sistema de notificaciones.",
    features: [
      "Dashboard con métricas en tiempo real",
      "Gestión de inventario inteligente",
      "Análisis de comportamiento del usuario",
      "Sistema de notificaciones push",
      "Exportación de reportes en PDF y Excel",
      "Integración con pasarelas de pago"
    ],
    technologies: [
      { name: "React", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "Next.js", category: "frontend" },
      { name: "Prisma", category: "backend" },
      { name: "PostgreSQL", category: "database" }
    ],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=675&fit=crop"
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    status: "completed",
    context: "freelance",
    challenges: [
      "Optimización de consultas para manejar grandes volúmenes de datos",
      "Implementación de WebSockets para actualizaciones en tiempo real",
      "Diseño de una arquitectura escalable y mantenible"
    ],
    learnings: [
      "Profundización en patrones de diseño para aplicaciones React",
      "Mejores prácticas de TypeScript en proyectos grandes",
      "Estrategias de caché y optimización de rendimiento"
    ]
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas colaborativa con tableros Kanban y seguimiento de tiempo.",
    fullDescription: "Una aplicación de productividad diseñada para equipos que necesitan organizar su trabajo de manera eficiente. Ofrece vistas de tablero Kanban, listas y calendario, junto con herramientas de colaboración en tiempo real y seguimiento de tiempo integrado.",
    features: [
      "Tableros Kanban personalizables",
      "Colaboración en tiempo real",
      "Seguimiento de tiempo integrado",
      "Etiquetas y filtros avanzados",
      "Integración con Slack y GitHub",
      "Modo offline disponible"
    ],
    technologies: [
      { name: "Vue.js", category: "frontend" },
      { name: "Nuxt", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "Supabase", category: "backend" },
      { name: "WebSockets", category: "tools" }
    ],
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=675&fit=crop",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=675&fit=crop",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200&h=675&fit=crop"
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    status: "in-development",
    context: "personal",
    challenges: [
      "Sincronización de estado offline-first",
      "Gestión compleja de drag-and-drop entre tableros"
    ],
    learnings: [
      "Arquitectura de aplicaciones real-time con Supabase",
      "Patrones de manejo de estado en Vue 3"
    ]
  },
  {
    title: "AI Content Generator",
    description: "Plataforma de generación de contenido impulsada por IA para marketing y redes sociales.",
    fullDescription: "Herramienta de inteligencia artificial que ayuda a crear contenido de marketing, publicaciones para redes sociales, descripciones de productos y más. Utiliza modelos de lenguaje avanzados para generar texto de alta calidad adaptado a tu marca y audiencia.",
    features: [
      "Generación de contenido con IA",
      "Plantillas personalizables",
      "Análisis de tono y estilo",
      "Programación de publicaciones",
      "Soporte multiidioma",
      "Historial y versiones de contenido"
    ],
    technologies: [
      { name: "React", category: "frontend" },
      { name: "Node.js", category: "backend" },
      { name: "OpenAI API", category: "tools" },
      { name: "MongoDB", category: "database" },
      { name: "Redis", category: "database" },
      { name: "Docker", category: "tools" }
    ],
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=675&fit=crop",
      "https://images.unsplash.com/photo-1676299081847-824916de030a?w=1200&h=675&fit=crop",
      "https://images.unsplash.com/photo-1675557009875-436f7a5f2a0d?w=1200&h=675&fit=crop"
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    status: "completed",
    context: "company",
    challenges: [
      "Optimización de costos de API con sistema de caché inteligente",
      "Manejo de rate limiting y colas de procesamiento",
      "Implementación de feedback loop para mejorar resultados"
    ],
    learnings: [
      "Integración efectiva de APIs de IA en productos",
      "Diseño de sistemas de cola y procesamiento asíncrono",
      "Estrategias de monetización para productos SaaS"
    ]
  },
  {
    title: "CLI Developer Tools",
    description: "Suite de herramientas de línea de comandos para automatización de flujos de trabajo de desarrollo.",
    fullDescription: "Conjunto de utilidades CLI diseñadas para acelerar tareas comunes de desarrollo como scaffolding de proyectos, generación de código, y automatización de despliegues. Diseñado con DX (Developer Experience) como prioridad.",
    features: [
      "Generador de proyectos con plantillas",
      "Automatización de git workflows",
      "Integración con CI/CD pipelines",
      "Sistema de plugins extensible"
    ],
    technologies: [
      { name: "TypeScript", category: "frontend" },
      { name: "Node.js", category: "backend" },
      { name: "Commander.js", category: "tools" },
      { name: "GitHub Actions", category: "tools" }
    ],
    images: [
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&h=675&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=675&fit=crop"
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    status: "completed",
    context: "open-source",
    challenges: [
      "Diseño de API intuitiva para usuarios de CLI",
      "Testing de aplicaciones interactivas de terminal"
    ],
    learnings: [
      "Principios de diseño de CLI modernas",
      "Publicación y versionado de paquetes npm"
    ]
  }
]
const POSTS_PER_PAGE = 3

const Projects = () => {
    const [displayedProjects, setDisplayedProjects] = useState<ProjectPrueba[]>([])
    const [hasMore, setHasMore] = useState(true)
    const observerTarget = useRef<HTMLDivElement>(null)


    // Inicializar con los primeros 3 projects
    useEffect(() => {
          setDisplayedProjects(sampleProjects.slice(0, POSTS_PER_PAGE))
          setHasMore(sampleProjects.length > POSTS_PER_PAGE)
        }, [])

 // Configurar Intersection Observer para infinite scroll
    useEffect(() => {
        if (!observerTarget.current) return

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setDisplayedProjects((prev) => {
                        const nextIndex = prev.length
                        const newPorject = sampleProjects.slice(nextIndex, nextIndex + POSTS_PER_PAGE)
                        const allProjects = [...prev, ...newPorject]
                        
                        // Actualizar si hay más posts
                        if (allProjects.length >= sampleProjects.length) {
                            setHasMore(false)
                        }
                        
                        return allProjects
                    })
                }
            },
            { threshold: 0.1 }
        )

        observer.observe(observerTarget.current)

        return () => observer.disconnect()
    }, [hasMore])



  return (

    <div
      id="projects" className="w-full py-8 animate-fade-in-up ">
      <h1 className="heading">
        What <span className="text-primaryColor">I Do</span>
      </h1>
      <div className="w-full py-20">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode={"sync"}>
{displayedProjects.map((project,index) =>(
<motion.div
                            key={`${project.title}`}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                    duration: 0.4,
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                },
                            }}
                            exit={{
                                opacity: 0,
                                y: -20,
                                scale: 0.9,
                                transition: {
                                    duration: 0.2,
                                },
                            }}
                            layout
                            className="w-full max-w-sm mx-auto"
                        >
                          <ProjectCard key={project.title} project={project} />
                        </motion.div>
))
}
          </AnimatePresence>
     </div>
     
            {displayedProjects.length === 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
                    <p className="text-slate-500 dark:text-slate-400 text-lg">No hay artículos en esta categoría</p>
                </motion.div>
            )}
            
            {/* Elemento centinela para infinite scroll */}
            {hasMore && (
                <div ref={observerTarget} className="flex justify-center py-8">
                    <div className="inline-flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>
)}
      </div>
    </div>
  
  )
};

export default Projects;
