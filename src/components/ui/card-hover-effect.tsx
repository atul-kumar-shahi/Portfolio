"use client";
import { cn } from "@/utils/cn";

import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";

interface HoverItem {
  name: string;
  lottie: object; // more specific if you have actual types
}

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

interface HoverEffectProps {
  items: HoverItem[];
  className?: string;
}

export const HoverEffect = ({ items, className }: HoverEffectProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.name}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0   h-full w-full bg-white dark:bg-white block rounded-3xl -z-40"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 0.4,
                  transition: {
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.15,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
              />
            )}
          </AnimatePresence>

          <Card isHovered={hoveredIndex === idx}>
            <Lottie animationData={item.lottie} loop className="h-24 w-24 mb-4" />
            <CardTitle>{item.name}</CardTitle>
          </Card>
        </div>
      ))}
    </div>
  );
};

interface CardProps {
  className?: string;
  children: React.ReactNode;
  isHovered?: boolean;
}

export const Card = ({ className, children, isHovered = false }: CardProps) => {
  return (
    <div
      className={cn(
        "relative z-10 rounded-2xl h-full w-full p-[2px] duration-400",
        isHovered
          ? "bg-gradient-to-r from-emerald-400 via-sky-500 to-blue-600"
          : "bg-transparent",
        className
      )}
    >
      <div className="rounded-2xl h-full w-full bg-black/[0.2] p-4 flex flex-col items-center text-center">
        {children}
      </div>
    </div>
  );
};

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

export const CardTitle = ({ className, children }: CardTitleProps) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
