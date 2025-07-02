import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';
import logo from '../assets/logo3.png';
import contactImg from '../assets/spiceplate.png';
import bgSpices from '../assets/spicebackdrop.jpg';

const ContactSection = () => (
  <section id="contact" className="relative overflow-hidden bg-[#fff8e1] py-16 px-0">
    {/* Spice background image with overlay */}
    <div className="absolute inset-0 w-full h-full">
      <img src={bgSpices} alt="spices background" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-white/70" />
    </div>
    <div className="relative z-10 flex flex-col md:flex-row w-full gap-10 items-center justify-center px-4 md:px-12">
      <div className="flex-1 flex flex-col gap-4 w-full max-w-xl bg-white/90 rounded-2xl shadow-xl p-8">
        <h2 className="text-4xl md:text-5xl font-bold text-[#a10000] mb-2 font-serif italic">Contact Us</h2>
        <p className="mb-2 text-[#a10000] text-lg font-semibold">Let's Stay Connected! For queries, feedback, or orders, feel free to reach out to us. We're always here to help you enhance your cooking journey.</p>
        <div className="mb-2">
          <span className="font-bold text-2xl text-[#a10000]">Address</span>
          <p className="text-[#7a2d1a] text-base mt-1 font-medium">Plot No. 116-A, Maa Umiya Audyogik Sahakari Vasahat Maryadit, Kapsi, Th. Kamptee, Ds. Nagpur, Maharashtra.</p>
        </div>
        <div className="flex flex-col items-center md:items-start mt-6">
          <img src={contactImg} alt="Contact Person" className="w-fit h-72 object-cover  bg-white" />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-6 items-start md:items-end w-full max-w-xl bg-white/90 rounded-2xl shadow-xl p-8">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center gap-4 text-[#a10000] text-xl font-bold"><FaPhoneAlt className="text-2xl" /> Phone Number <span className="text-[#7a2d1a] font-normal ml-2 text-lg">+91 9834095895</span></div>
          <div className="flex items-center gap-4 text-[#a10000] text-xl font-bold"><FaEnvelope className="text-2xl" /> Email <span className="text-[#7a2d1a] font-normal ml-2 text-lg">srishtispices388@gmail.com</span></div>
          <div className="flex items-center gap-4 text-[#a10000] text-xl font-bold"><HiOutlineDocumentText className="text-2xl" /> GST IN <span className="text-[#7a2d1a] font-normal ml-2 text-lg">27EDPPP0932N1ZV</span></div>
        </div>
        <div className="flex flex-col gap-2 mt-2 w-full">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#a10000] hover:text-[#e0d53c] text-lg font-semibold"><FaFacebook className="text-2xl" /> Srishti Spices IND</a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#a10000] hover:text-[#e0d53c] text-lg font-semibold"><FaInstagram className="text-2xl" /> srishtispices.01</a>
        </div>
        <div className="flex flex-col items-center md:items-end w-full mt-4">
          <img src={logo} alt="Logo" className="w-40 h-28 object-contain drop-shadow-lg" />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection; 