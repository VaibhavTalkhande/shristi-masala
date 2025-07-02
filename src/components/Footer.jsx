import React from 'react';
import logo from '../assets/logo3.png';
import bgSpices from '../assets/bg-1.png';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className="relative">
    {/* Spice background image with overlay */}
    <div className="absolute inset-0 w-full h-full">
      <img src={bgSpices} alt="spices background" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-[#a10000]/80" />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 py-10 px-4">
      {/* Logo and Brand */}
      <div className="flex flex-col items-center md:items-start">
        <img src={logo} alt="logo" className="w-24 h-24 object-contain mb-2 drop-shadow-lg rounded-full bg-white p-2" />
        <span className="font-bold text-xl tracking-wide text-white">Shrishti Gold Masale</span>
      </div>
      {/* Quick Links */}
      <div className="flex flex-col items-center md:items-start gap-2">
        <span className="font-semibold mb-1 text-[#e0d53c]">Quick Links</span>
        <a href="#home" className="hover:underline text-white">Home</a>
        <a href="#about" className="hover:underline text-white">About Us</a>
        <a href="#products" className="hover:underline text-white">Products</a>
        <a href="#contact" className="hover:underline text-white">Contact Us</a>
      </div>
      {/* Contact & Social Media */}
      <div className="flex flex-col items-center md:items-end gap-3">
        <span className="font-semibold mb-1 text-[#e0d53c]">Contact</span>
        <div className="flex items-center gap-2 text-white"><FaPhoneAlt className="text-[#e0d53c]" /> <span>+91 9834095895</span></div>
        <div className="flex items-center gap-2 text-white"><FaEnvelope className="text-[#e0d53c]" /> <span>srishtispices388@gmail.com</span></div>
        <span className="font-semibold mt-3 mb-1 text-[#e0d53c]">Follow Us</span>
        <div className="flex gap-4 text-2xl">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#e0d53c] text-white"><FaFacebook /></a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#e0d53c] text-white"><FaInstagram /></a>
        </div>
      </div>
    </div>
    <div className="relative z-10 border-t border-[#e0d53c] mt-6 pt-4 text-center text-sm text-[#e0d53c] bg-transparent">
      &copy; {new Date().getFullYear()} Shrishti Gold Masale. All rights reserved.
    </div>
  </footer>
);

export default Footer; 