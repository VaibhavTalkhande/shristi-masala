import React from 'react';
import { FaPepperHot, FaLeaf, FaStar, FaMortarPestle } from 'react-icons/fa';

const categories = [
  {
    name: 'Pure Spices',
    icon: <FaPepperHot className="text-3xl text-red-700" />,
    description: 'Finest quality single-origin spices for authentic flavor.'
  },
  {
    name: 'Blended Masalas',
    icon: <FaMortarPestle className="text-3xl text-yellow-700" />,
    description: 'Traditional and modern blends for every Indian recipe.'
  },
  {
    name: 'Special Blends',
    icon: <FaStar className="text-3xl text-amber-500" />,
    description: 'Signature mixes crafted for unique taste experiences.'
  },
  {
    name: 'Premium Masalas',
    icon: <FaLeaf className="text-3xl text-green-700" />,
    description: 'Handpicked, high-grade masalas for gourmet cooking.'
  }
];

const ProductCategories = () => (
  <section className="py-16 bg-gradient-to-b from-white to-yellow-50">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-red-900 mb-10 tracking-tight">Our Masala Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((cat) => (
          <div key={cat.name} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform border-t-4 border-red-700">
            <div className="mb-4">{cat.icon}</div>
            <h3 className="text-xl font-semibold text-red-800 mb-2">{cat.name}</h3>
            <p className="text-gray-600 text-center text-sm">{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductCategories; 