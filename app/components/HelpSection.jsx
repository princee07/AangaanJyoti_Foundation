"use client";

import { FaTv, FaUsers, FaShieldAlt, FaLifeRing } from "react-icons/fa";

export default function HelpSection() {
  return (
    <section className="relative bg-violet-300">
      {/* Curved Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
        
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-black mb-6">HOW CAN YOU HELP?</h2>
          <h3 className="text-xl font-semibold text-black mb-4">HELP FOR CAUSE</h3>
          <p className="text-black mb-8">
            Fourth Estate members are Invisible Children's most faithful supporters. By giving
            what they can each month, they advance all aspects of our mission to end the
            atrocities of Joseph Kony and his rebel army.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {/* Icons with Labels */}
            <div className="flex flex-col items-center">
              <FaTv className="text-black w-12 h-12 mb-2" />
              <p className="text-black font-semibold">MEDIA</p>
            </div>
            <div className="flex flex-col items-center">
              <FaUsers className="text-black w-12 h-12 mb-2" />
              <p className="text-black font-semibold">MOBILIZATION</p>
            </div>
            <div className="flex flex-col items-center">
              <FaShieldAlt className="text-black w-12 h-12 mb-2" />
              <p className="text-black font-semibold">PROJECTION</p>
            </div>
            <div className="flex flex-col items-center">
              <FaLifeRing className="text-black w-12 h-12 mb-2" />
              <p className="text-black font-semibold">SUPPORT</p>
            </div>
          </div>
        </div>

        {/* Right Video Section */}
        <div className="relative">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/example-video-id" // Replace with your video URL
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}