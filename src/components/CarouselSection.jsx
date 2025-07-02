import React from 'react';
import bg1 from '../assets/bg-1.png';
import logo from '../assets/logo3.png';
import productsImg from '../assets/products.png';

const CarouselSection = () => (
  <section className="w-full h-48 sm:h-64 md:h-80 lg:h-[40vh] relative flex flex-col items-center justify-center overflow-hidden">
    {/* Blurred, darkened background */}
    <div className="absolute inset-0 -z-20">
      <img src={bg1} alt="Spice background" className="w-full h-full object-cover scale-105" />
      <div className="absolute inset-0 bg-[#a10000]/60" />
    </div>
    {/* Responsive banner product image */}
    <img
      src={productsImg}
      alt="Our Spice Collection"
      className="absolute inset-0 w-full h-full object-contain object-center z-0 select-none"
      style={{ objectPosition: 'center' }}
    />
    {/* Glassmorphic overlay for logo and heading */}
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-white/30 backdrop-blur-sm">
      <img src={logo} alt="Spice Logo" className="w-12 h-12 md:w-20 md:h-20 mb-2 drop-shadow-lg bg-white/80 rounded-full border-2 border-[#e0d53c]" />
      <h2 className="text-lg md:text-2xl font-bold text-[#a10000] drop-shadow-lg tracking-wide text-center select-none pointer-events-none bg-white/60 px-4 py-1 rounded-2xl border border-[#e0d53c]">Our Spice Collection</h2>
    </div>
  </section>
);

export default CarouselSection; 