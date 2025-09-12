import React from "react";

const HeroSection = () => (
  <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-blue-950 relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
      {/* Breadcrumb Navigation */}
      <nav className="text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8">
        <span className="hover:text-neonBlue cursor-pointer">Products</span>
        <span className="mx-1 sm:mx-2">/</span>
        <span className="text-neonBlue">Door Frame Metal Detectors</span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
        Door Frame Metal Detectors (DFMD)
      </h1>

      {/* Subtitle / Description */}
      <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl">
        Explore our complete range of advanced walk-through scanners engineered
        for precision and reliability.
      </p>
    </div>
  </section>
);

export default HeroSection;
