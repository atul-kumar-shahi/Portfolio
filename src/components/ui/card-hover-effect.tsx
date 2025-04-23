"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

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
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on a touch device
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add resize listener
    window.addEventListener("resize", checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleInteraction = (idx: number | null) => {
    if (!isMobile) {
      setHoveredIndex(idx);
    }
  };

  const handleTap = (idx: number) => {
    if (isMobile) {
      setHoveredIndex(hoveredIndex === idx ? null : idx);
    }
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.name}
          className="relative group block p-1 sm:p-2 h-full w-full cursor-pointer"
          onMouseEnter={() => handleInteraction(idx)}
          onMouseLeave={() => handleInteraction(null)}
          onClick={() => handleTap(idx)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-white dark:bg-white block rounded-2xl sm:rounded-3xl -z-40"
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
            <div className="flex justify-center items-center">
              <Lottie 
                animationData={item.lottie} 
                loop 
                className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24" 
              />
            </div>
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
        "relative z-10 rounded-xl sm:rounded-2xl h-full w-full p-[2px] duration-400",
        isHovered
          ? "bg-gradient-to-r from-emerald-400 via-sky-500 to-blue-600"
          : "bg-transparent",
        className
      )}
    >
      <div 
        className={cn(
          "rounded-xl sm:rounded-2xl h-full w-full bg-black/[0.2] p-3 sm:p-4 flex flex-col items-center text-center justify-center",
          isHovered ? "bg-black/[0.3]" : "bg-black/[0.2]"
        )}
      >
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
    <h4 className={cn("text-zinc-100 font-bold tracking-wide text-sm sm:text-base mt-2 sm:mt-4", className)}>
      {children}
    </h4>
  );
};