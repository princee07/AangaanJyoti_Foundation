"use client";

import { FaHandHoldingHeart, FaTint, FaStethoscope } from "react-icons/fa";

export default function VolunteerSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Give a helping hand for homeless children
          </h2>
          <p className="text-gray-600 mb-6">
            Aliq is notm hendr erit a augue insu image pellen tes que id erat quis simply free
            text sollicitudin lorem ipsum dolor sit amet. Dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim
            veniam.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {/* Icons with Labels */}
            <div className="flex flex-col items-center bg-teal-500 text-white p-4 rounded-lg">
              <FaHandHoldingHeart className="w-8 h-8 mb-2" />
              <p className="font-bold">Hope</p>
            </div>
            <div className="flex flex-col items-center bg-red-500 text-white p-4 rounded-lg">
              <FaTint className="w-8 h-8 mb-2" />
              <p className="font-bold">Water</p>
            </div>
            <div className="flex flex-col items-center bg-yellow-500 text-white p-4 rounded-lg">
              <FaStethoscope className="w-8 h-8 mb-2" />
              <p className="font-bold">Medical</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-purple-600 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Become A Volunteer</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name *</label>
              <input
                type="text"
                className="w-full p-2 rounded-lg text-gray-800"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address *</label>
              <input
                type="email"
                className="w-full p-2 rounded-lg text-gray-800"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full p-2 rounded-lg text-gray-800"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                className="w-full p-2 rounded-lg text-gray-800"
                placeholder="Enter your address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Occupation</label>
              <input
                type="text"
                className="w-full p-2 rounded-lg text-gray-800"
                placeholder="Enter your occupation"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                className="w-full p-2 rounded-lg text-gray-800"
                rows="4"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-bold py-2 rounded-lg hover:bg-yellow-600"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}