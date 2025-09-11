import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import MarqueeSection from "@/components/MarqueeSection";

export default function Home() {
  return (
    <div>
      <Navbar />
       <main className="pt-20">
        <HeroSection />
         <MarqueeSection />
        <Footer />
      </main>
    </div>
  );
}
