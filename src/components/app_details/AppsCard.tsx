// components/AppsCards.tsx
"use client"
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { appdata } from "@/data/app_cards";

// TypeScript interface for app data
interface AppData {
  id: string;
  imageLink: string;
  title: string;
  description: string;
  techStackt: string[];
}

export function AppsCards() {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {appdata.map((item: AppData, index: number) => (
        <AppCard key={index} app={item} />
      ))}
    </div>
  );
}

interface AppCardProps {
  app: AppData;
}

function AppCard({ app }: AppCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link href={`/apps/view?appId=${app.id}`} passHref>
      <motion.div
        ref={cardRef}
        className="relative w-80 rounded-xl overflow-hidden bg-gray-900/60 backdrop-blur-lg border border-gray-800 shadow-xl cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ 
          scale: 1.03,
          transition: { duration: 0.2 }
        }}
      >
        {/* Spotlight effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background: `radial-gradient(circle 180px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3), transparent)`,
              zIndex: 5,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}

        {/* Card Content */}
        <div className="p-4 mt-25">
          {/* Image with animation */}
          <motion.div
            className="relative h-48 w-full overflow-hidden rounded-lg mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={app.imageLink}
              alt={app.title || "App Image"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2">{app.title}</h3>
          
          {/* Description */}
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
            {app.description}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-2 mt-3">
            {app.techStackt.map((tech, techIndex) => (
              <TechChip key={techIndex} tech={tech} />
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

interface TechChipProps {
  tech: string;
}

function TechChip({ tech }: TechChipProps) {
  return (
    <motion.span
      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30"
      whileHover={{ 
        scale: 1.1, 
        backgroundColor: "rgba(59, 130, 246, 0.4)",
        color: "rgba(255, 255, 255, 1)",
        y: -2
      }}
      transition={{ duration: 0.2 }}
    >
      {tech}
    </motion.span>
  );
}