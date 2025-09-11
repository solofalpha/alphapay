"use client";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c]/80 via-[#0d1b2a]/90 to-[#0a192f] backdrop-blur-md" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 text-white">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          
          {/* Brand / Logo */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
              AlphaPay
            </h2>
            <p className="mt-2 text-gray-300 max-w-sm">
              Smart payments, seamless transactions, and the future of finance — all powered by AI.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-gray-300 font-medium">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/about" className="hover:text-white transition">About</Link>
            <Link href="/services" className="hover:text-white transition">Services</Link>
            <Link href="/pricing" className="hover:text-white transition">Pricing</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
            <Link href="/roadmap" className="hover:text-white transition">Roadmap</Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition 
              hover:shadow-[0_0_15px_#00c6ff] hover:-translate-y-1"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition 
              hover:shadow-[0_0_15px_#00c6ff] hover:-translate-y-1"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition 
              hover:shadow-[0_0_15px_#00c6ff] hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition 
              hover:shadow-[0_0_15px_#00c6ff] hover:-translate-y-1"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} AlphaPay. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built for the future of finance 🚀</p>
        </div>
      </div>
    </footer>
  );
}
