import React, { useState } from "react";
import xeno from "../assets/xeno.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="http://localhost:5173/" className="flex items-center gap-3" aria-label="Xenocipher home">
            <img src={xeno} alt="Xenocipher Logo" className="h-10 w-auto" />
          </a>
           
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6 relative">
            
            {/* Products with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-500">
                Products
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0  w-72 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                  <div

                    className="block px-2 py-2 hover:bg-gray-50 rounded"
                  >
                    <Link to={'/dfmd'}> <p className="font-semibold text-gray-800">
                      Door Frame Metal Detectors
                    </p>
                    </Link>
                    <p className="text-sm text-gray-500">
                      Walk-through detection systems
                    </p>
                  </div>
                  <div

                    className="block px-2 py-2 hover:bg-gray-50 rounded"
                  >
                    <Link to={'/handheld'}> <p className="font-semibold text-gray-800">
                      Hand-Held Metal Detectors
                    </p>
                    </Link>
                    <p className="text-sm text-gray-500">
                      Portable screening devices
                    </p>
                  </div>
                  <div

                    className="block px-2 py-2 hover:bg-gray-50 rounded"
                  >
                    <Link to={'/shoepage'}> <p className="font-semibold text-gray-800">
                      Shoe Metal Scanner
                    </p>
                    </Link>
                    <p className="text-sm text-gray-500">
                      Footwear security scanning
                    </p>
                  </div>
                  <a
                    href="#smart-dfmd"
                    className="block px-2 py-2 hover:bg-gray-50 rounded"
                  >
                    <p className="font-semibold text-gray-800">Smart DFMD</p>
                    <p className="text-sm text-gray-500">
                      Touch LCD interface systems
                    </p>
                  </a>
                </div>
              )}
            </div>

            {/* Other links */}
            <div className="flex items-center gap-3">
                <button className="px-5 py-2.5 rounded-full border border-gray-300 text-gray-800 hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-400">
                  Request Quote
                </button>
                <a href="#cta" className="px-5 py-2.5 rounded-full text-white font-medium bg-gradient-to-r from-sky-500 to-indigo-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400">
                  Get Started
                </a>
               <Link to={'/aboutus'}> <div className="px-5 py-2.5 cursor-pointer rounded-full text-white font-medium bg-gradient-to-r from-sky-500 to-indigo-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400"> 
                  About Us
                </div>
                </Link>
              </div>
          </div>

          {/* Mobile dropdown toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isDropdownOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
