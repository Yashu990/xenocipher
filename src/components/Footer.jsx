import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <footer className="bg-blue-950 border-t border-neonBlue/30 py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <div className="text-2xl font-bold mb-4">
            <span className="text-white">Xenocipher</span>
            <span className="text-neonBlue">.</span>
          </div>
          <p className="text-gray-400">Shield | Signal | Survive</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="space-y-2">
            <span className="block text-gray-400 hover:text-neonBlue cursor-pointer">Products</span>
            <span className="block text-gray-400 hover:text-neonBlue cursor-pointer">About</span>
            <span className="block text-gray-400 hover:text-neonBlue cursor-pointer">Contact</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <span className="text-gray-400 hover:text-neonBlue text-xl cursor-pointer"><FontAwesomeIcon icon={faLinkedin} /></span>
            <span className="text-gray-400 hover:text-neonBlue text-xl cursor-pointer"><FontAwesomeIcon icon={faYoutube} /></span>
            <span className="text-gray-400 hover:text-neonBlue text-xl cursor-pointer"><FontAwesomeIcon icon={faEnvelope} /></span>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-neonBlue/30 text-center text-gray-400">
        © 2025 Xenocipher. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
