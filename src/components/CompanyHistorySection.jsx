import React from 'react';
import logo from '../assets/logo3.png';
import spice1 from '../assets/spicebowl.png';
import spice2 from '../assets/spiceplate.png';
import spice3 from '../assets/spicebox.png';
import spice4 from '../assets/powder.png';
import bg1 from '../assets/bg-1.png';

const Divider = () => (
  <div className="w-24 h-1 rounded-full bg-gradient-to-r from-[#e0d53c] via-[#a10000] to-[#e0d53c] opacity-80 my-6 mx-auto" />
);

const GlassCard = ({ children, className }) => (
  <div className={`bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl border border-[#e0d53c]/40 p-6 md:p-8 ${className || ''}`}>{children}</div>
);

const CompanyHistorySection = () => (
  <section className="w-full relative py-12 px-2 md:px-0 flex flex-col gap-16 items-center overflow-hidden">
    {/* Blurred, subtle background */}
    <div className="absolute inset-0 -z-10">
      <img src={bg1} alt="Spice pattern" className="w-full h-full object-cover blur-md scale-105" />
      <div className="absolute inset-0 bg-white/80" />
    </div>
    {/* Company History */}
    <GlassCard className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 flex flex-col items-start justify-center gap-4">
        <h2 className="text-4xl md:text-6xl font-serif italic font-bold text-[#a10000] drop-shadow-lg">COMPANY<br />HISTORY</h2>
        <img src={logo} alt="Logo" className="w-32 h-20 md:w-40 md:h-24 mt-2 drop-shadow-xl" />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex gap-4">
          <img src={spice1} alt="Spices" className="w-1/2 h-40 object-contain rounded-xl border-2 border-[#e0d53c] shadow" />
          <img src={spice2} alt="Spices" className="w-1/2 h-40 object-contain rounded-xl border-2 border-[#e0d53c] shadow" />
        </div>
        <div className="bg-[#a10000] text-white rounded-xl shadow p-6 mt-4 text-base md:text-lg font-medium">
          Srishti Gold Masale began its journey with a passion for creating exceptional spice blends that honor the rich heritage of Indian cooking. From humble beginnings as a small local venture, Srishti has grown into a trusted name in the spice industry. Over the years, we have perfected our blends by combining traditional methods with modern techniques, ensuring that every pack delivers the true essence of authentic Indian flavors.
        </div>
      </div>
    </GlassCard>
    <Divider />
    {/* Vision */}
    <GlassCard className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 flex flex-col gap-4">
        <img src={spice3} alt="Spices" className="w-full h-40 object-cover rounded-xl border-2 border-[#e0d53c] shadow" />
      </div>
      <div className="flex-1 flex flex-col justify-center gap-4">
        <h2 className="text-4xl md:text-5xl font-serif italic font-bold text-[#a10000] drop-shadow-lg">VISION</h2>
        <div className="bg-[#a10000] text-white rounded-xl shadow p-6 text-base md:text-lg font-medium">
          To become a household name in every Indian kitchen by delivering high-quality spices that bring people together through the joy of cooking.
        </div>
      </div>
    </GlassCard>
    <Divider />
    {/* Mission */}
    <GlassCard className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 flex flex-col justify-center gap-4 order-2 md:order-1">
        <h2 className="text-4xl md:text-5xl font-serif italic font-bold text-[#a10000] drop-shadow-lg">MISSION</h2>
        <div className="bg-[#a10000] text-white rounded-xl shadow p-6 text-base md:text-lg font-medium">
          To provide pure, authentic, and aromatic spice blends that elevate every dish. To promote the legacy of Indian cuisine across the globe. To uphold sustainability and ethical sourcing in every step of our process.
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-4 order-1 md:order-2">
        <img src={spice4} alt="Spices" className="w-full h-40 object-cover rounded-xl border-2 border-[#e0d53c] shadow" />
        <img src={logo} alt="Logo" className="w-32 h-20 md:w-40 md:h-24 mt-2 self-end drop-shadow-xl" />
      </div>
    </GlassCard>
  </section>
);

export default CompanyHistorySection; 