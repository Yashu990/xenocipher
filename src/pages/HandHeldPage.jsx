import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHeadset, faFileInvoice, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import xeno from "../assets/xeno.svg";

const HandHeldPage = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={xeno} alt="Xenocipher" className="h-20 w-auto" />
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {/* Products Dropdown */}
              <div className="relative group">
                <button className="text-gray-800 hover:text-gray-900 font-medium py-2">
                  Products
                </button>

                <div className="absolute left-0 top-full z-50 w-80 bg-white border border-gray-200 rounded-2xl shadow-xl
                                opacity-0 scale-95 translate-y-2 pointer-events-none
                                transition-all duration-200
                                group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                  <div className="p-3 space-y-2">
                    <Link to="/dfmd" className="block rounded-xl px-4 py-3 hover:bg-gray-50 text-gray-900">
                      <div className="font-semibold">Door Frame Metal Detectors</div>
                      <div className="text-sm text-gray-500">Walk-through detection systems</div>
                    </Link>
                    <Link to="/handheld" className="block rounded-xl px-4 py-3 hover:bg-gray-50 text-gray-900">
                      <div className="font-semibold">Hand-Held Metal Detectors</div>
                      <div className="text-sm text-gray-500">Portable screening devices</div>
                    </Link>
                    <Link to="/shoepage" className="block rounded-xl px-4 py-3 hover:bg-gray-50 text-gray-900">
                      <div className="font-semibold">Shoe Metal Scanner</div>
                      <div className="text-sm text-gray-500">Footwear security scanning</div>
                    </Link>
                    <Link to="/smartdfmd" className="block rounded-xl px-4 py-3 hover:bg-gray-50 text-gray-900">
                      <div className="font-semibold">Smart DFMD</div>
                      <div className="text-sm text-gray-500">Touch LCD interface systems</div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3">
                <button className="px-5 py-2.5 rounded-full border border-gray-300 text-gray-800 hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-400">
                  Request Quote
                </button>
                <a href="#cta" className="px-5 py-2.5 rounded-full text-white font-medium bg-gradient-to-r from-sky-500 to-indigo-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="category-hero" className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <nav className="text-sm text-gray-400 mb-8">
            <Link to="/products" className="hover:text-blue-400 cursor-pointer">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-blue-400">Hand-Held Metal Detectors</span>
          </nav>
          <h1 className="text-5xl font-bold mb-6">Hand-Held Metal Detectors (HHMD)</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Portable detection solutions for precise and reliable security screening.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section id="product-grid" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-700 rounded-3xl border border-blue-500/30 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden group">
              <div className="p-6">
                <div className="relative mb-6">
                  <img className="relative w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/da18c3483d-835c7d31c91403cc815d.png"
                    alt="modern handheld metal detector"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Super High Sensitive HHMD</h3>
                <p className="text-gray-300 mb-6">
                  Advanced portable detector for security scanning with enhanced sensitivity
                </p>
                <Link to="/handheld" className="text-blue-400 hover:text-white transition-colors duration-300 flex items-center">
                  View Details <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-700 rounded-3xl border border-blue-500/30 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden group">
              <div className="p-6">
                <div className="relative mb-6">
                  <img className="relative w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ac26e3f62c-ccfc525e6952d98d67ac.png"
                    alt="professional handheld metal detector"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Low Power Pro HHMD</h3>
                <p className="text-gray-300 mb-6">
                  Self-adjusting detector with dual alarm and extended battery life
                </p>
                <Link to="/handheld" className="text-blue-400 hover:text-white transition-colors duration-300 flex items-center">
                  View Details <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-700 rounded-3xl border border-blue-500/30 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden group">
              <div className="p-6">
                <div className="relative mb-6">
                  <img className="relative w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/61a9489599-b15df9c8375b6780f4e3.png"
                    alt="rugged handheld metal detector"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Dual-Alarm HHMD</h3>
                <p className="text-gray-300 mb-6">
                  Rugged design with audio and vibration alert system
                </p>
                <Link to="/handheld" className="text-blue-400 hover:text-white transition-colors duration-300 flex items-center">
                  View Details <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta-strip" className="py-16 bg-gradient-to-r from-blue-500/40 to-sky-400/20 border-y border-blue-500/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Need help choosing the right HHMD model?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="text-gray-900 px-8 py-4 rounded-full hover:bg-blue-400 border hover:text-white transition-all duration-300 font-semibold">
              <FontAwesomeIcon icon={faHeadset} className="mr-2" /> Talk to an Expert
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-300 font-semibold">
              <FontAwesomeIcon icon={faFileInvoice} className="mr-2" /> Request Quote
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-blue-500/30 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">Xenocipher</span>
                <span className="text-blue-400">.</span>
              </div>
              <p className="text-gray-400">Shield | Signal | Survive</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/products" className="block text-gray-400 hover:text-blue-400">Products</Link>
                <Link to="/about" className="block text-gray-400 hover:text-blue-400">About</Link>
                <Link to="/contact" className="block text-gray-400 hover:text-blue-400">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 text-xl"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="#" className="text-gray-400 hover:text-blue-400 text-xl"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="#" className="text-gray-400 hover:text-blue-400 text-xl"><FontAwesomeIcon icon={faEnvelope} /></a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-blue-500/30 text-center text-gray-400">
            © 2025 Xenocipher. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HandHeldPage;
