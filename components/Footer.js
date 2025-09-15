"use client";
import Link from "next/link";
import { Facebook, Twitter } from "lucide-react"; 
import { FaTiktok, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c]/80 via-[#0d1b2a]/90 to-[#0a192f] backdrop-blur-md" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 text-white">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          
          {/* Brand / Logo - Force Centered */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
              Alpha Pay
            </h2>
            <p className="mt-2 text-gray-300 max-w-sm">
              Smart payments, seamless transactions, and the future of finance — all powered by AI.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center sm:grid sm:grid-cols-3 sm:gap-6 text-gray-300 font-medium md:flex md:flex-row">
            <Link href="/" className="hover:text-white transition py-1 sm:py-0">Home</Link>
            <Link href="/#about" className="hover:text-white transition py-1 sm:py-0">About</Link>
            <Link href="/#roadmap" className="hover:text-white transition py-1 sm:py-0">Roadmap</Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/share/16PuAP8XEg/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition hover:shadow-[0_0_15px_#00c6ff] hover:-translate-y-1"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://x.com/Alphapaytech?t=SDUDPQ3JunTDqWscDM7_Vg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition hover:shadow-[0_0_15px_#00c6ff] hover:-translate-y-1"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@alphapaytech?_t=ZS-8ze41KDmWxu&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition hover:shadow-[0_0_15px_#00c6ff] hover:-translate-y-1"
            >
              <FaTiktok size={20} />
            </a>
            <a
              href="https://t.me/+LAVc0V_XYN9mZDFk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition hover:shadow-[0_0_15px_#00c6ff] hover:-translate-y-1"
            >
              <FaTelegramPlane size={20} />
            </a>
          </div>
        </div>

        {/* Email Section - More prominent on mobile */}
        <div className="mt-8 text-center">
          <a 
            href="mailto:support@alphapayai.tech" 
            className="inline-block text-blue-400 hover:text-blue-300 transition-colors text-lg font-medium py-2 px-4 bg-blue-500/10 rounded-lg border border-blue-500/20"
          >
            support@alphapayai.tech
          </a>
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