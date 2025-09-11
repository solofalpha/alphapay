"use client";
import { FaRocket, FaShieldAlt, FaMoneyBillWave, FaMobileAlt } from "react-icons/fa";

export default function MarqueeFade() {
  const advantages = [
    { icon: <FaRocket />, text: "Fast Transactions" },
    { icon: <FaShieldAlt />, text: "Secure Payments" },
    { icon: <FaMoneyBillWave />, text: "Low Fees" },
    { icon: <FaMobileAlt />, text: "Mobile Friendly" },
  ];

  return (
    <section className="py-6 bg-black overflow-hidden">
      <div className="flex gap-16 px-6 whitespace-nowrap animate-marquee-fade hover:animate-paused">
        {advantages.map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 shadow-lg text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#0072ff] scale-90 hover:scale-100 transition-transform"
          >
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .animate-marquee-fade {
          animation: marquee-fade 20s linear infinite;
        }
        .animate-paused:hover { animation-play-state: paused; }
        @keyframes marquee-fade {
          0% { transform: translateX(100%); opacity: 0; }
          25% { opacity: 1; }
          75% { opacity: 1; }
          100% { transform: translateX(-100%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
