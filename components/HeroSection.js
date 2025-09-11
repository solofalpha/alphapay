"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/1a.jpg",
  "/1b.jpg",
  "/1c.jpg",
  "/1dd.jpg",
  "/1d.jpg",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Gradient overlay (crypto theme) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c]/70 via-[#0d1b2a]/80 to-[#0a192f]/90" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold 
          bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#0a192f] 
          bg-clip-text text-transparent animate-pulse">
          Welcome to Alpha Pay AI
        </h1>

        <p className="mt-6 text-lg md:text-2xl max-w-2xl text-gray-200">
          Smart payments, seamless transactions, and the future of finance — all powered by AI.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 rounded-2xl 
            bg-gradient-to-r from-[#0072ff] to-[#00c6ff] 
            hover:opacity-90 text-white font-semibold 
            shadow-lg transition">
            Get Started
          </button>

          <button className="px-6 py-3 rounded-2xl 
            bg-white/10 hover:bg-white/20 
            text-white font-semibold 
            backdrop-blur-lg border border-white/20 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
