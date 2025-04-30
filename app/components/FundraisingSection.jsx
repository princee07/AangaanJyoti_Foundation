"use client";

import { useEffect, useState } from "react";

const quotes = [
  "Every man must decide whether he will walk in the light of creative altruism or in the darkness of destructive selfishness.",
  "The best way to find yourself is to lose yourself in the service of others.",
  "No one has ever become poor by giving.",
];

const stats = [
  { label: "raised by 6,388 people in 7 days", value: 785000, icon: "🤍" },
  { label: "volunteers are available to help you", value: 63000, icon: "🙋‍♂️" },
];

export default function FundraisingSection() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [counter, setCounter] = useState(stats.map(() => 0));

  // Rotate quotes every 5 seconds
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(quoteInterval);
  }, []);

  // Animate counters on mount
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) =>
        prev.map((val, i) =>
          val < stats[i].value ? val + Math.ceil(stats[i].value / 100) : stats[i].value
        )
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full">
      {/* Black Section (Left-aligned, fixed height) */}
      <div
        className="bg-cover bg-center bg-black/70 text-white w-full h-[400px] flex items-center"
        style={{
          backgroundImage: 'url(/images/fund.png)',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 w-full flex flex-col space-y-6">
          <h2 className="text-4xl font-bold leading-snug max-w-2xl">
            Fundraising for the people and causes you care about
          </h2>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded w-fit">
            Start Donation
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white text-gray-900 py-12 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col space-y-10">
          {stats.map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold">
                {stat.icon} {counter[i].toLocaleString()}
              </h3>
              <p className="text-sm text-red-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Red Quote Section */}
      <div className="absolute right-0 top-60 w-full md:w-[55%] bg-[#e06654] text-white py-16 px-10 z-20 shadow-lg">
        <blockquote className="max-w-2xl mx-auto text-lg leading-relaxed font-medium">
          <p className="text-xl font-semibold">“{quotes[quoteIndex]}”</p>
          <footer className="mt-6 text-sm font-semibold">– Mary Scott, CEO</footer>
        </blockquote>
      </div>
    </section>
  );
}
