"use client";
import { useRef, MouseEvent } from "react";
import Image from "next/image";
import { portfolioProjects } from "@/data/project_data";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number; // ← changed from string to number
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
}


interface SpotlightCardProps {
  project: Project;
}

const SpotlightCard = ({ project }: SpotlightCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative group bg-gray-900 text-white rounded-2xl border border-gray-800 overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]"
      style={{
        backgroundImage:
          "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(59,130,246,0.15), transparent 60%)",
      }}
    >
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={250}
        className="object-cover w-full h-52"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex gap-4">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path d="M12 .5C5.4.5 0 6 0 12.6c0 5.4 3.5 10 8.3 11.6.6.1.8-.3.8-.6v-2c-3.4.8-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.6 1.2 1.6 1.2 1 .1.7 2.1 2.9 1.5.1-.7.4-1.2.8-1.5-2.7-.3-5.5-1.4-5.5-6a4.6 4.6 0 011.2-3.2c-.2-.3-.6-1.6.2-3.3 0 0 1-.3 3.3 1.2a11 11 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.8 1.7.4 3 .2 3.3.8.9 1.2 2 1.2 3.2 0 4.6-2.9 5.7-5.6 6 .4.4.8 1.1.8 2.3v3.4c0 .4.2.7.8.6 4.8-1.5 8.3-6.1 8.3-11.6C24 6 18.6.5 12 .5z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectCards = () => {
  return (
    <div>
      <h1 className="text-4xl text-center pt-20">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-10 xl:px-16 2xl:px-24 py-20">
        {portfolioProjects.map((project) => (
          <SpotlightCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
