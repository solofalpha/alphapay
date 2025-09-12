"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AICryptoSection() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=artificial-intelligence&order=market_cap_desc&per_page=12&page=1&sparkline=false&price_change_percentage=1h,24h,7d"
    )
      .then(res => res.json())
      .then(data => setCoins(Array.isArray(data) ? data : []))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="py-12 text-white max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">AI Crypto Spotlight</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {coins.map((coin) => (
          <div key={coin.id} className="flex flex-col justify-between p-4 border-l-4 border-[#00c6ff] rounded-lg bg-white/5 hover:bg-white/10 transition">
            <div className="flex justify-between items-center mb-2">
              <img src={coin.image} alt={coin.name} className="w-10 h-10"/>
              <div className="text-right">
                <h3 className="font-semibold">{coin.name}</h3>
                <p className="text-gray-300 text-sm">{coin.symbol.toUpperCase()}</p>
                <p className="font-bold">${coin.current_price.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 text-xs">
                <p className={coin.price_change_percentage_1h_in_currency >= 0 ? "text-green-400" : "text-red-400"}>1h: {coin.price_change_percentage_1h_in_currency?.toFixed(2)}%</p>
                <p className={coin.price_change_percentage_24h_in_currency >= 0 ? "text-green-400" : "text-red-400"}>24h: {coin.price_change_percentage_24h_in_currency?.toFixed(2)}%</p>
              </div>
              <Link href={`/coin/${coin.id}`} className="px-2 py-1 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-md text-xs font-semibold hover:opacity-90 transition">View</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
