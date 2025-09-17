// pages/MetalsDetailPage.jsx
import { useParams, Link } from "react-router-dom";
import { metals } from "../data/Metals";

const MetalsDetailPage = () => {
  const { metalId } = useParams();
  const metal = metals.find((m) => m.id === metalId);

  if (!metal) {
    return (
      <div className="p-6 bg-gray-900 text-white min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Metal Not Found</h1>
        <Link to="/metals" className="text-blue-400 hover:underline">
          ← Back to Metals
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-gray-800 font-bold text-lg">
            Xenocipher
          </Link>
          <Link to="/metals" className="text-blue-500 hover:underline">
            Back to Metals
          </Link>
        </div>
      </header>

      {/* DETAIL SECTION */}
      <main className="container mx-auto px-6 py-16 flex flex-col md:flex-row gap-10">
        {/* Image */}
        <div className="flex-1">
          <img
            src={metal.image}
            alt={metal.name}
            className="rounded-2xl shadow-lg w-full object-cover h-[550px]"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{metal.name}</h1>
          <p className="text-gray-300 mb-6">{metal.description}</p>

          {/* Example Specs */}
          <ul className="list-disc pl-6 space-y-3 text-gray-400 mb-6">
            <li>✅ High sensitivity material</li>
            <li>✅ Rugged & durable design</li>
            <li>✅ Anti-interference shielded</li>
            <li>✅ Ideal for advanced detectors</li>
          </ul>

          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-md hover:shadow-blue-500/30 transition-all">
            Request Quote
          </button>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-gray-400 text-center py-6 border-t border-blue-500/30">
        © 2025 Xenocipher. All rights reserved.
      </footer>
    </div>
  );
};

export default MetalsDetailPage;
