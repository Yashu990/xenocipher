import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="bg-gradient-to-bl from-blue-950 to-gray-700 rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition">
    <div className="p-4">
      <div className="relative">
        <img
          className="w-full h-64 object-cover rounded-2xl"
          src={product.image}
          alt={product.alt || product.name}
          onError={(e) => (e.target.src = "/fallback-image.png")} // fallback if image fails
        />
      </div>
      <h3 className="text-xl font-bold mt-4 text-white">{product.name}</h3>
      <Link
        to={product.link}
        className="text-blue-400 hover:text-white transition flex items-center mt-2"
      >
        View Details →
      </Link>
    </div>
  </div>
);

export default ProductCard;
