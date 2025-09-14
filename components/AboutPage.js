'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '@/public/logo.png'; // Adjust path as needed

export default function ModernAboutSection() {
  const [activeCard, setActiveCard] = useState(0);
  
  const aboutCards = [
    {
      title: "Executive Summary",
      content: "Alpha Pay is a utility token built on the Solana blockchain, designed to deliver fast, low-cost, and inclusive financial solutions for a global audience. Leveraging Solana's high-speed, scalable infrastructure, Alpha Pay enables peer-to-peer payments, micropayments for digital services, loyalty and rewards programs, cross-border remittances, and decentralized finance (DeFi) integration.",
      icon: "📊"
    },
    {
      title: "Our Vision", 
      content: "To create a seamless, inclusive, and cost-effective financial ecosystem that empowers users to transact, save, and engage with businesses and communities using Alpha Pay tokens.",
      icon: "🎯"
    },
    {
      title: "The Challenge",
      content: "High transaction fees, slow cross-border transfers, and limited access to financial services persist in today's global financial landscape. Alpha Pay addresses these pain points head-on.",
      icon: "⚡"
    },
    {
      title: "The Solution",
      content: "Leveraging Solana's high-throughput blockchain to deliver a versatile utility token tailored to modern financial needs, focusing on speed, affordability, and accessibility.",
      icon: "💡"
    }
  ];

  // Auto-rotate cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % aboutCards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Logo/Visual Section */}
          <div className="relative">
            <div className="flex flex-col items-center lg:items-start">
              {/* Animated Logo Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
                {/* Outer glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
                
                {/* Main logo container */}
                <div className="absolute inset-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 flex items-center justify-center shadow-2xl">
                  {/* Animated circles */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-cyan-500/10 rounded-full animate-ping animation-delay-1000"></div>
                  
                  {/* Logo content */}
                  <div className="relative z-10 flex items-center justify-center w-full h-full p-6">
                    <Image
                      src={Logo}
                      alt="Alpha Pay Logo"
                      width={200}
                      height={200}
                      className="object-contain w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="text-2xl font-bold text-blue-400">1000+</div>
                  <div className="text-gray-400 text-sm">TPS Speed</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="text-2xl font-bold text-cyan-400">$0.0001</div>
                  <div className="text-gray-400 text-sm">Avg. Fee</div>
                </div>
              </div>
            </div>
          </div>

          {/* Information Cards Section */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                About Alpha Pay
              </h2>
              <p className="text-xl text-gray-300">
                Revolutionizing global finance with Solana-powered solutions
              </p>
            </div>

            {/* Cards Container */}
            <div className="relative h-96 md:h-80">
              {aboutCards.map((card, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                    activeCard === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 h-full hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex items-start mb-4">
                      <div className="text-3xl mr-4">{card.icon}</div>
                      <h3 className="text-xl font-bold text-white">{card.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{card.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Card Navigation */}
            <div className="flex justify-center lg:justify-start space-x-2">
              {aboutCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeCard === index
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20">
            <h4 className="font-bold text-blue-400 mb-3">Solana Powered</h4>
            <p className="text-gray-300">Built on the world's fastest blockchain for instant transactions</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20">
            <h4 className="font-bold text-blue-400 mb-3">Global Reach</h4>
            <p className="text-gray-300">Designed for a worldwide audience with cross-border capabilities</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20">
            <h4 className="font-bold text-blue-400 mb-3">Community Driven</h4>
            <p className="text-gray-300">Focused on user needs and community engagement</p>
          </div>
        </div>
      </div>
    </section>
  );
}