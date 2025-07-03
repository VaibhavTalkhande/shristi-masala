import React, { useState } from 'react';
import { GiChiliPepper } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import logo from '../assets/logo3.png';
import PatternBackground from './PatternBackground';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white sm:p-1 z-50 px-1 h-16 sm:h-24 shadow-md sticky top-0 transition-all duration-300">
      <div className="container mx-auto  max-w-7xl">
        <div className="flex justify-between items-center h-16 sm:h-24">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="h-full overflow-y-hidden  flex items-center">
              <img 
                src={logo} 
                alt="logo" 
                className="object-contain w-20 h-20 sm:w-16 sm:h-16 md:w-32 md:h-32 lg:w-32 lg:h-32" 
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#home" className="text-black hover:text-[#a10000] font-bold text-lg px-2 py-1 rounded transition-colors duration-200 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-1 after:bg-[#c9973e] after:transition-all after:duration-300 hover:after:w-full">
              Home
            </a>
            <a href="#products" className="text-black hover:text-[#a10000] font-bold text-lg px-2 py-1 rounded transition-colors duration-200 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-1 after:bg-[#c9973e] after:transition-all after:duration-300 hover:after:w-full">
              Our Products
            </a>
            <a href="#about" className="text-black hover:text-[#a10000] font-bold text-lg px-2 py-1 rounded transition-colors duration-200 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-1 after:bg-[#c9973e] after:transition-all after:duration-300 hover:after:w-full">
              About Us
            </a>
            <a href="#contact" className=" bg-[#e0d53c] text-[#a10000] px-6 py-2 font-bold rounded shadow hover:bg-[#a10000] hover:text-white border-2 border-[#a10000] transition-all duration-300">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#B52026] focus:outline-none p-2 border-2 border-[#c9973e] rounded shadow-lg hover:bg-[#a10000] hover:text-[#c9973e] transition-all duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Overlay for mobile menu */}
        <div
          className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isMenuOpen ? 'bg-black/40 opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsMenuOpen(false)}
        />
        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 w-full h-screen bg-white z-50 shadow-lg transition-transform duration-300 ease-in-out flex flex-col
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-3xl text-[#a10000] hover:text-black focus:outline-none z-50"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <IoMdClose />
          </button>
          <div className="flex flex-col w-full pt-16">
            <a href="#home" className="text-black font-semibold text-lg px-6 py-4 border-b border-gray-200 text-left hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="text-black font-semibold text-lg px-6 py-4 border-b border-gray-200 text-left hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Our Products</a>
            <a href="#about" className="text-black font-semibold text-lg px-6 py-4 border-b border-gray-200 text-left hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>About us</a>
          

            <a href="#contact" className="text-black font-semibold text-lg px-6 py-4 border-b border-gray-200 text-left hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 