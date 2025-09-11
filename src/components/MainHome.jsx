import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const MainHome = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const products = [
    {
      title: "Door Frame Metal Detectors",
      description: "Advanced walk-through detection systems for comprehensive security screening.",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/4d9d4fb76e-69f80c55339eb98c44cf.png",
      link: "/dfmd",
    },
    {
      title: "Hand-Held Metal Detectors",
      description: "Portable detection solutions for precise security screening.",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/8566c9d1fc-aae3d6431ab1dc5e73f9.png",
      link: "/handheld",
    },
    {
      title: "Shoe Metal Scanner",
      description: "Specialized footwear scanning technology for thorough security checks.",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/062da2630e-c7166363f70bb47bef90.png",
      link: "/shoepage",
    },
    {
      title: "Smart DFMD",
      description: "Next-generation detection with touch LCD interface and modular design.",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/5e75a32214-79541f617c9d87e3c1a6.png",
      link: "/dfmd",
    },
  ];

  const features = [
    {
      icon: "⚡",
      title: "Innovative Technology",
      description: "Cutting-edge detection systems powered by advanced algorithms and precision engineering."
    },
    {
      icon: "🛡️",
      title: "Reliable Performance",
      description: "Trusted by global institutions with proven track record of consistent, accurate detection."
    },
    {
      icon: "📞",
      title: "Dedicated Support",
      description: "24/7 expert assistance with comprehensive training and ongoing technical support."
    }
  ];

  return (
    <div className="bg-slate-900 text-white font-sans">

      {/* Header */}
      <Header />

      {/* Hero */}
      <section
        className="relative h-screen flex items-center overflow-hidden mt-20 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/uxpilot-auth.appspot.com/8240b2317a-fc920b50fa69b8cfcaff.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/80 to-slate-900/80"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="text-white">Shield</span>
              <span className="text-cyan-400 mx-4">|</span>
              <span className="text-white">Signal</span>
              <span className="text-cyan-400 mx-4">|</span>
              <span className="text-white">Survive</span>
            </h1>

            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mb-8 shadow-lg shadow-cyan-400/50"></div>

            <p className="text-xl md:text-2xl mb-12 max-w-3xl text-gray-300 leading-relaxed">
              Advanced detection systems designed for modern security challenges.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-full font-semibold hover:scale-105 transform transition">
                Explore Products
              </button>
              <button className="px-6 py-3 border border-gray-300 text-white rounded-full font-semibold hover:bg-white/10 transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">Our Product Categories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto shadow-lg shadow-cyan-400/50"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Link to={product.link} key={index} className="block bg-gradient-to-b from-slate-800/80 to-slate-800/60 p-8 rounded-3xl border border-cyan-400/30 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-500 transform hover:-translate-y-2">
                <img src={product.img} alt={product.title} className="w-full h-56 object-cover rounded-2xl mb-6" />
                <h3 className="text-2xl font-bold mb-3 text-white">{product.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{product.description}</p>
                <button className="text-cyan-400 group-hover:text-white transition-colors duration-300 font-semibold">View Products →</button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gradient-to-b from-slate-900/50 to-slate-900/80">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">Featured Products</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto shadow-lg shadow-cyan-400/50"></div>
          </div>
          <div className="flex overflow-x-auto gap-8 pb-4">
            {products.map((product, index) => (
              <Link to={product.link} key={index} className="min-w-80 bg-gradient-to-b from-slate-800/80 to-slate-800/60 p-6 rounded-2xl border border-cyan-400/30 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-500 transform hover:-translate-y-2">
                <img src={product.img} alt={product.title} className="w-full h-48 object-cover rounded-xl mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">{product.title}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <Link to={'/cart'}> <button className="bg-cyan-500 px-6 py-2 rounded-full hover:bg-blue-600 transition-all">View Details</button> </Link>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Xenocipher */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">Why Choose Xenocipher</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto shadow-lg shadow-cyan-400/50"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-b from-slate-800/80 to-slate-800/60 rounded-3xl border border-cyan-400/30 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-400/40">
                  <span className="text-3xl text-white">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 bg-gradient-to-r from-blue-600/40 to-sky-500/20 border-y border-cyan-400/30 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8 text-white">Ready to Upgrade Your Security?</h2>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-12 py-4 rounded-full hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 text-xl font-semibold transform hover:scale-105">
            Request a Quote
          </button>
        </div>
      </section>

      {/* ✅ NEW About Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/241acbcfbe-ff30af1fb36ef6169899.png"
              alt="About Xenocipher"
              className="rounded-3xl shadow-lg shadow-cyan-500/20 h-[350px] w-[550px] ml-10"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-5xl font-bold mb-6 text-white">About Xenocipher</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mb-8"></div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We are pioneers in advanced detection technology, developing cutting-edge
              security solutions that protect what matters most. Our commitment to
              innovation drives us to create systems that are not just effective, but
              revolutionary.
            </p>

            {/* Quick Links / Info Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">Xenocipher</h4>
                <p className="text-cyan-400 hover:underline cursor-pointer">Shield | Signal | Survive</p>
                <p className="text-gray-400 mt-2">
                  Advanced detection systems for modern security challenges.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">Products</h4>
                <ul className="space-y-1 text-gray-400">
                  <li>Door Frame Metal Detectors</li>
                  <li>Hand-Held Metal Detectors</li>
                  <li>Shoe Metal Scanner</li>
                  <li>Smart DFMD</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">Company</h4>
                <ul className="space-y-1 text-gray-400">
                  <li>About Us</li>
                  <li>Technology</li>
                  <li>Support</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">Support</h4>
                <ul className="space-y-1 text-gray-400">
                  <li>Documentation</li>
                  <li>Training</li>
                  <li>Technical Support</li>
                  <li>Warranty</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MainHome;
