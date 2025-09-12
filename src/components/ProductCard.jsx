import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="bg-gradient-to-bl from-blue-950 to-gray-700 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
    <div className="p-4 sm:p-6">
      {/* Image */}
      <div className="relative">
        <img
          className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-2xl"
          src={product.image}
          alt={product.alt || product.name}
          onError={(e) => (e.target.src = "/fallback-image.png")}
        />
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mt-3 sm:mt-4 text-white">
        {product.name}
      </h3>

      {/* Link */}
      <Link
        to={product.link}
        className="text-blue-400 hover:text-white transition flex items-center mt-2 text-sm sm:text-base font-medium"
      >
        View Details →
      </Link>
    </div>
  </div>
);

export default ProductCard;
