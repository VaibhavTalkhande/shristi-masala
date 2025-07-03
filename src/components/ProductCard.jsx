import React from 'react';

const ProductCard = ({ image, name }) => {
  return (
    <div className="bg-white/95 rounded-2xl shadow-xl overflow-hidden flex flex-col items-center p-6 border-2 border-[#c9973e] hover:shadow-2xl hover:border-[#a10000] hover:scale-105 transition-all duration-300 group">
      <div className="w-full flex justify-center items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-48 h-48 object-contain drop-shadow-lg select-none transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-extrabold text-[#a10000] text-center mb-2 tracking-wide drop-shadow-sm uppercase">{name}</h3>
    </div>
  );
};

export default ProductCard; 