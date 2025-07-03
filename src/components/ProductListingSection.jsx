import React from 'react';
import ProductCard from './ProductCard';
import dhaniyamasala from '../assets/dhaniyamasala.png';
import sambharmasala from '../assets/sambharmasala.png';
import sabjimasala from '../assets/sabjimasala.png';
import gingermasala from '../assets/gingermasala.png';
import fishcurrymasala from '../assets/fishcurrymasala.png';
import chickenbiryanimasala from '../assets/chickenbiryanimasala.png';

import bgImage from '../assets/border-of-herbs-and-spices.jpg';

// List of masala product images and names
const masalaProducts = [
  { image: dhaniyamasala, name: 'Dhaniya Masala' },
  { image: sambharmasala, name: 'Sambhar Masala' },
  { image: sabjimasala, name: 'Sabji Masala' },
  { image: gingermasala, name: 'Ginger Masala' },
  { image: fishcurrymasala, name: 'Fish Curry Masala' },
  { image: chickenbiryanimasala, name: 'Chicken Biryani Masala' },
];

const ProductListingSection = () => {
  return (
    <section
      id="products"
      className="w-full py-12 px-4 sm:px-8 lg:px-16 relative bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Transparent blur overlay */}
      <div className="absolute inset-0 z-0 bg-white/40 backdrop-blur-md" />
      <div className="relative z-10 bg-white/70 rounded-2xl p-4 sm:p-8 max-w-7xl mx-auto shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#a10000] mb-8 text-center drop-shadow">Our Masala Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {masalaProducts.map((product, idx) => (
            <ProductCard key={idx} image={product.image} name={product.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListingSection; 