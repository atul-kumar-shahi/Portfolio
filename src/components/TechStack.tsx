"use client";
import { techStack } from "@/data/tech_stack";
import { HoverEffect } from "../components/ui/card-hover-effect";

export const TechStack = () => {
  return (
    <section className=" max-w-5xl mx-auto ">
      <h2 className="text-3xl lg-10 font-bold lg:mb-20  text-center">🛠️ Tech Stack</h2>
 <HoverEffect items={techStack}/>
    </section>
  );
};

