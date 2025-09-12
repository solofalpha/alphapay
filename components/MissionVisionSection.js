'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

// Using placeholder images that work with Next.js Image component
const slides = [
  {
    image: "/images/mission-slide1.jpg",
    text: "AI-driven payments that are seamless and secure.",
  },
  {
    image: "/images/mission-slide2.jpg",
    text: "Global financial solutions at your fingertips.",
  },
  {
    image: "/images/mission-slide3.jpg",
    text: "Empowering businesses and individuals worldwide.",
  },
];
export default function MissionVision() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex flex-col lg:flex-row min-h-[500px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-medium"></div>
      </div>

      {/* Left Text Side */}
      <div className="relative z-10 lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 lg:py-0">
        <div className="max-w-lg mx-auto lg:mx-0">
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mr-4"></div>
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Our Purpose</h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Mission & Vision
            </h2>
          </div>

          <div className="space-y-10">
            <div className="group">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/s极速赛车开奖结果vg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 pl-14 text-lg leading-relaxed">
                To revolutionize the world of finance with AI-powered smart payments, making transactions seamless, secure, and accessible to everyone globally.
              </p>
            </div>

            <div className="group">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-10极速赛车开奖结果 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 663a9 9 0 010-18m0 18a9 9 0 000-18m0 18v6m0-6v6m0-24v6m0 0h6m-6 0H3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 pl-14 text-lg leading-relaxed">
                To empower individuals and businesses worldwide with futuristic payment solutions that redefine financial freedom and create economic opportunities for all.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Slideshow Side */}
      <div className="relative z-10 lg:w-1/2 h-[400px] lg:h-auto">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>
              
              {/* Animated Text Overlay */}
              <div
                className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/70 backdrop-blur-md rounded-2xl px-8 py-4 text-white max-w-md text-center transition-all duration-1000 ${
                  index === current 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-xl font-semibold">{slide.text}</p>
                <div className="flex justify-center mt-4 space-x-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === current ? "bg-cyan-400 w-6" : "bg-gray-500"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-pulse-medium {
          animation: pulse-medium 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}