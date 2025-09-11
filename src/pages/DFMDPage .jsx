import React from 'react'
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CtaStrip from '../components/CtaStrip';
import Footer from '../components/Footer';

import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';
const DFMDPage  = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <div className="bg-blue-950">
      <ProductGrid products={products} />
      </div>
      <CtaStrip/>
      <Footer/>
    </div>
  )
}

export default DFMDPage ;