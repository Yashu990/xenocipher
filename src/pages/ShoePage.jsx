import React from "react";
import Footer from "../components/Footer";
import CtaStrip from "../components/CtaStrip";
import Header from "../components/Header";

const ShoePageContent = () => {
  return (
    <>
    <Header/>
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-gray-900 text-white">
        <div className="container mx-auto px-6 relative">
          <nav className="text-sm text-gray-400 mb-8">
            <span className="hover:text-blue-400 cursor-pointer">Products</span>
            <span className="mx-2">/</span>
            <span className="text-blue-400">Shoe Metal Scanner</span>
          </nav>
          <h1 className="text-5xl font-bold mb-6">Shoe Metal Scanner</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Specialized footwear scanning technology for thorough and accurate security checks.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card */}
            <div className="bg-gray-800 rounded-3xl border border-gray-600 hover:border-gray-400 hover:shadow-xl transition-all duration-500 overflow-hidden group">
              <div className="p-6">
                <div className="relative mb-6">
                  <img
                    className="relative w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/73804837eb-8e42a4925df59f9ab711.png"
                    alt="High-sensitivity shoe metal scanner"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">High-Sensitivity Sole Scanner</h3>
                <p className="text-gray-400 mb-6">
                  High-sensitivity sole scanner with independent left/right alarms
                </p>
                <button className="text-white hover:text-gray-200 transition-colors duration-300 flex items-center">
                  View Details <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaStrip/>
        <Footer/>
    
    </>
  );
};

export default ShoePageContent;
