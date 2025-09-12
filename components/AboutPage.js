"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Globe, Shield, Bolt } from "lucide-react";

export default function AboutPage() {
  const logoRef = useRef(null);

  // 3D rotation animation
  useEffect(() => {
    let rotation = 0;
    const interval = setInterval(() => {
      if (logoRef.current) {
        rotation += 1;
        logoRef.current.style.transform = `rotateY(${rotation}deg) rotateX(${rotation/2}deg)`;
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0a192f] text-white min-h-screen px-6 md:px-12 lg:px-24 py-12">
      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent mb-6">
            About AlphaPay
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            AlphaPay is transforming the way you send, receive, and manage payments. Built on AI and blockchain technology, we ensure secure, fast, and intelligent transactions.
          </p>
        </div>

        {/* 3D Logo */}
        <div className="flex-1 flex justify-center">
          <div
            ref={logoRef}
            className="w-48 h-48 rounded-full shadow-lg bg-gradient-to-r from-[#00c6ff] to-[#0072ff] flex items-center justify-center"
          >
            <Image src="/alphapay-logo.png" alt="AlphaPay Logo" width={120} height={120} />
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-20 grid md:grid-cols-3 gap-10">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
          <Globe className="mx-auto mb-4 text-[#00c6ff] animate-pulse" size={32} />
          <h3 className="font-semibold text-xl mb-2">Global Reach</h3>
          <p className="text-gray-300">Send and receive payments anywhere in the world instantly.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
          <Shield className="mx-auto mb-4 text-[#00c6ff] animate-pulse" size={32} />
          <h3 className="font-semibold text-xl mb-2">Secure</h3>
          <p className="text-gray-300">Your funds and data are protected with cutting-edge encryption.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
          <Bolt className="mx-auto mb-4 text-[#00c6ff] animate-pulse" size={32} />
          <h3 className="font-semibold text-xl mb-2">AI Powered</h3>
          <p className="text-gray-300">Smart AI optimizes your transactions every step of the way.</p>
        </div>
      </div>
    </section>
  );
}
