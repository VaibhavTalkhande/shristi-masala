import React from 'react';
import { FaAward, FaUtensilSpoon, FaShieldAlt, FaSeedling } from 'react-icons/fa';
import borderImg from '../assets/border-of-herbs-and-spices.jpg';

const categories = [
  {
    name: 'Premium Quality Ingredients',
    icon: <FaAward className="text-3xl text-[#a10000]" />, // brand red
    description: 'Only the finest, handpicked spices for unmatched flavor.'
  },
  {
    name: 'Convenience in Cooking',
    icon: <FaUtensilSpoon className="text-3xl text-[#a10000]" />, // brand red
    description: 'Easy-to-use blends that save time and enhance taste.'
  },
  {
    name: 'Certified and Safe',
    icon: <FaShieldAlt className="text-3xl text-[#a10000]" />,
    description: 'Quality assured, certified, and safe for your family.'
  },
  {
    name: 'Hygienic Processing',
    icon: <FaSeedling className="text-3xl text-[#a10000]" />,
    description: 'Processed and packed in the most hygienic conditions.'
  }
];

const ProductCategories = () => (
  <section className="py-16 bg-[#fff8e1] relative">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#a10000] mb-10 tracking-tight font-serif italic drop-shadow">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {categories.map((cat, idx) => (
          <div key={cat.name} className="relative flex items-center gap-4 bg-[#a10000] rounded-2xl shadow-xl p-6 md:p-8 border-4 border-transparent hover:scale-105 transition-transform">
            {/* Decorative border image */}
            <img src={borderImg} alt="herb border" className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-20 pointer-events-none z-0" />
            {/* Icon */}
            <div className="relative z-10 flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-white border-2 border-[#e0d53c] shadow-lg mr-4">
              {cat.icon}
            </div>
            {/* Text */}
            <div className="relative z-10 flex-1">
              <h3 className="text-lg md:text-xl font-bold text-white mb-1 font-sans">{cat.name}</h3>
              <p className="text-white text-base md:text-lg font-medium">{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductCategories; 