'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function UseCasesPage() {
  const [expandedCase, setExpandedCase] = useState(null);

  const useCases = [
    {
      id: 1,
      title: "Low-Cost Remittances",
      shortDescription: "Borderless transfers with minimal fees",
      fullDescription: "Alpha Pay revolutionizes the remittance industry by leveraging blockchain technology to eliminate intermediaries, dramatically reducing costs for cross-border money transfers. Our platform enables users to send funds internationally at a fraction of traditional costs, making financial support more accessible for families across the globe.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        "Significantly lower fees compared to traditional services",
        "Borderless transactions to any supported country",
        "Real-time exchange rates with full transparency",
        "Secure and transparent transaction tracking"
      ],
      stats: "Substantial savings on every transfer",
      image: "🌍"
    },
    {
      id: 2,
      title: "Instant Cross-Border Payments",
      shortDescription: "Real-time settlements for global transactions",
      fullDescription: "With Alpha Pay, cross-border payments are no longer subject to lengthy processing times. Our blockchain infrastructure enables near-instant settlement, allowing businesses and individuals to conduct international transactions with unprecedented speed and efficiency, eliminating the typical waiting period associated with traditional banking systems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [
        "Transactions completed in seconds, not days",
        "Continuous availability with no banking holidays",
        "Multi-currency support with auto-conversion",
        "Seamless integration with existing financial systems"
      ],
      stats: "Consistent high-speed transaction processing",
      image: "🔄"
    },
    {
      id: 3,
      title: "Stablecoin Pegging",
      shortDescription: "Value stability against currency volatility",
      fullDescription: "Alpha Pay's stablecoin pegging mechanism protects users from the volatility often associated with cryptocurrencies. By maintaining a stable value pegged to reliable assets, we ensure that remittance amounts remain predictable, providing both senders and recipients with financial certainty in an otherwise fluctuating market.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: [
        "Pegged to stable assets to minimize volatility",
        "Regular auditing of reserves for transparency",
        "Multiple currency options for different regions",
        "Instant conversion at predetermined rates"
      ],
      stats: "Minimal value fluctuation maintained consistently",
      image: "📊"
    },
    {
      id: 4,
      title: "Governance Voting",
      shortDescription: "Community-driven platform evolution",
      fullDescription: "Alpha Pay token holders have a direct say in the platform's development through our governance system. This democratic approach ensures that the community guides important decisions, from fee structures to new feature implementations, creating a truly user-centric financial ecosystem that evolves according to the needs of its participants.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: [
        "Vote on new remittance corridor expansions",
        "Propose and decide on fee structure changes",
        "Participate in platform development decisions",
        "Earn rewards for active governance participation"
      ],
      stats: "Active community participation in decision-making",
      image: "🏛️"
    },
    {
      id: 5,
      title: "Staking Rewards",
      shortDescription: "Earn yields on held tokens",
      fullDescription: "Alpha Pay's staking mechanism allows token holders to earn attractive yields while contributing to network security. By staking their tokens, users not only generate passive income but also help stabilize the ecosystem, creating a virtuous cycle of value appreciation and platform strengthening that benefits all participants.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      features: [
        "Flexible staking periods to suit different needs",
        "Tiered rewards based on amount and duration staked",
        "Regular reward distribution with no lock-in periods",
        "Additional benefits for long-term stakers"
      ],
      stats: "Competitive yields for token holders",
      image: "📈"
    },
    {
      id: 6,
      title: "Merchant Acceptance",
      shortDescription: "Spend tokens at global partner outlets",
      fullDescription: "Alpha Pay tokens aren't just for transfers—they're a spendable currency at our growing network of merchant partners worldwide. From retail stores to service providers, our global acceptance network allows users to directly utilize their tokens, creating a comprehensive financial ecosystem that goes beyond simple remittances.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      features: [
        "Growing network of global merchant partners",
        "Instant conversion at point of sale with no fees",
        "Exclusive discounts and offers for token holders",
        "Seamless mobile payment integration"
      ],
      stats: "Extensive network of merchant partners worldwide",
      image: "🏪"
    }
  ];

  const toggleExpand = (id) => {
    if (expandedCase === id) {
      setExpandedCase(null);
    } else {
      setExpandedCase(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Alpha Pay Use Cases
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            Discover how Alpha Pay is revolutionizing global finance with blockchain technology
          </p>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">How Alpha Pay Transforms Financial Transactions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <div 
                key={useCase.id} 
                className={`rounded-2xl overflow-hidden border border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-105 ${expandedCase === useCase.id ? 'bg-gray-800' : 'bg-gray-800/50'}`}
              >
                <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 mb-4 text-white">
                    {useCase.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                  <p className="text-gray-400 mb-4">{useCase.shortDescription}</p>
                  
                  <div className="flex justify-between items-center mt-6">
                    <button 
                      onClick={() => toggleExpand(useCase.id)}
                      className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
                    >
                      {expandedCase === useCase.id ? 'Show less' : 'Learn more'}
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transition-transform ${expandedCase === useCase.id ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    
                    <div className="text-3xl">
                      {useCase.image}
                    </div>
                  </div>
                </div>
                
                {/* Expanded Content */}
                {expandedCase === useCase.id && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-700 pt-6">
                      <p className="text-gray-300 mb-6">{useCase.fullDescription}</p>
                      
                      <h4 className="font-bold text-lg mb-3">Key Features</h4>
                      <ul className="space-y-2 mb-6">
                        {useCase.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="bg-gray-700/50 p-4 rounded-lg">
                        <p className="font-medium">{useCase.stats}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Alpha Pay?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
              <div className="text-5xl font-bold text-blue-400 mb-4">💸</div>
              <h3 className="text-xl font-bold mb-2">Cost Effective</h3>
              <p className="text-gray-400">Significant savings compared to traditional services</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
              <div className="text-5xl font-bold text-cyan-400 mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Instant transactions without banking delays</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
              <div className="text-5xl font-bold text-blue-400 mb-4">🌎</div>
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p className="text-gray-400">Comprehensive international coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Alpha Pay Community</h2>
          <p className="text-xl text-gray-300 mb-10">
            Be part of the financial revolution and connect with thousands of Alpha Pay users worldwide
          </p>
          
          <a
            href="https://t.me/+LAVc0V_XYN9mZDFk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.141-.259.259-.374.261l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
            </svg>
            Join Our Telegram Community
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}