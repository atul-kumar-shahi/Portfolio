// components/AppShowcasePage.tsx
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Share, Bookmark, Download, ChevronDown, Star, Globe, Code, Smartphone, Heart } from 'lucide-react';
import screenshots from "@/data/screenshots.json";


const AppShowcasePage: React.FC = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex justify-center flex-col items-center mx-24">
        <div className="relative w-full min-h-[550px] overflow-hidden">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10"></div>
                    <div className="relative z-20 container mx-auto px-6 pt-32 pb-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              Blog
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-200">Transforming the way you connect</h2>
            
            <div className="text-cyan-400 mb-2 flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              FLUTTER DEVELOPER
            </div>
            <div className="text-gray-400 text-sm mb-6 flex items-center gap-2">
              <Code className="w-4 h-4" />
              Built with Flutter and Dart
            </div>
            
            <div className="flex flex-wrap items-center gap-8 mb-8 mx-24">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/20">
                <Image src={screenshots[0]?.logo} alt="App icon" width={64} height={64} className="object-cover" />
              </div>
              
              
              <div className="flex flex-col">
                <div className="flex items-center text-xl font-bold">
                  <Globe className="w-5 h-5 mr-2" />
                  Cross-platform
                </div>
                <div className="text-sm text-gray-400">
                  iOS & Android
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-8 rounded-md font-semibold transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1">
                <Download className="w-5 h-5 inline-block mr-2" />
                Download Now
              </button>
              
              <button className="bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500/10 py-3 px-8 rounded-md font-semibold transition-all">
                <Smartphone className="w-5 h-5 inline-block mr-2" />
                Available Platforms
              </button>
              
              <button className="bg-transparent hover:bg-gray-800 p-3 rounded-full transition-colors">
                <Share className="w-5 h-5" />
              </button>
              
              <button className="bg-transparent hover:bg-gray-800 p-3 rounded-full transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
            <div className="container mx-auto px-6 relative">
        <button className="absolute right-6 top-7 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-2 px-6 rounded-full font-medium flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40">
          <Play className="w-5 h-5" />
          Watch Demo
        </button>
      </div>
            <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <Heart className="w-6 h-6 mr-3 text-pink-500" /> 
          About This App
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className={`text-gray-300 text-lg leading-relaxed ${showFullDescription ? '' : 'line-clamp-6'}`}>
              <p className="mb-4">
                Our cutting-edge Flutter application is designed to revolutionize how users interact with [specific domain] by providing a seamless, intuitive interface combined with powerful features that solve real-world problems.
              </p>
              <p className="mb-4">
                Leveraging the latest Flutter capabilities, the app offers cross-platform compatibility with native-like performance on both iOS and Android devices. The UI is crafted with Material Design principles and custom animations to create a delightful user experience.
              </p>
              <p className="mb-4">
                Key features include real-time synchronization, offline functionality, push notifications, and integration with external services. The app architecture follows clean code principles with a robust state management system, ensuring scalability and maintainability.
              </p>
              <p className="mb-4">
                From initial concept to final deployment, this project showcases my expertise in Flutter development, problem-solving abilities, and commitment to creating high-quality mobile applications that users love.
              </p>
            </div>
            
            <button 
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="flex items-center text-blue-400 hover:text-blue-300 mt-4 transition-colors"
            >
              {showFullDescription ? 'Show less' : 'Read more'}
              <ChevronDown className={`w-5 h-5 ml-1 transition-transform ${showFullDescription ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">App Highlights</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-blue-400 mb-2">Cross-Platform</h4>
                <p className="text-gray-300">Built with Flutter for seamless iOS and Android support</p>
              </div>
              
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-purple-400 mb-2">Modern UI</h4>
                <p className="text-gray-300">Beautiful interfaces with smooth animations</p>
              </div>
              
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-pink-400 mb-2">Offline Mode</h4>
                <p className="text-gray-300">Full functionality even without internet connection</p>
              </div>
              
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-cyan-400 mb-2">Cloud Sync</h4>
                <p className="text-gray-300">Real-time data synchronization across devices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900/50 py-16 mx-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 mx-24">
            App Screenshots
          </h2>
          
          <div className="overflow-x-auto pb-6 mx-24">
            <div className="flex gap-4 min-w-max">
              {screenshots[0].images.map((item:string) => (
                <div 
                  key={item} 
                  className="min-w-[280px] h-[600px] bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-lg"
                >
                  <Image 
                    src={item} 
                    alt={`App screenshot ${item}`} 
                    width={280} 
                    height={600} 
                    className="object-cover h-full w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-blue-800/30">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500">
            <Image src="https://res.cloudinary.com/dp2i02kmy/image/upload/v1745068675/108867628_wmoniz.png" alt="Developer" width={96} height={96} className="object-cover" />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-2">About the Developer</h3>
            <p className="text-gray-300 mb-4">
              Flutter developer with a passion for creating beautiful, high-performance mobile applications. 
              Experienced in building complex UI designs and integrating with various APIs and services.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">GitHub</a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">LinkedIn</a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Portfolio</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcasePage; 