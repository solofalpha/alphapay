'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function FuturisticNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md py-2 shadow-xl' : 'bg-gradient-to-b from-gray-900 to-transparent py-4'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center space-x-2 group">
              <Image src={'/logo.png'} width={500} height={500} alt='Alpha pay logo' className='w-12 h-12 lg:w-16 lg:h-16 rounded-md object-cover' />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Alpha Pay
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <a href="/" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 transition-all duration-300 group relative">
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/tokenomics" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 transition-all duration-300 group relative">
              <span>Tokenomics</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/usecases" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 transition-all duration-300 group relative">
              <span>Use Cases</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/whitepaper" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 transition-all duration-300 group relative">
              <span>Whitepaper</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex md:items-center">
            <button className="relative px-6 py-2.5 text-sm font-medium group">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-md"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-md opacity-90 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative text-white">Join Community</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none transition-colors duration-300"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/" className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 border-l-2 border-transparent hover:border-blue-400">
            Home
          </a>
          <a href="/tokenomics" className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 border-l-2 border-transparent hover:border-blue-400">
            Tokenomics
          </a>
          <a href="/usecases" className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 border-l-2 border-transparent hover:border-blue-400">
            Use Cases
          </a>
          <a href="/whitepaper" className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 border-l-2 border-transparent hover:border-blue-400">
            Whitepaper
          </a>
          <div className="pt-2 pb-3">
            <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}