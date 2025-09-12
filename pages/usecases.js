'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function UseCasesPage() {
  // Use cases data
  const useCases = [
    {
      title: "Peer-to-Peer Payments",
      description: "Send and receive payments instantly with minimal fees, leveraging Solana's high-speed blockchain technology.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
      features: ["Instant transactions", "Near-zero fees", "Global accessibility", "Secure transfers"],
      gradient: "from-blue-500/10 to-blue-700/10"
    },
    {
      title: "Micropayments",
      description: "Enable pay-per-use models for digital content, services, and in-app purchases with fractional token amounts.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: ["Fractional payments", "Content monetization", "Streaming services", "In-app purchases"],
      gradient: "from-cyan-500/10 to-cyan-700/10"
    },
    {
      title: "Loyalty & Rewards",
      description: "Create innovative loyalty programs that reward customers with tokens that hold real value and can be traded.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: ["Token rewards", "Program interoperability", "Gamified experiences", "Redemption options"],
      gradient: "from-purple-500/10 to-purple-700/10"
    },
    {
      title: "Cross-Border Remittances",
      description: "Send money across borders with significantly lower fees compared to traditional remittance services.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      features: ["Low-cost transfers", "Fast settlement", "Currency conversion", "Global reach"],
      gradient: "from-indigo-500/10 to-indigo-700/10"
    },
    {
      title: "DeFi Integration",
      description: "Access decentralized financial services including staking, yield farming, and lending directly through Alpha Pay.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      features: ["Staking rewards", "Yield farming", "Lending protocols", "Liquidity pools"],
      gradient: "from-blue-600/10 to-blue-800/10"
    },
    {
      title: "NFT Marketplaces",
      description: "Buy, sell, and trade digital assets seamlessly using Alpha Pay as the preferred payment method.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: ["Digital art trading", "Collectibles marketplace", "Royalty payments", "Creator monetization"],
      gradient: "from-cyan-600/10 to-cyan-800/10"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Alpha Pay Use Cases
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Discover the diverse applications of Alpha Pay tokens across various industries and everyday transactions.
          </p>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden group">
                <div className={`h-40 flex items-center justify-center bg-gradient-to-br ${useCase.gradient}`}>
                  <div className="p-4 bg-gray-900/30 rounded-2xl backdrop-blur-sm">
                    {useCase.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-center">{useCase.title}</h3>
                  <p className="text-gray-400 mb-4 text-center">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Alpha Pay?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Solana's blockchain enables 65,000+ transactions per second with sub-second finality.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Cost Effective</h3>
              <p className="text-gray-400">Average transaction fees of $0.00025 make microtransactions economically viable.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
              <p className="text-gray-400">Solana's Proof of History consensus is significantly more energy efficient than Proof of Work blockchains.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Industries Transformed</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center hover:border-blue-500 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-full mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Retail</h3>
              <p className="text-sm text-gray-400">Point-of-sale systems and customer loyalty programs</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center hover:border-cyan-500 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-full mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Gaming</h3>
              <p className="text-sm text-gray-400">In-game economies and player-to-player trading</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center hover:border-purple-500 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-full mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Finance</h3>
              <p className="text-sm text-gray-400">Decentralized lending, borrowing, and trading</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center hover:border-indigo-500 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500/10 rounded-full mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Real Estate</h3>
              <p className="text-sm text-gray-400">Fractional ownership and property tokenization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Integrate Alpha Pay into your platform and join the future of digital payments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="relative px-8 py-4 text-lg font-medium group">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-lg"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative text-white">Get Started</span>
            </button>
            <button className="px-8 py-4 text-lg font-medium text-white bg-transparent border border-blue-500 rounded-lg hover:bg-blue-500/10 transition-colors duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}