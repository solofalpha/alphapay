'use client';

import { useState, useRef, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TokenomicsPage() {
  const [circleProgress, setCircleProgress] = useState(20);
  const circleRef = useRef(null);

  // Token utility data
  const tokenUtilities = [
    {
      title: 'Low-Cost Remittances',
      description: 'Token enables borderless transfers with minimal fees',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'bg-blue-500/10',
      borderColor: 'hover:border-blue-500'
    },
    {
      title: 'Instant Cross-Border Payments',
      description: 'Facilitates real-time settlements to speed up family support abroad',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'bg-cyan-500/10',
      borderColor: 'hover:border-cyan-500'
    },
    {
      title: 'Stablecoin Pegging',
      description: 'Maintains value stability to avoid currency volatility in remittances',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'bg-purple-500/10',
      borderColor: 'hover:border-purple-500'
    },
    {
      title: 'Governance Voting',
      description: 'Holders vote on remittance corridor expansions and fee reductions',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'bg-indigo-500/10',
      borderColor: 'hover:border-indigo-500'
    },
    {
      title: 'Staking Rewards',
      description: 'Earn yields on held tokens to incentivize long-term remittance users',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'bg-blue-700/10',
      borderColor: 'hover:border-blue-700'
    },
    {
      title: 'Merchant Acceptance',
      description: 'Allows direct spending of remitted funds at partnered global outlets',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      color: 'bg-green-500/10',
      borderColor: 'hover:border-green-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate from 20% to 100% quickly but smoothly
          let progress = 20;
          const interval = setInterval(() => {
            progress += 4; // Adjust this value for speed
            if (progress >= 100) {
              progress = 100;
              clearInterval(interval);
            }
            setCircleProgress(progress);
          }, 20); // Adjust this value for smoothness
        }
      },
      { threshold: 0.5 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Alpha Pay Tokenomics
        </h1>
        <p className="text-xl text-gray-300 mb-10">
          Discover the economic model behind Alpha Pay, designed for sustainability, growth, and community rewards.
        </p>
      </section>

      {/* Token Metrics */}
      <section className="py-1 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Token Metrics</h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Total Supply */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors duration-300">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Total Supply</h3>
              <p className="text-4xl font-bold text-blue-400 mb-2">1,000,000,000</p>
              <p className="text-gray-400">ALPHA Tokens</p>
            </div>
          </div>
          
          {/* Blockchain */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors duration-300">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Blockchain</h3>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full"></div>
                <p className="text-2xl font-bold text-purple-400">Solana</p>
              </div>
              <p className="text-gray-400 mt-2">High-speed, low-cost transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Distribution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <h2 className="text-3xl font-bold text-center mb-12">Token Distribution</h2>
        
        {/* Alpha Pay Description */}
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Alpha Pay</h3>
          <p className="text-gray-300">
            The total supply of Alpha Pay tokens is 1 billion, with a fair launch and 100% of the supply circulating.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          {/* Distribution Chart */}
          <div className="relative" ref={circleRef}>
            <div className="w-64 h-64 mx-auto relative mb-12">
              {/* Animated Pie chart */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-blue-500 transform -rotate-0" style={{ clipPath: `inset(0 0 0 ${100-circleProgress}%)` }}></div>
                <div className="absolute inset-0 bg-cyan-400 transform rotate-144" style={{ clipPath: `inset(0 0 0 ${100-circleProgress}%)` }}></div>
                <div className="absolute inset-0 bg-purple-500 transform rotate-216" style={{ clipPath: `inset(0 0 0 ${100-circleProgress}%)` }}></div>
                <div className="absolute inset-0 bg-indigo-500 transform rotate-252" style={{ clipPath: `inset(0 0 0 ${100-circleProgress}%)` }}></div>
                <div className="absolute inset-0 bg-blue-700 transform rotate-324" style={{ clipPath: `inset(0 0 0 ${100-circleProgress}%)` }}></div>
              </div>
              
              <div className="absolute inset-0 rounded-full bg-gray-900 m-8 flex items-center justify-center">
                <span className="text-2xl font-bold">{circleProgress}%</span>
              </div>
            </div>

            {/* Supply Information Card */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-blue-400">Total Supply:</span>
                  <span className="text-lg font-bold text-blue-400">1 Billion</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-cyan-400">Circulating Supply:</span>
                  <span className="text-lg font-bold text-blue-400">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Utility */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Token Utility</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tokenUtilities.map((utility, index) => (
            <div key={index} className={`bg-gray-800/50 p-6 rounded-xl border border-gray-700 ${utility.borderColor} transition-colors duration-300`}>
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${utility.color} rounded-full mb-4`}>
                  {utility.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{utility.title}</h3>
                <p className="text-gray-400">{utility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Alpha Pay Revolution</h2>
        <p className="text-xl text-gray-300 mb-10">
          Be part of the future of decentralized finance and global payments with Alpha Pay.
        </p>
        <button
          onClick={() => window.open("https://t.me/+LAVc0V_XYN9mZDFk", "_blank")}
          className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors duration-300"
        >
          Get Started
        </button>
      </section>
      
      <Footer />
    </div>
  );
}