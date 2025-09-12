import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faFileInvoice } from "@fortawesome/free-solid-svg-icons";

const CtaStrip = () => (
  <section className="py-12 sm:py-16 bg-gradient-to-r from-deepBlue/40 to-neonBlue/20 bg-blue-950 border-y border-neonBlue/30">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white">
        Need help choosing the right DFMD model?
      </h2>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-darkBg font-semibold hover:bg-neonBlue hover:text-amber-200 transition-all duration-300 shadow-md">
          <FontAwesomeIcon icon={faHeadset} className="mr-2" />
          Talk to an Expert
        </button>

        <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-neonBlue transition-all duration-300 shadow-md">
          <FontAwesomeIcon icon={faFileInvoice} className="mr-2" />
          Request Quote
        </button>
      </div>
    </div>
  </section>
);

export default CtaStrip;
