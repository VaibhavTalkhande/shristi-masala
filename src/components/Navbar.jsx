import React, { useState } from 'react';
import { GiChiliPepper } from 'react-icons/gi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" w-full bg-red-900 border-b-4 border-[#a10000] shadow-lg z-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <GiChiliPepper className="text-3xl text-[#c9973e] drop-shadow-lg" />
            <span className="font-bold text-2xl text-white tracking-wide drop-shadow-md font-[Mangal]">सृष्टी</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#home" className="text-white hover:text-[#a10000] font-bold text-lg px-2 py-1 rounded transition-colors duration-200 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-1 after:bg-[#c9973e] after:transition-all after:duration-300 hover:after:w-full">
              Home
            </a>
            <a href="#products" className="text-white hover:text-[#a10000] font-bold text-lg px-2 py-1 rounded transition-colors duration-200 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-1 after:bg-[#c9973e] after:transition-all after:duration-300 hover:after:w-full">
              Products
            </a>
            <a href="#about" className="text-white hover:text-[#a10000] font-bold text-lg px-2 py-1 rounded transition-colors duration-200 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-1 after:bg-[#c9973e] after:transition-all after:duration-300 hover:after:w-full">
              About Us
            </a>
            <a href="#contact" className="bg-[#c9973e] text-[#a10000] px-6 py-2 font-bold rounded shadow hover:bg-[#a10000] hover:text-white border-2 border-[#a10000] transition-all duration-300">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none p-2 border-2 border-[#c9973e] rounded shadow-lg hover:bg-[#a10000] hover:text-[#c9973e] transition-all duration-300"
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-gradient-to-b from-[#a10000] via-[#c9973e] to-[#fff8e1] rounded-b-xl shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <div className="flex flex-col space-y-4 px-4">
            <a
              href="#home"
              className="text-white hover:text-[#a10000] font-bold text-lg px-2 py-2 rounded transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#products"
              className="text-white hover:text-[#a10000] font-bold text-lg px-2 py-2 rounded transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#about"
              className="text-white hover:text-[#a10000] font-bold text-lg px-2 py-2 rounded transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="bg-[#c9973e] text-[#a10000] px-6 py-2 font-bold rounded shadow hover:bg-[#a10000] hover:text-white border-2 border-[#a10000] transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 