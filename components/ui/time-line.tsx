"use client";

import {
  useScroll,
  useSpring,
  motion,
  useTransform,
  useInView,
} from "motion/react";
import { useState, useRef } from "react";

const timelineEvents = [
  {
    year: 2016,
    title: "Flowers & Saints Founded",
    description:
      "Our journey began with a passion for minimal design and floral artistry.",
    details:
      "Founded by Jane Doe and John Smith, Flowers & Saints started as a small studio in Sydney's Surry Hills, combining their love for minimalist design and botanical beauty.",
  },

  {
    year: 2021,
    title: "Collaboration with Top Brands",
    description:
      "Partnered with leading lifestyle brands to create exclusive collections.",
    details:
      "Our collaborations included limited edition prints with Australian fashion label Zimmermann and a bespoke fragrance line with Aesop.",
  },
  {
    year: 2022,
    title: "International Recognition",
    description: "Received the prestigious International Floral Design Award.",
    details:
      "Our 'Ethereal Echoes' installation, which combined holographic projections with live flowers, won the gold medal at the Chelsea Flower Show.",
  },
];

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div ref={containerRef} className="bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.75 h-full bg-primary/20"
            style={{ scaleY: scaleX }}
          />
          <motion.div
            className="sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-primary"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          ></motion.div>

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.year}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() =>
                setExpandedEvent(expandedEvent === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  event: (typeof timelineEvents)[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="w-5/12" />
      <div className="z-20">
        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
          <div className="w-3 h-3 bg-background rounded-full" />
        </div>
      </div>
      <motion.div
        className="w-5/12 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
      >
        <div className="p-4 bg-background rounded-lg shadow-md border border-primary/10">
          <span className="font-bold text-primary">{event.year}</span>
          <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
          <p className="text-muted-foreground">{event.description}</p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-sm text-muted-foreground">
              {event.details}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
