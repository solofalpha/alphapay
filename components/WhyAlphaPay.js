"use client";
import { Server, Lock, CreditCard } from "lucide-react";

export default function WhyAlphaPay() {
  const features = [
    { icon: <Server size={32} />, title: "Reliable Infrastructure", desc: "Always online and highly scalable." },
    { icon: <Lock size={32} />, title: "Secure Payments", desc: "Bank-level encryption and fraud protection." },
    { icon: <CreditCard size={32} />, title: "Easy Transactions", desc: "Fast, seamless payments worldwide." },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0f1c]/80 via-[#0d1b2a]/90 to-[#0a192f] text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent mb-12">
          Why Alpha Pay?
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="text-[#00c6ff] mb-4 animate-pulse">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-center">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
