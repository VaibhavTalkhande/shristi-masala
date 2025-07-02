import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-[#a10000] text-white pt-10 pb-4 px-4 mt-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      {/* Logo and Brand */}
      <div className="flex flex-col items-center md:items-start">
        <img src={logo} alt="logo" className="w-20 h-20 object-contain mb-2 drop-shadow-lg bg-white rounded-full p-2" />
        <span className="font-bold text-xl tracking-wide">Shrishti Gold Masale</span>
      </div>
      {/* Quick Links */}
      <div className="flex flex-col items-center md:items-start gap-2">
        <span className="font-semibold mb-1">Quick Links</span>
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About Us</a>
        <a href="#products" className="hover:underline">Products</a>
        <a href="#contact" className="hover:underline">Contact Us</a>
      </div>
      {/* Social Media */}
      <div className="flex flex-col items-center md:items-end gap-2">
        <span className="font-semibold mb-1">Follow Us</span>
        <div className="flex gap-4 text-2xl">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#e0d53c]"><FaFacebook /></a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#e0d53c]"><FaInstagram /></a>
        </div>
      </div>
    </div>
    <div className="border-t border-[#e0d53c] mt-6 pt-4 text-center text-sm text-[#e0d53c]">
      &copy; {new Date().getFullYear()} Shrishti Gold Masale. All rights reserved.
    </div>
  </footer>
);

export default Footer; 