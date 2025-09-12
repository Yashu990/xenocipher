import React from "react";
import Footer from "../components/Footer";
import CtaStrip from "../components/CtaStrip";
import Header from "../components/Header";

const ShoePageContent = () => {
  return (
    <>
      <Header />

      {/* ✅ Hero Section */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-24 relative overflow-hidden bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 relative">
          {/* Breadcrumb */}
          <nav className="text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8 flex flex-wrap gap-1">
            <span className="hover:text-blue-400 cursor-pointer">Products</span>
            <span>/</span>
            <span className="text-blue-400">Shoe Metal Scanner</span>
          </nav>

          {/* Heading & Description */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Shoe Metal Scanner
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl">
            Specialized footwear scanning technology for thorough and accurate
            security checks.
          </p>
        </div>
      </section>

      {/* ✅ Product Grid */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Product Card */}
            <div className="bg-gray-800 rounded-2xl md:rounded-3xl border border-gray-700 hover:border-gray-400 hover:shadow-xl transition-all duration-500 overflow-hidden group">
              <div className="p-4 sm:p-6">
                {/* Image */}
                <div className="relative mb-4 sm:mb-6">
                  <img
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/73804837eb-8e42a4925df59f9ab711.png"
                    alt="High-sensitivity shoe metal scanner"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  High-Sensitivity Sole Scanner
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
                  High-sensitivity sole scanner with independent left/right
                  alarms.
                </p>

                {/* CTA Button */}
                <button className="text-blue-400 hover:text-white transition-colors duration-300 flex items-center text-sm sm:text-base">
                  View Details <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ CTA + Footer */}
      <CtaStrip />
      <Footer />
    </>
  );
};

export default ShoePageContent;
