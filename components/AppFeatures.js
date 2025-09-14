"use client";
import { Shield, Zap, BarChart } from "lucide-react";
import Image from "next/image"; // Import the Image component

export default function AppFeatures() {
  const features = [
    {
      icon: <Shield size={28} />,
      title: "Bank-Level Security",
      desc: "Your assets are protected with enterprise-grade encryption.",
    },
    {
      icon: <Zap size={28} />,
      title: "Lightning Fast",
      desc: "Buy, sell, and transfer crypto instantly with zero friction.",
    },
    {
      icon: <BarChart size={28} />,
      title: "Smart Insights",
      desc: "Stay ahead with real-time charts and AI-powered analytics.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0f1c]/80 via-[#0d1b2a]/90 to-[#0a192f] text-white relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* Left Content */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
            All-in-One Crypto App
          </h2>
          <p className="text-gray-300 max-w-lg">
            Manage your digital assets with ease — secure, fast, and intuitive.
            Alpha Pay makes it simple for both beginners and pros.
          </p>

          {/* Feature List */}
          <div className="space-y-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
              >
                <div className="text-[#00c6ff] animate-pulse">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Download Buttons */}
          <div className="flex gap-4 pt-4">
            <Image
              src="/google-play-badge.png"
              alt="Download on Google Play"
              width={160}
              height={48}
              className="h-10 md:h-12 w-auto cursor-pointer hover:scale-105 transition"
              priority
            />
            <Image
              src="/app-store-badge.png"
              alt="Download on App Store"
              width={160}
              height={48}
              className="h-10 md:h-12 w-auto cursor-pointer hover:scale-105 transition"
              priority
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute top-4 left-4 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white px-4 py-1 rounded-full text-xs font-semibold shadow-md">
            Coming Soon
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/app-preview.png"
              alt="Alpha Pay App Preview"
              width={500}
              height={500}
              className="w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}