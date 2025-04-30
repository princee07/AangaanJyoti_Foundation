"use client";

import { useState, useEffect, useRef } from "react";

const SupportSection = () => {
  const [isVideoEnlarged, setIsVideoEnlarged] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoEnlarged(true);
        } else {
          setIsVideoEnlarged(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white overflow-hidden">
      {/* Left Section with Vertical Line */}
      <div className="relative w-full md:w-[40%] bg-gray-800 text-white p-10 skew-x-[-10deg] border-r-4 border-gray-300">
        <div className="skew-x-[10deg]">
          <div className="flex items-center mb-4">
            <span className="text-red-500 text-2xl mr-2">❤️</span>
            <h2 className="text-3xl md:text-3xl font-bold leading-snug">
              Hunger is stalking the globe
            </h2>
          </div>
        </div>
      </div>

      {/* Center Section with Video */}
      <div
        ref={videoRef}
        className="w-full md:w-[30%] flex justify-center items-center bg-white py-7 px-5"
      >
        <video
          controls
          className={`rounded-lg shadow-lg transition-transform duration-500 ${
            isVideoEnlarged ? "scale-105" : "scale-100"
          }`}
        >
          <source src="./images/support.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right Section with Text */}
      <div className="w-full md:w-[35%] p-5 text-left">
        <h3 className="text-xl font-semibold text-gray-900">
          We are here to support you every step of the way.
        </h3>
        <p className="text-gray-500 mt-2 max-w-md">
          Watch us how we take care of everyone and ensure no one is left behind.
        </p>
      </div>
    </section>
  );
};

export default SupportSection;
