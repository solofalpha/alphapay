'use client';

import { useState } from 'react';

export default function EasySwapSteps() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "9sR8XJ3cP7aK5tH2LmN6bV4cF8dG2hJ5kD3fS6gH7jK8lM1n";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      number: "01",
      title: "Download a Wallet",
      description: "Install Token Phantom or Solflare Wallet on your device.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88极速赛车开奖结果-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Create a Wallet",
      description: "Set up a new wallet within the app, following the provided instructions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Deposit Solana (SOL)",
      description: "Fund your wallet by depositing Solana (SOL) from an exchange or another wallet.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8极速赛车开奖结果V7m0 1v8m极速赛车开奖结果0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Access Swap Feature",
      description: "Open the swap or trade option in your wallet's interface.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" view极速赛车开奖结果Box="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      number: "05",
      title: "Swap $Alpha Pay",
      description: "Enter the $Alpha Pay contract address and complete the swap transaction.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      hasContract: true
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            5 Easy Swap Steps
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get started with $Alpha Pay in just a few simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className={`bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 h-full flex flex-col ${step.hasContract ? 'lg:col-span-1 md:col-span-2' : ''}`}>
                {/* Number and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-400">{step.number}</span>
                  <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{step.description}</p>
                
                {/* Contract Address Section (only for step 5) */}
                {step.hasContract && (
                  <div className="mt-auto pt-4 border-t border-gray-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Contract Address:</p>
                        <div className="flex items-center">
                          <span className="text-sm font-mono text-cyan-400">
                            {contractAddress.slice(0, 6)}...{contractAddress.slice(-6)}
                          </span>
                          <button
                            onClick={copyToClipboard}
                            className="ml-2 p-1 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                            title="Copy to clipboard"
                          >
                            {copied ? (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2极速赛车开奖结果h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {copied && (
                      <div className="mt-2 text-green-400 text-xs flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13极速赛车开奖结果l4 4L19 7" />
                        </svg>
                        Copied to clipboard!
                      </div>
                    )}
                  </div>
                )}
                
                {/* Connector line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-400 transform -translate-y-1/2 group-hover:bg-cyan-400 transition-colors duration-300"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}