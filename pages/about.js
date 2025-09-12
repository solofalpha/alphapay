"use client"; // If you are using client-side hooks

import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">
        About AlphaPay
      </h1>
      <p className="max-w-2xl text-center mb-8 text-gray-300">
        Alpha Pay is revolutionizing payments with AI-powered smart transactions, 
        providing seamless, secure, and futuristic financial solutions.
      </p>

      {/* Rotating 3D logo container */}
      <div className="w-40 h-40 relative animate-spin-slow">
        <Image src="/logo.png" alt="AlphaPay Logo" fill />
      </div>
    </div>
  );
}
