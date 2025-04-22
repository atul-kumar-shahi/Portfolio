// components/HeroSection.tsx
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PhoneScreen from "@/components/PhoneScreen";
import { Button } from "@/components/ui/moving-border";
import animationData from "../../../public/animation.json"; // JSON object

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center bg-black overflow-hidden py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12">
          {" "}
          {/* Left Content Area */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi, I&apos;m Atul Kumar
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Creative Developer & Designer
            </motion.h2>

            <motion.p
              className="text-gray-400 text-base md:text-lg max-w-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I build immersive digital experiences that combine cutting-edge
              technology with thoughtful design. Specializing in web
              applications, games, and interactive media.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex flex-row gap-8">
                <Link
                  href="/projects"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-5   rounded-md font-medium transition-all hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1 text-center\"
                >
                  Explore My Work
                </Link>

                <Button borderRadius="4px">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
          <PhoneScreen animationData={animationData} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
