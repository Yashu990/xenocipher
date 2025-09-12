// pages/MetalsDetailPage.jsx
import { useParams, Link } from "react-router-dom";
import { metals } from "../data/Metals";

const MetalsDetailPage = () => {
  const { metalId } = useParams();
  const metal = metals.find((m) => m.id === metalId);

  if (!metal) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold mb-4">Metal Not Found</h1>
        <p className="text-gray-400 mb-6">
          The metal you're looking for doesn’t exist or has been removed.
        </p>
        <Link
          to="/metals"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/40 transition-all"
        >
          ← Back to Metals
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* ✅ Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-gray-800 font-bold text-lg">
            Xenocipher
          </Link>
          <Link
            to="/metals"
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            ← Back to Metals
          </Link>
        </div>
      </header>

      {/* ✅ Metal Details Section */}
      <main className="container mx-auto px-6 py-16 flex flex-col md:flex-row gap-12">
        {/* Left: Image */}
        <div className="flex-1">
          <img
            src={metal.image}
            alt={metal.name}
            onError={(e) => (e.target.src = "/fallback-image.png")}
            className="rounded-3xl shadow-2xl w-full object-cover h-[550px] transition-transform hover:scale-[1.02] duration-300"
          />
        </div>

        {/* Right: Info */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{metal.name}</h1>
          <p className="text-lg text-gray-300 mb-6">{metal.description}</p>

          {/* Specs (Dummy Example) */}
          <ul className="list-disc pl-6 space-y-3 text-gray-400 mb-8">
            <li>✅ High sensitivity material</li>
            <li>✅ Rugged & durable design</li>
            <li>✅ Anti-interference shielded</li>
            <li>✅ Ideal for advanced detectors</li>
          </ul>

          {/* CTA Button */}
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 transition-transform">
            Request Quote
          </button>
        </div>
      </main>

      {/* ✅ Footer */}
      <footer className="bg-gray-800 text-gray-400 text-center py-6 border-t border-blue-500/30">
        © 2025 Xenocipher. All rights reserved.
      </footer>
    </div>
  );
};

export default MetalsDetailPage;
