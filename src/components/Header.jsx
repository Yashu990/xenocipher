import React, { useState } from "react";
import xeno from "../assets/xeno.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="http://localhost:5173/"
            className="flex items-center gap-3"
            aria-label="Xenocipher home"
          >
            <img src={xeno} alt="Xenocipher Logo" className="h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 relative">
            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-500">
                Products
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 w-72 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                  <Link
                    to="/dfmd"
                    className="block px-2 py-2 hover:bg-gray-50 rounded"
                  >
                    <p className="font-semibold text-gray-800">
                      Door Frame Metal Detectors
                    </p>
                    <p className="text-sm text-gray-500">
                      Walk-through detection systems
                    </p>
                  </Link>

                  <Link
                    to="/handheld"
                    className="block px-2 py-2 hover:bg-gray-50 rounded"
                  >
                    <p className="font-semibold text-gray-800">
                      Hand-Held Metal Detectors
                    </p>
                    <p className="text-sm text-gray-500">
                      Portable screening devices
                    </p>
                  </Link>

                  <Link
                    to="/shoepage"
                    className="block px-2 py-2 hover:bg-gray-50 rounded"
                  >
                    <p className="font-semibold text-gray-800">
                      Shoe Metal Scanner
                    </p>
                    <p className="text-sm text-gray-500">
                      Footwear security scanning
                    </p>
                  </Link>

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
              <button className="px-5 py-2.5 rounded-full border border-gray-300 text-gray-800 hover:border-gray-400 hover:bg-gray-50">
                Request Quote
              </button>
              <a
                href="#cta"
                className="px-5 py-2.5 rounded-full text-white font-medium bg-gradient-to-r from-sky-500 to-indigo-600 hover:shadow-md"
              >
                Get Started
              </a>
              <Link to="/aboutus">
                <div className="px-5 py-2.5 cursor-pointer rounded-full text-white font-medium bg-gradient-to-r from-sky-500 to-indigo-600 hover:shadow-md">
                  About Us
                </div>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 text-2xl focus:outline-none"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-md mt-2 rounded-lg p-4 space-y-4">
            <Link
              to="/dfmd"
              className="block text-gray-700 font-medium hover:text-blue-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              DFMD
            </Link>
            <Link
              to="/handheld"
              className="block text-gray-700 font-medium hover:text-blue-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Handheld
            </Link>
            <Link
              to="/shoepage"
              className="block text-gray-700 font-medium hover:text-blue-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shoe Scanner
            </Link>
            <Link
              to="/aboutus"
              className="block text-gray-700 font-medium hover:text-blue-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <button className="w-full px-5 py-2.5 rounded-full border border-gray-300 text-gray-800 hover:border-gray-400 hover:bg-gray-50">
              Request Quote
            </button>
            <a
              href="#cta"
              className="block text-center px-5 py-2.5 rounded-full text-white font-medium bg-gradient-to-r from-sky-500 to-indigo-600 hover:shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
