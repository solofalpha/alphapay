"use client";
import { ShieldCheck, Zap, Globe2, Settings } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      description:
        "Your transactions are protected with cutting-edge AI-powered security protocols.",
    },
    {
      icon: Zap,
      title: "Fast Transactions",
      description:
        "Experience lightning-fast payments without delays or hidden fees.",
    },
    {
      icon: Globe2,
      title: "Global Reach",
      description:
        "Send and receive money anywhere in the world with ease and confidence.",
    },
    {
      icon: Settings,
      title: "Customizable Solutions",
      description:
        "Tailor your payment experience to match your personal or business needs.",
    },
  ];

  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#0072ff]">
          Our Features
        </h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
          Discover the cutting-edge features that make AlphaPay the ultimate AI-powered payment solution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white shadow-xl flex flex-col items-center text-center hover:shadow-2xl transition relative"
              >
                <div className="p-4 rounded-full bg-gradient-to-r from-[#00c6ff]/20 to-[#0072ff]/20 mb-4">
                  <Icon
                    size={48}
                    className="text-[#00c6ff] drop-shadow-[0_0_15px_#00c6ff] animate-pulse"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
