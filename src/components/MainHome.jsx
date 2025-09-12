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

      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center mt-16 md:mt-20 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/uxpilot-auth.appspot.com/8240b2317a-fc920b50fa69b8cfcaff.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/80 to-slate-900/85"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center md:text-left">
          <div className="max-w-3xl mx-auto md:mx-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Shield</span>
              <span className="text-cyan-400 mx-2">|</span>
              <span className="text-white">Signal</span>
              <span className="text-cyan-400 mx-2">|</span>
              <span className="text-white">Survive</span>
            </h1>

            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto md:mx-0 mb-6"></div>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
              Advanced detection systems designed for modern security challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-full font-semibold hover:scale-105 transition">
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
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Product Categories</h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <Link to={product.link} key={index} className="block bg-gradient-to-b from-slate-800/80 to-slate-800/60 p-6 sm:p-8 rounded-3xl border border-cyan-400/30 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-500 hover:-translate-y-2">
                <img src={product.img} alt={product.title} className="w-full h-44 sm:h-56 object-cover rounded-2xl mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3">{product.title}</h3>
                <p className="text-gray-400 mb-4 sm:mb-6">{product.description}</p>
                <button className="text-cyan-400 group-hover:text-white transition-colors font-semibold">View Products →</button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Why Choose Xenocipher</h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 sm:p-8 bg-gradient-to-b from-slate-800/80 to-slate-800/60 rounded-3xl border border-cyan-400/30 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-400/20 transition hover:-translate-y-2">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600/40 to-sky-500/20 border-y border-cyan-400/30 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">Ready to Upgrade Your Security?</h2>
        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold hover:scale-105 transition">
          Request a Quote
        </button>
      </section>

    </div>
  );
};

export default MainHome;
