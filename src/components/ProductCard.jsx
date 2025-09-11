import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product }) => (
  <div className="bg-gradient-to-bl from-blue-950 to-gray-700 rounded-3xl  border border-gray-600 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden group">
    <div className="p-6">
      {/* Image with blur background */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-blue-950/20 rounded-2xl blur-xl"></div>
        <img
          className="relative w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
          src={product.image}
          alt={product.alt}
        />
      </div>

      {/* Product info */}
      <h3 className="text-xl font-bold mb-3 text-white">{product.name}</h3>
      <p className="text-gray-300 mb-6">Advanced walk-through detector with multi-zone targeting</p>

      {/* Link */}
      <a
        href={product.link}
        className="text-blue-400 hover:text-white transition-colors duration-300 flex items-center"
      >
        View Details <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
      </a>
    </div>
  </div>
);

export default ProductCard;
