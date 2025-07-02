import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaRegAddressCard } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { HiOutlineDocumentText } from 'react-icons/hi';
import logo from '../assets/logo.png';
import contactImg from '../assets/25g\ shrushti\ mkp.jpg';

const ContactSection = () => (
  <section id="contact" className="relative bg-[#fff8e1] py-12 px-4 md:px-0">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left: Text & Address */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#a10000] mb-4">Contact Us</h2>
        <p className="mb-4 text-gray-700">Let's Stay Connected! For queries, feedback, or orders, feel free to reach out to us. We're always here to help you enhance your cooking journey.</p>
        <div className="mb-4">
          <span className="font-bold text-[#a10000]">Address</span>
          <p className="text-gray-800 text-sm mt-1">Plot No. 116-A, Maa Umiya Audyogik Sahakari Vasahat Maryadit, Kapsi, Th. Kamptee, Ds. Nagpur, Maharashtra.</p>
        </div>
        <div className="flex flex-col gap-3 mb-4">
          <div className="flex items-center gap-3 text-[#a10000] font-semibold"><FaPhoneAlt /> Phone Number <span className="text-black font-normal ml-2">+91 9834095895</span></div>
          <div className="flex items-center gap-3 text-[#a10000] font-semibold"><MdOutlineEmail /> Email <span className="text-black font-normal ml-2">srishtispices388@gmail.com</span></div>
          <div className="flex items-center gap-3 text-[#a10000] font-semibold"><HiOutlineDocumentText /> GST IN <span className="text-black font-normal ml-2">27EDPPP0932N1ZV</span></div>
        </div>
        <div className="flex gap-6 mt-4">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#a10000] hover:text-[#e0d53c] text-lg"><FaFacebook /> Srishti Spices IND</a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#a10000] hover:text-[#e0d53c] text-lg"><FaInstagram /> srishtispices.01</a>
        </div>
      </div>
      {/* Right: Image & Logo */}
      <div className="flex flex-col items-center justify-center gap-4">
        <img src={contactImg} alt="Contact Person" className="w-48 h-64 object-cover rounded-xl shadow-lg border-4 border-[#a10000] bg-white" />
        <img src={logo} alt="Logo" className="w-32 h-24 object-contain mt-2 drop-shadow-lg" />
      </div>
    </div>
  </section>
);

export default ContactSection; 