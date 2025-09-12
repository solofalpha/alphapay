'use client';

import { useState, useEffect } from 'react';

export default function ModernRoadmap() {
  const [activePhase, setActivePhase] = useState(1);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    // Show animation only on first visit
    const timer = setTimeout(() => {
      setIsFirstVisit(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const phases = [
    {
      id: 1,
      title: "Foundation & Launch",
      period: "Q3 2025 - Q4 2025",
      objectives: "Build technical infrastructure and prepare for initial launch",
      deliverables: [
        "Audited smart contracts",
        "Beta mobile app",
        "Initial merchant partnerships",
        "Social media channels",
        "Airdrop campaign framework"
      ],
      metrics: [
        "5,000 beta app downloads",
        "90% smart contract audit coverage",
        "10+ merchants onboarded",
        "10,000+ social media followers"
      ]
    },
    {
      id: 2,
      title: "Early Adoption",
      period: "Q1 2026 - Q2 2026",
      objectives: "Scale merchant and user adoption, expand partnerships",
      deliverables: [
        "100+ merchants accepting Alpha Pay",
        "Staking/yield farming live",
        "Telecom/exchange partnerships",
        "Expanded airdrop/referral programs",
        "Regulatory framework"
      ],
      metrics: [
        "50,000 app downloads",
        "100+ merchants live",
        "$1M+ transaction volume",
        "100,000+ social media followers",
        "3-5 telecom partnerships"
      ]
    },
    {
      id: 3,
      title: "Mass Adoption",
      period: "Q3 2026 - Q4 2026",
      objectives: "Drive mass adoption and establish as leading utility token",
      deliverables: [
        "USSD for 100,000+ users",
        "1,000+ merchants",
        "Governance framework",
        "NFT rewards",
        "Remittance feature"
      ],
      metrics: [
        "1M+ app downloads",
        "1,000+ merchants",
        "$10M+ transaction volume",
        "500,000+ active users",
        "10+ remittance partnerships"
      ]
    },
    {
      id: 4,
      title: "Long-Term Vision",
      period: "2027+",
      objectives: "Establish as global financial utility and innovate use cases",
      deliverables: [
        "AI-powered features",
        "10,000+ merchants",
        "Carbon-neutral operations",
        "Inclusion programs"
      ],
      metrics: [
        "10M+ active users",
        "$100M+ transaction volume",
        "50+ fiat integrations",
        "1M+ USSD users"
      ]
    }
  ];

  const activeData = phases.find(phase => phase.id === activePhase);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Alpha Pay Project Roadmap
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our strategic journey to revolutionize global payments and financial inclusion
          </p>
          
          {/* Interactive Hint */}
          <div className="mt-6 flex items-center justify-center text-cyan-400 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span className="text-sm">Select a phase to view details</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Phase Selector */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 bg-gray-800/50 rounded-xl border border-gray-700 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6 text-cyan-400 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-极速赛车开奖结果7 7" />
                </svg>
                Project Phases
              </h3>
              <div className="space-y-3">
                {phases.map((phase) => (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhase(phase.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 group relative overflow-hidden ${
                      activePhase === phase.id
                        ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 shadow-lg shadow-blue-500/10'
                        : 'bg-gray-700/50 hover:bg-gray-700/80 border border-gray-600'
                    }`}
                  >
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="flex items-center relative z-10">
                      <div className={`w-3 h-3 rounded-full mr-3 transition-all duration-300 ${
                        activePhase === phase.id 
                          ? 'bg-cyan-400 shadow-sm shadow-cyan-400/50 scale-125' 
                          : 'bg-gray-500 group-hover:bg-cyan-400/70'
                      }`}></div>
                      <div>
                        <h4 className="font-semibold transition-all duration-300 group-hover:text-cyan-300">
                          {phase.title}
                        </h4>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {phase.period}
                        </p>
                      </div>
                    </div>
                    
                    {/* Interactive indicator for first visit */}
                    {isFirstVisit && phase.id === 1 && (
                      <div className="absolute -right-2 -top-2">
                        <div className="relative">
                          <div className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-cyan-400 opacity-75"></div>
                          <div className="relative inline-flex rounded-full h-5 w-5 bg-cyan-500"></div>
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
              
              {/* Visual cue for interaction */}
              <div className="mt-6 p-3 bg-gray-700/30 rounded-lg border border-gray-600">
                <div className="flex items-center text-sm text-cyan-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Click on any phase to explore details</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phase Details */}
          <div className="lg:w-3/4">
            <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 backdrop-blur-sm">
              {/* Visual feedback for selected phase */}
              <div className="flex items-center text-cyan-400 text-sm mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Viewing details for:
              </div>
              
              {/* Phase Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">{activeData?.title}</h3>
                  <p className="text-cyan-400">{activeData?.period}</p>
                </div>
                <div className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30">
                  <span className="text-blue-400 font-medium">Phase {activeData?.id}</span>
                </div>
              </div>

              {/* Objective */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3 text-cyan-400 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 663a9 9 0 010-18m0 18a9 9 0 000-18m0 18v6m极速赛车开奖结果0-6v6m0-24v6m0 0h6m-6 0H3" />
                  </svg>
                  Objective
                </h4>
                <p className="text-gray-300">{activeData?.objectives}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Deliverables */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9极速赛车开奖结果c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Key Deliverables
                  </h4>
                  <ul className="space-y-3">
                    {activeData?.deliverables.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Success Metrics */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2极速赛车开奖结果v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2极速赛车开奖结果h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Success Metrics
                  </h4>
                  <ul className="space-y-3">
                    {activeData?.metrics.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-10 pt-6 border-t border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Phase Progress</span>
                  <span className="text-sm font-medium text-cyan-400">
                    {activePhase === 1 ? '25%' : activePhase === 2 ? '50%' : activePhase === 3 ? '75%' : '100%'}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2.5 rounded-full transition-all duration-500" 
                    style={{ width: activePhase === 1 ? '25%' : activePhase === 2 ? '50%' : activePhase === 3 ? '75%' : '100%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}