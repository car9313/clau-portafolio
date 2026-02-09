"use client";
import React, { JSX, useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();

  const [visible, setVisible] = useState(false);
  // estado que fuerza re-render cuando cambia hash o pathname
  const [, setTick] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  useEffect(() => {
    // re-render cuando cambia pathname (Next) o hash (anclas)
    const onHash = () => setTick((t) => t + 1);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // helper: determina si el navItem está activo
  const isActiveLink = (link: string) => {
    if (typeof window === "undefined") return false;
    const currentPath = pathname ?? "/";
    const currentHash = window.location.hash || "";

    // Caso 1: solo hash, p.e. "#about"
    if (link.startsWith("#")) {
      return currentHash === link;
    }

    // Caso 2: ruta con hash, p.e. "/#about" o "/ruta#sect"
    if (link.includes("#")) {
      const [targetPath, targetHash] = link.split("#");
      const normalizedTargetHash = `#${targetHash ?? ""}`;
      return (
        (targetPath === "" || targetPath === currentPath) &&
        normalizedTargetHash === currentHash
      );
    }

    // Caso 3: ruta normal p.e. "/about"
    return link === currentPath;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-5000 pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className,
        )}
      >
        {navItems.map(
          (
            navItem: { name: string; link: string; icon?: JSX.Element },
            idx: number,
          ) => {
            const active = isActiveLink(navItem.link);
            return (
              <a
                key={`link=${idx}`}
                href={navItem.link}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative flex items-center space-x-1 text-neutral-800 dark:text-neutral-50",
                  // hover states
                  "hover:text-neutral-500 dark:hover:text-neutral-300",
                  // divider spacing (if needed)
                  "px-3 py-2 rounded-md",
                )}
                // mejora UX al hacer focus keyboard
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <span className="block sm:hidden">{navItem.icon}</span>

                <span
                  className={cn(
                    "hidden sm:block text-sm",
                    // subrayado visual: usamos decoration para que sea accesible
                    active
                      ? "underline decoration-2 underline-offset-4 decoration-primary"
                      : "no-underline",
                  )}
                >
                  {navItem.name}
                </span>
              </a>
            );
          },
        )}
        <ThemeToggle />
      </motion.div>
    </AnimatePresence>
  );
};
