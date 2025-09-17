// pages/ProductDetails.jsx
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import Header from "../components/Header"; // ✅ import your header
import Footer from "../components/Footer"; // ✅ import your footer

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find(
    (p) => p.name.toLowerCase() === productId.toLowerCase()
  );

  if (!product) return <div className="p-6 text-white">Product Not Found</div>;

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* ✅ Header */}
      <Header />

      {/* ✅ Main Content */}
      <main className="flex-1 container mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-8 text-center">{product.name}</h1>

        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Left - Product Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={product.image}
              alt={product.alt}
              className="rounded-xl shadow-xl max-w-md"
            />
          </div>

          {/* Right - Product Info */}
          <div className="flex-1">
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Here you can show full details for <strong>{product.name}</strong>.
              Add specifications, features, and benefits here.
            </p>

            {/* Example - Specs */}
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>✅ Multi-zone detection</li>
              <li>✅ High sensitivity</li>
              <li>✅ LED indicators</li>
              <li>✅ Easy installation</li>
            </ul>

            {/* Example - Buy Button */}
            <button className="mt-6 px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition">
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
