import React from "react";

// Import components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductGrid from "./components/ProductGrid";
import CtaStrip from "./components/CtaStrip";
import Footer from "./components/Footer";

// Import product data
import { products } from "./data/products";
import MainHome from "./components/MainHome";

function App() {
  return (
    <>
      
      <MainHome />
      <Footer/>
      

      
      {/* <div className="bg-darkBg text-white font-sans">
        <Header />
        <HeroSection />
        <div className="bg-blue-950">
          <ProductGrid products={products} />
        </div>
        <CtaStrip />
        <Footer />
      </div> */}
     
    </>
  );
}

export default App;
