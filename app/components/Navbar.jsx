"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-gray-800 text-gray-300 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="material-icons text-orange-500 mr-1">email</span>
              <a href="mailto:needhelp@oxpitan.com" className="hover:text-white">
                Aangangyoti@oxpitan.com
              </a>
            </div>
            <div className="flex items-center">
              <span className="material-icons text-orange-500 mr-1">phone</span>
              <a href="tel:6668880000" className="hover:text-white">
                666 888 0000
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Aangan Jyoti Logo"
              className="h-28 w-auto"
            />
           
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-600 hover:text-orange-500 font-bold text-lg">
              Home
            </a>
            <a href="#causes" className="text-gray-600 hover:text-orange-500 font-bold text-lg">
              Our Causes
            </a>
            <a href="#events" className="text-gray-600 hover:text-orange-500 font-bold text-lg">
              Events
            </a>
            <a href="#shop" className="text-gray-600 hover:text-orange-500 font-bold text-lg">
              Shop
            </a>
            <a href="#news" className="text-gray-600 hover:text-orange-500 font-bold text-lg">
              News
            </a>
            <a href="#pages" className="text-gray-600 hover:text-orange-500 font-bold text-lg">
              Pages
            </a>
            <a href="#contact" className="text-gray-600 hover:text-orange-500 font-bold text-lg">
              Contact
            </a>
          </nav>

          {/* Donate Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#donate"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600"
            >
              Donate Now
            </a>
            <a href="#cart" className="relative text-gray-600 hover:text-orange-500">
              <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs rounded-full px-1">
                0
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden bg-gray-700 text-white space-y-4 px-6 py-4">
            <li>
              <a href="#" className="block hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block hover:text-yellow-500">
                About
              </a>
            </li>
            <li>
              <a href="#causes" className="block hover:text-yellow-500">
                Causes
              </a>
            </li>
            <li>
              <a href="#volunteers" className="block hover:text-yellow-500">
                Volunteers
              </a>
            </li>
            <li>
              <a href="#contact" className="block hover:text-yellow-500">
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}