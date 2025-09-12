'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TokenomicsPage() {
  // Token distribution data
  const tokenDistribution = [
    { category: 'Public Sale', percentage: 40, color: 'bg-blue-500' },
    { category: 'Team & Advisors', percentage: 20, color: 'bg-cyan-400' },
    { category: 'Ecosystem Fund', percentage: 15, color: 'bg-purple-500' },
    { category: 'Liquidity Pool', percentage: 15, color: 'bg-indigo-500' },
    { category: 'Reserve Fund', percentage: 10, color: 'bg-blue-700' },
  ];

  // Token utility data
  const tokenUtilities = [
    {
      title: 'Staking Rewards',
      description: 'Earn passive income by staking your tokens and securing the network',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Governance',
      description: 'Participate in protocol decisions and shape the future of Alpha Pay',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Transaction Fees',
      description: 'Pay lower fees when using Alpha Pay tokens for transactions',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      title: 'Premium Access',
      description: 'Gain exclusive access to premium features and services',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Alpha Pay Tokenomics
        </h1>
        <p className="text-xl text-gray-300 mb-10">
          Discover the economic model behind Alpha Pay, designed for sustainability, growth, and community rewards.
        </p>
      </section>

      {/* Token Metrics */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Token Metrics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          
          {/* Initial Market Cap */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-colors duration-300">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Initial Market Cap</h3>
              <p className="text-4xl font-bold text-cyan-400 mb-2">$2,500,000</p>
              <p className="text-gray-400">At $0.025 per token</p>
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Distribution Chart */}
          <div className="relative">
            <div className="w-64 h-64 mx-auto relative">
              {/* Pie chart representation */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-blue-500 transform -rotate-0 clip-[0_50%_50%_0]"></div>
                <div className="absolute inset-0 bg-cyan-400 transform rotate-144 clip-[0_50%_50%_0]"></div>
                <div className="absolute inset-0 bg-purple-500 transform rotate-216 clip-[0_50%_50%_0]"></div>
                <div className="absolute inset-0 bg-indigo-500 transform rotate-252 clip-[0_50%_50%_0]"></div>
                <div className="absolute inset-0 bg-blue-700 transform rotate-324 clip-[0_50%_50%_0]"></div>
              </div>
              
              <div className="absolute inset-0 rounded-full bg-gray-900 m-8 flex items-center justify-center">
                <span className="text-2xl font-bold">100%</span>
              </div>
            </div>
          </div>
          
          {/* Distribution Details */}
          <div className="space-y-6">
            {tokenDistribution.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                <div className="flex items-center">
                  <div className={`w-4 h-4 ${item.color} rounded-full mr-4`}></div>
                  <span className="font-medium">{item.category}</span>
                </div>
                <span className="text-lg font-bold">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Utility */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Token Utility</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tokenUtilities.map((utility, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {utility.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{utility.title}</h3>
                <p className="text-gray-400">{utility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vesting Schedule */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <h2 className="text-3xl font-bold text-center mb-12">Vesting Schedule</h2>
        
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Allocation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Vesting Period</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Cliff</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Public Sale</td>
                  <td className="px-6 py-4 whitespace-nowrap">40%</td>
                  <td className="px-6 py-4 whitespace-nowrap">3 months linear</td>
                  <td className="px-6 py-4 whitespace-nowrap">1 month</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Team & Advisors</td>
                  <td className="px-6 py-4 whitespace-nowrap">20%</td>
                  <td className="px-6 py-4 whitespace-nowrap">24 months linear</td>
                  <td className="px-6 py-4 whitespace-nowrap">6 months</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Ecosystem Fund</td>
                  <td className="px-6 py-4 whitespace-nowrap">15%</td>
                  <td className="px-6 py-4 whitespace-nowrap">36 months linear</td>
                  <td className="px-6 py-4 whitespace-nowrap">3 months</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Liquidity Pool</td>
                  <td className="px-6 py-4 whitespace-nowrap">15%</td>
                  <td className="px-6 py-4 whitespace-nowrap">12 months linear</td>
                    <td className="px-6 py-4 whitespace-nowrap">None</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Reserve Fund</td>
                  <td className="px-6 py-4 whitespace-nowrap">10%</td>
                  <td className="px-6 py-4 whitespace-nowrap">48 months linear</td>
                  <td className="px-6 py-4 whitespace-nowrap">12 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Alpha Pay Revolution</h2>
        <p className="text-xl text-gray-300 mb-10">
          Be part of the future of decentralized finance and global payments with Alpha Pay.
        </p>
        <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors duration-300">
          Get Started
        </button>
      </section>
      
      <Footer />
    </div>
  );
}