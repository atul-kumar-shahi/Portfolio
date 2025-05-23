  // components/HeroSection.tsx
  "use client";
  import React from "react";
  import Link from "next/link";
  import { motion } from "framer-motion";
  import PhoneScreen from "@/components/PhoneScreen";
  import { Button } from "@/components/ui/moving-border";
  import animationData from "../../public/animation.json"; // JSON object
  import Container from "./Wrapper";
import ResumeViewer from "./ResumeViewer";

  const HeroSection: React.FC = () => {
    return (
      <Container className=" w-full pt-20 ">
        <div className="flex flex-col-reverse   lg:flex-row  items-center justify-center ">
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
              technology with thoughtful design. Specializing in web applications,
              games, and interactive media.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex flex-row gap-8">
                <ResumeViewer/>

        

                <Button borderRadius="4px">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
          <div className=" p-10 sm: ml-5 sm: mb-10 lg:ml-40 ">
            <PhoneScreen animationData={animationData} />
          </div>
        </div>
      </Container>
    );
  };

  export default HeroSection;
