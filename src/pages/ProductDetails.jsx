// pages/ProductDetails.jsx
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find(
    (p) => p.name.toLowerCase() === productId.toLowerCase()
  );

  if (!product) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <p className="text-gray-400 mb-6">
          The product you're looking for doesn’t exist or has been removed.
        </p>
        <Link
          to="/products"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/40 transition-all"
        >
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* ✅ Header */}
      <Header />

      {/* ✅ Breadcrumb Navigation */}
      <div className="bg-gray-800 text-gray-400 text-sm px-6 py-3">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>{" "}
        /{" "}
        <Link to="/products" className="hover:text-blue-400">
          Products
        </Link>{" "}
        / <span className="text-white">{product.name}</span>
      </div>

      {/* ✅ Main Content */}
      <main className="flex-1 container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-10 text-center">{product.name}</h1>

        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left - Product Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={product.image}
              alt={product.alt}
              onError={(e) => (e.target.src = "/fallback-image.png")}
              className="rounded-3xl shadow-2xl max-w-md transition-transform hover:scale-[1.02] duration-300"
            />
          </div>

          {/* Right - Product Info */}
          <div className="flex-1">
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Here you can show full details for <strong>{product.name}</strong>.
              Add specifications, features, and benefits here.
            </p>

            {/* Example - Specs */}
            <ul className="list-disc pl-6 space-y-3 text-gray-400 mb-8">
              <li>✅ Multi-zone detection</li>
              <li>✅ High sensitivity</li>
              <li>✅ LED indicators</li>
              <li>✅ Easy installation</li>
            </ul>

            {/* CTA Button */}
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 transition-transform">
              Contact Us
            </button>
          </div>
        </div>
      </main>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetails;
