"use client";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0a0f1c]/80 via-[#0d1b2a]/90 to-[#0a192f] text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-12 pt-24">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
