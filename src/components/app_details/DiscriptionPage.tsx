"use client"
import { ChevronDown, Heart } from 'lucide-react';
import React, { useEffect, useState } from 'react'



interface Highlight {
  title: string;
  description: string;
  color: string;
}

interface HighlightsPageProps {
  highlight: Highlight[];
  description:string[];

}

const DiscriptionPage = ({highlight,description} : HighlightsPageProps) => {
      const [showFullDescription, setShowFullDescription] = useState(false);
      const [mounted, setMounted] = useState(false);

 console.log(description);
      useEffect(() => {
        setMounted(true);
      }, []);


      if (!mounted) {
        return (
          <div className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Heart className="w-6 h-6 mr-3 text-pink-500" />
              About This App
            </h2>
            {/* Minimal content for server rendering */}
          </div>
        );
      }
    
  return (
    <div className="container mx-auto px-6 py-16">
    <h2 className="text-3xl font-bold mb-8 flex items-center">
      <Heart className="w-6 h-6 mr-3 text-pink-500" />
      About This App
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <div
          className={`text-gray-300 text-lg leading-relaxed ${
            showFullDescription ? "" : "line-clamp-6"
          }`}
        >
          {description.map((item,index)=>{
            return (
              <p key={index} className="mb-4">
            {item}
          </p>
            )
          })}
          
        </div>

        <button
          onClick={() => setShowFullDescription(!showFullDescription)}
          className="flex items-center text-blue-400 hover:text-blue-300 mt-4 transition-colors"
        >
          {showFullDescription ? "Show less" : "Read more"}
          <ChevronDown
            className={`w-5 h-5 ml-1 transition-transform ${
              showFullDescription ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold mb-4">App Highlights</h3>

        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {highlight?.map((item,index)=>{
          return (
          <div  key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 className={`font-semibold ${item.color} mb-2`}>
              {item.title}
            </h4>
            <p className="text-gray-300">
             {item.description}
            </p>
          </div>
            
          )
        })}
        </div>
      </div>
    </div>
  </div>
  )
}

export default DiscriptionPage