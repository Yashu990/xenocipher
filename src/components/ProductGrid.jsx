import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => (
  <section className="py-16 sm:py-20 lg:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);

export default ProductGrid;
