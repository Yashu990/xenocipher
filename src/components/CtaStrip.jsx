import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faFileInvoice } from '@fortawesome/free-solid-svg-icons';

const CtaStrip = () => (
  <section className="py-16 bg-gradient-to-r bg-blue-950  from-deepBlue/40 to-neonBlue/20 border-y border-neonBlue/30">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Need help choosing the right DFMD model?</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <button className=" text-darkBg px-8 py-4 rounded-full hover:bg-neonBlue border-1 hover:text-amber-200 transition-all duration-300 font-semibold">
          <FontAwesomeIcon icon={faHeadset} className="mr-2" /> Talk to an Expert
        </button>
        <button className="border-2 border-white px-8 py-4 rounded-full hover:text-amber-200 hover:text-neonBlue transition-all duration-300 font-semibold">
          <FontAwesomeIcon icon={faFileInvoice} className="mr-2" /> Request Quote
        </button>
      </div>
    </div>
  </section>
);

export default CtaStrip;
