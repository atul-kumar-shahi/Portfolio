"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/utils/cn";

interface NameWordItem {
  text: string;
  className?: string;
}

interface TypewriterNameEffectProps {
  englishName: NameWordItem[];
  hindiName: NameWordItem[];
}

export const TypewriterNameEffect = ({
  englishName,
  hindiName
}: TypewriterNameEffectProps) => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [displayText, setDisplayText] = useState<NameWordItem[]>(englishName);
  const [visibleCharacters, setVisibleCharacters] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const getTotalCharacters = (text: NameWordItem[]) => {

    return text.reduce((total, word, index) => {
      const charCount = total + word.text.length;
      return index < text.length - 1 ? charCount + 1 : charCount;
    }, 0);
  };

  useEffect(() => {
    const newText = isEnglish ? englishName : hindiName;
    setDisplayText(newText);
  
    let currentChar = 0;
    setVisibleCharacters([]);
  
    const totalChars = getTotalCharacters(newText);
  
    intervalRef.current = setInterval(() => {
      if (currentChar <= totalChars) {
        setVisibleCharacters(Array.from({ length: currentChar }, (_, i) => i));
        currentChar++;
      } else {
        clearInterval(intervalRef.current!);
        timeoutRef.current = setTimeout(() => {
          setIsEnglish(prev => !prev);
        }, 3000);
      }
    }, 100);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isEnglish, englishName, hindiName]);

  const renderName = (name: NameWordItem[]) => {
    let charCounter = 0;
    
    return (
      <div className="flex items-center space-x-2">
        {name.map((word, wordIdx) => {
          const chars = word.text.split('').map((char) => {
            const absoluteCharIndex = charCounter++;
            const isVisible = visibleCharacters.includes(absoluteCharIndex);
            
            return (
              <span 
                key={`char-${absoluteCharIndex}`}
                className={cn("transition-opacity duration-75", 
                  isVisible ? "opacity-100" : "opacity-0"
                )}
              >
                {char}
              </span>
            );
          });
          
          if (wordIdx < name.length - 1) {
            charCounter++;
          }
          
          return (
            <span key={`word-${wordIdx}`} className={cn("inline-block", word.className)}>
              {chars}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className="relative h-8 flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={isEnglish ? "english" : "hindi"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderName(displayText)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};