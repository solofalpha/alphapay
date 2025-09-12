"use client";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import WhyAlphaPay from "@/components/WhyAlphaPay";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import AppFeatures from "@/components/AppFeatures";
import AICryptoSection from "@/components/AICryptoSection";

export default function Home() {
  return (
    <div className="relative bg-[#0a192f] text-white min-h-screen">
      <Navbar />
      <main className="pt-24">
        <HeroSection />
        <MarqueeSection />
        <WhyAlphaPay />
        <MissionVisionSection />
        <FeaturesSection />
         <AppFeatures />
         <AICryptoSection />
      </main>
      <Footer />
    </div>
  );
}
