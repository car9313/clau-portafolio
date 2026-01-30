"use client"

import React from "react"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { BiChevronLeft, BiChevronRight, BiExpand } from "react-icons/bi"
import { ProjectContext, ProjectPrueba, ProjectStatus, TechCategory, TechWithCategory } from "../sesions/Projects"
import { BsEye, BsGithub } from "react-icons/bs"
import { FiExternalLink } from "react-icons/fi"
import { CgClose } from "react-icons/cg"
import { ActionsButtons } from "./actions-buttons"


const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  completed: { label: "Completado", className: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400" },
  "in-development": { label: "En desarrollo", className: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400" }
}

const contextConfig: Record<ProjectContext, { label: string; className: string }> = {
  personal: { label: "Personal", className: "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-400" },
  freelance: { label: "Freelance", className: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-400" },
  company: { label: "Empresa", className: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400" },
  "open-source": { label: "Open Source", className: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400" }
}

const techCategoryConfig: Record<TechCategory, { label: string; className: string }> = {
  frontend: { label: "Frontend", className: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400" },
  backend: { label: "Backend", className: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" },
  database: { label: "Base de datos", className: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400" },
  tools: { label: "Herramientas", className: "bg-gray-100 text-gray-800 dark:bg-gray-700/50 dark:text-gray-300" },
}

function TechBadge({ tech }: { tech: TechWithCategory }) {
  const config = techCategoryConfig[tech.category]
  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors", config.className)}>
      {tech.name}
    </span>
  )
}

interface ProjectCardProps {
  project: ProjectPrueba
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  
  // Touch swipe state
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const minSwipeDistance = 50

  const openModal = () => {
    setIsModalOpen(true)
    setCurrentImageIndex(0)
    document.body.style.overflow = "hidden"
  }

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    document.body.style.overflow = "unset"
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  // Touch swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null
    touchStartX.current = e.targetTouches[0].clientX
  }

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) nextImage()
    if (isRightSwipe) prevImage()
  }

  // Handle ESC key and click outside
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }

    if (isModalOpen) {
      window.addEventListener("keydown", handleEsc)
    }

    return () => window.removeEventListener("keydown", handleEsc)
  }, [isModalOpen, closeModal])

  // Handle arrow keys for carousel
  useEffect(() => {
    const handleArrows = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevImage()
      if (e.key === "ArrowRight") nextImage()
    }

    if (isModalOpen) {
      window.addEventListener("keydown", handleArrows)
    }

    return () => window.removeEventListener("keydown", handleArrows)
  }, [isModalOpen])

  return (
    <>
      {/* Project Card */}
      <article className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] hover:border-primary/40 hover:-translate-y-2 hover:scale-[1.02]">
        {/* Status & Context Badges */}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5">
          <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium shadow-sm", statusConfig[project.status].className)}>
            {statusConfig[project.status].label}
          </span>
          <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium shadow-sm", contextConfig[project.context].className)}>
            {contextConfig[project.context].label}
          </span>
        </div>

        {/* Image Section */}
        <div className="relative aspect-video overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-muted" />
          )}
          <Image
            src={project.images[0] || "/placeholder.svg"}
            alt={`${project.title} preview`}
            fill
            loading="lazy"
            className={cn(
              "object-cover transition-transform duration-500 group-hover:scale-105",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setImageLoaded(true)}
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-all duration-300 group-hover:bg-foreground/60">
           <button  className="button-secondary button-lg translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 flex justify-center items-center "
              aria-label={`Ver más detalles de ${project.title}`}
            onClick={openModal}
             
           >
              <BiExpand className="mr-2 h-4 w-4" />
                Ver más
            </button>
           </div>
        </div>

        {/* Content Section */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-card-foreground mb-2 text-balance">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3 leading-relaxed">
            {project.description}
          </p>

         
          {/* Technology Badges with Categories */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <TechBadge key={tech.name} tech={tech} />
            ))}
            {project.technologies.length > 4 && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <ActionsButtons title={project.title} images={project.images} githubUrl={project.githubUrl} demoUrl={project.demoUrl}/>
          </div>
      </article>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-foreground/80 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl bg-card shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            {/* Mobile Layout: Stack */}
            {/* Desktop Layout: Side by Side (image 2/3, info 1/3) */}
            <div className="flex flex-col lg:flex-row h-auto lg:h-[80vh] max-h-[90vh] overflow-auto">
              {/* Carousel Section */}
              <div 
                className="relative flex-none lg:w-2/3 lg:flex-[0_0_66.666%] bg-muted touch-pan-y"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full">
                  <Image
                    src={project.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
                    fill
                    loading="lazy"
                    className="object-cover transition-opacity duration-300"
                  />

                  {/* Navigation Arrows */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-all hover:bg-background hover:scale-110"
                        aria-label="Imagen anterior"
                      >
                        <BiChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-all hover:bg-background hover:scale-110"
                        aria-label="Imagen siguiente"
                      >
                        <BiChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}

                  {/* Dots Indicator */}
                  {project.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={cn(
                            "h-2 w-2 rounded-full transition-all",
                            index === currentImageIndex
                              ? "bg-primary w-6"
                              : "bg-background/60 hover:bg-background/80"
                          )}
                          aria-label={`Ir a imagen ${index + 1}`}
                          aria-current={index === currentImageIndex ? "true" : undefined}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Info Panel */}
              <div className="lg:w-1/3 lg:flex-[0_0_33.333%] flex flex-col overflow-hidden">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-all hover:bg-secondary/80 hover:scale-110"
                  aria-label="Cerrar modal"
                >
                   <CgClose className="h-5 w-5" />
                </button>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 lg:p-8">
                  <h2 id="modal-title" className="text-2xl font-semibold text-card-foreground mb-2 pr-12 text-balance">
                    {project.title}
                  </h2>

                  {/* Status, Context & Complexity */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium", statusConfig[project.status].className)}>
                      {statusConfig[project.status].label}
                    </span>
                    <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium", contextConfig[project.context].className)}>
                      {contextConfig[project.context].label}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.fullDescription}
                  </p>

                  {/* Features List */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-card-foreground uppercase tracking-wider mb-3">
                      Características
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges */}
                  {project.challenges.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-card-foreground uppercase tracking-wider mb-3">
                        Retos Superados
                      </h3>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Learnings */}
                  {project.learnings.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-card-foreground uppercase tracking-wider mb-3">
                        Aprendizajes
                      </h3>
                      <ul className="space-y-2">
                        {project.learnings.map((learning, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                            {learning}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Stack by Categories */}
                  <div className="mb-8">
                    <h3 className="text-sm font-medium text-card-foreground uppercase tracking-wider mb-3">
                      Stack Tecnológico
                    </h3>
                    <div className="space-y-3">
                      {(["frontend", "backend", "database", "tools"] as TechCategory[]).map((category) => {
                        const techsInCategory = project.technologies.filter(t => t.category === category)
                        if (techsInCategory.length === 0) return null
                        return (
                          <div key={category}>
                            <span className="text-xs text-muted-foreground mb-1.5 block">{techCategoryConfig[category].label}</span>
                            <div className="flex flex-wrap gap-1.5">
                              {techsInCategory.map((tech) => (
                                <TechBadge key={tech.name} tech={tech} />
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Action Buttons */}
           <ActionsButtons title={project.title} images={project.images} githubUrl={project.githubUrl} demoUrl={project.demoUrl}/>
        
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
