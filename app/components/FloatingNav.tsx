"use client";
import React, { JSX, ReactNode, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

interface NavItem {
  name: string;
  link: string;
  icon?: ReactNode;
}

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
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const { scrollYProgress } = useScroll();
  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

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

          `flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-3 inset-x-0 
          mx-auto px-6 py-3 rounded-md border border-primary-foreground bg-background/80 backdrop-blur-md
          shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
           items-center justify-center space-x-4`,
          className
        )}
      >
        {navItems.map((navItem: NavItem, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative  items-center  flex space-x-1 text-primary  hover:text-primaryColor"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            {/* add !cursor-pointer */}
            {/* remove hidden sm:block for the mobile responsive */}
            <span className=" text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
        <button
          aria-label="Change Theme"
          title="Change Theme"
          data-theme-btn
          className="rounded-full p-2 bg-primary/10 text-primary  hover:text-primaryColor hover:bg-primary/20 transition-colors border-none"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted ? (theme === "dark" ? <FaSun /> : <FaMoon />) : null}
        </button>

      </motion.div>
    </AnimatePresence>
  );
};
