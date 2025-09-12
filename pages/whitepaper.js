'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WhitepaperPage() {
  // Table of contents
  const tableOfContents = [
    { id: "abstract", title: "Abstract" },
    { id: "introduction", title: "Introduction" },
    { id: "vision", title: "Vision & Mission" },
    { id: "technology", title: "Technology" },
    { id: "tokenomics", title: "Tokenomics" },
    { id: "usecases", title: "Use Cases" },
    { id: "roadmap", title: "Roadmap" },
    { id: "team", title: "Team" },
    { id: "conclusion", title: "Conclusion" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Alpha Pay Whitepaper
          </h1>
          <p className="text-xl text-gray-300 mb-10">
            The complete technical documentation and economic model of the Alpha Pay ecosystem
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="relative px-8 py-4 text-lg font-medium group">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-lg"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative text-white">Download PDF</span>
            </button>
            <button className="px-8 py-4 text-lg font-medium text-white bg-transparent border border-blue-500 rounded-lg hover:bg-blue-500/10 transition-colors duration-300">
              Read Online
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Table of Contents */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 bg-gray-800/50 rounded-xl border border-gray-700 p-6">
              <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
              <ul className="space-y-3">
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a 
                      href={`#${item.id}`} 
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Abstract */}
            <div id="abstract" className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Abstract</h2>
              <p className="text-gray-300 mb-4">
                Alpha Pay is a utility token built on the Solana blockchain, designed to deliver fast, low-cost, and inclusive financial solutions for a global audience. This whitepaper outlines the vision, technical foundation, use cases, and adoption strategy for Alpha Pay, aiming to empower users with accessible, efficient, and community-driven financial tools.
              </p>
              <p className="text-gray-300">
                By leveraging Solana's high-throughput blockchain, Alpha Pay enables peer-to-peer payments, micropayments for digital services, loyalty and rewards programs, cross-border remittances, and decentralized finance (DeFi) integration.
              </p>
            </div>

            {/* Introduction */}
            <div id="introduction" className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Introduction</h2>
              <p className="text-gray-300 mb-4">
                The global financial landscape is evolving, driven by increasing smartphone penetration, growing cryptocurrency adoption, and demand for efficient digital payment systems. However, challenges such as high transaction fees, slow cross-border transfers, and limited access to financial services persist.
              </p>
              <p className="text-gray-300">
                Alpha Pay addresses these pain points by leveraging Solana's high-throughput blockchain to deliver a versatile utility token tailored to modern financial needs.
              </p>
            </div>

            {/* Vision & Mission */}
            <div id="vision" className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Vision & Mission</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-cyan-400">Vision</h3>
                  <p className="text-gray-300">
                    To create a seamless, inclusive, and cost-effective financial ecosystem that empowers users to transact, save, and engage with businesses and communities using Alpha Pay tokens.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-cyan-400">Mission</h3>
                  <p className="text-gray-300">
                    To drive financial inclusion and innovation globally by providing a scalable, user-friendly platform for payments, rewards, and DeFi opportunities, with a focus on local relevance and community engagement.
                  </p>
                </div>
              </div>
            </div>

            {/* Technology */}
            <div id="technology" className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Technology</h2>
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Built on Solana</h3>
              <p className="text-gray-300 mb-4">
                Alpha Pay leverages the Solana blockchain, which provides unparalleled speed, scalability, and security. Solana's unique Proof of History consensus enables:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>65,000+ transactions per second</li>
                <li>Sub-second finality</li>
                <li>Extremely low transaction fees ($0.00025 average)</li>
                <li>Energy-efficient consensus mechanism</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 text-cyan-400">Smart Contracts</h3>
              <p className="text-gray-300 mb-4">
                Alpha Pay utilizes Rust-based smart contracts on Solana for:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Token minting and distribution</li>
                <li>Staking and rewards mechanisms</li>
                <li>Governance protocols</li>
                <li>Payment processing</li>
              </ul>
            </div>

            {/* Tokenomics */}
            <div id="tokenomics" className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Tokenomics</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">Token Metrics</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li><span className="font-medium">Token Name:</span> Alpha Pay</li>
                    <li><span className="font-medium">Token Symbol:</span> ALPHA</li>
                    <li><span className="font-medium">Blockchain:</span> Solana</li>
                    <li><span className="font-medium">Total Supply:</span> 1,000,000,000</li>
                    <li><span className="font-medium">Initial Market Cap:</span> $2,500,000</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">Distribution</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li><span className="font-medium">Public Sale:</span> 40%</li>
                    <li><span className="font-medium">Team & Advisors:</span> 20%</li>
                    <li><span className="font-medium">Ecosystem Fund:</span> 15%</li>
                    <li><span className="font-medium">Liquidity Pool:</span> 15%</li>
                    <li><span className="font-medium">Reserve Fund:</span> 10%</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div id="usecases" className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Use Cases</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 p-5 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-cyan-400">Peer-to-Peer Payments</h3>
                  <p className="text-gray-300">Fast, low-cost transactions for everyday purchases, bill payments, and money transfers.</p>
                </div>
                <div className="bg-gray-900/50 p-5 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-cyan-400">Micropayments</h3>
                  <p className="text-gray-300">Enable pay-per-use models for digital content, services, and in-app purchases.</p>
                </div>
                <div className="bg-gray-900/50 p-5 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-cyan-400">Loyalty & Rewards</h3>
                  <p className="text-gray-300">Tokenized rewards system for businesses and customers with gamification elements.</p>
                </div>
                <div className="bg-gray-900/50 p-5 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-cyan-400">Cross-Border Remittances</h3>
                  <p className="text-gray-300">Low-cost, instant international transfers with fees as low as 0.1%.</p>
                </div>
                <div className="bg-gray-900/50 p-5 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-cyan-400">DeFi Integration</h3>
                  <p className="text-gray-300">Staking, yield farming, and access to decentralized savings protocols.</p>
                </div>
                <div className="bg-gray-900/50 p-5 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-cyan-400">NFT Marketplaces</h3>
                  <p className="text-gray-300">Preferred payment method for digital art, collectibles, and creator monetization.</p>
                </div>
              </div>
            </div>

            {/* Roadmap */}
            <div id="roadmap" className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Roadmap</h2>
              <div className="relative">
                {/* Timeline */}
                <div className="absolute left-4 h-full w-0.5 bg-blue-500/30"></div>
                
                {/* Q4 2023 */}
                <div className="flex items-start mb-8">
                  <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center z-10 mr-4">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-cyan-400">Q4 2023</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Token generation event</li>
                      <li>Initial exchange listings</li>
                      <li>Wallet integration</li>
                    </ul>
                  </div>
                </div>

                {/* Q1 2024 */}
                <div className="flex items-start mb-8">
                  <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center z-10 mr-4">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-cyan-400">Q1 2024</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Staking platform launch</li>
                      <li>Merchant adoption program</li>
                      <li>Mobile application beta</li>
                    </ul>
                  </div>
                </div>

                {/* Q2 2024 */}
                <div className="flex items-start mb-8">
                  <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center z-10 mr-4">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-cyan-400">Q2 2024</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>DeFi integration</li>
                      <li>Cross-chain compatibility</li>
                      <li>Partnership expansions</li>
                    </ul>
                  </div>
                </div>

                {/* Q3 2024 */}
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center z-10 mr-4">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-cyan-400">Q3 2024</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Governance implementation</li>
                      <li>Advanced payment features</li>
                      <li>Global expansion initiatives</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Team */}
            <div id="team" className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Team</h2>
              <p className="text-gray-300 mb-6">
                Alpha Pay is developed by a team of experienced blockchain developers, financial experts, and business strategists with decades of combined experience in cryptocurrency, fintech, and software development.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 p-5 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-cyan-400">Technical Team</h3>
                  <p className="text-gray-300">Our developers have previously worked on major blockchain projects and bring expertise in Solana development, smart contracts, and security auditing.</p>
                </div>
                <div className="bg-gray-900/50 p-5 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-cyan-400">Business Team</h3>
                  <p className="text-gray-300">Our business development team has extensive experience in fintech, payments processing, and global market expansion strategies.</p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div id="conclusion" className="bg-gray-800/50 rounded-xl border border-gray-700 p-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Conclusion</h2>
              <p className="text-gray-300 mb-4">
                Alpha Pay represents a significant step forward in the evolution of digital payments and financial inclusion. By leveraging the Solana blockchain's unparalleled speed and efficiency, Alpha Pay delivers a utility token that addresses real-world payment challenges while opening new possibilities for decentralized finance.
              </p>
              <p className="text-gray-300">
                With a clear vision, robust technology, and comprehensive ecosystem, Alpha Pay is positioned to become a leading payment solution in the cryptocurrency space, driving adoption and creating value for users, businesses, and developers alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Dive Deeper?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Download the complete whitepaper to explore the technical details and economic model of Alpha Pay.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="relative px-8 py-4 text-lg font-medium group">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-lg"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative text-white">Download Whitepaper</span>
            </button>
            <button className="px-8 py-4 text-lg font-medium text-white bg-transparent border border-blue-500 rounded-lg hover:bg-blue-500/10 transition-colors duration-300">
              Contact Team
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}