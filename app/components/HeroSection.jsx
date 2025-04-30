
"use client";   
import { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/hero1.png",
    heading: "New Hope for a Near Future",
    text: "Volunteers do not necessarily have the time; they just have the heart.",
  },
  {
    image: "/images/hero2.png",
    heading: "Empowering Communities",
    text: "Together, we can make a difference in the lives of those in need.",
  },
  {
    image: "/images/hero.png",
    heading: "Join Us in Our Mission",
    text: "Your support can bring light to someone's life.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center h-[600px] text-white transition-all duration-500"
      style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
    >
      <div className="absolute inset-0  bg-opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {slides[currentSlide].heading}
        </h1>
        <p className="text-lg md:text-xl mb-8">{slides[currentSlide].text}</p>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-300">
          Read More
        </button>
      </div>

      {/* Dots for navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-orange-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}