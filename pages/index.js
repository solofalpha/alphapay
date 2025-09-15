"use client";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhyAlphaPay from "@/components/WhyAlphaPay";
import ModernAboutSection from "@/components/AboutPage";
import MissionVision from "@/components/MissionVisionSection";
import FeaturesSection from "@/components/FeaturesSection";
import AppFeatures from "@/components/AppFeatures";
import AICryptoSection from "@/components/AICryptoSection";
import ModernRoadmap from "@/components/Roadmap";
import EasySwapSteps from "@/components/EasySwapSteps";


export default function Home() {
  return (
    <div className="relative bg-[#0a192f] text-white min-h-screen">
      <Navbar />
      <main className="pt-24">
        <HeroSection />
        <MarqueeSection />
        <WhyAlphaPay />
        <ModernAboutSection />
        <MissionVision />
        <FeaturesSection />
        <AppFeatures />
        <AICryptoSection />
        <ModernRoadmap />
        <EasySwapSteps />
        
      </main>
      <Footer />
    </div>
  );
}
