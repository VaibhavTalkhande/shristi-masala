import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import speciality from '../assets/speciality.png';
import main from '../assets/image2 (1).png';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="relative w-full bg-white pt-5 sm:pt-10 sm:h-screen min-h-[60vw] overflow-hidden m-0 z-0">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Blur placeholder */}
        {!loaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse blur-lg" />
        )}
        <img
          src={main}
          alt="Main"
          className={`w-full min-h-[60vw]  object-center select-none sm:h-[60vw] md:h-screen lg:h-screen transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
          loading="eager"
        />
      </div>
      {/* <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
        className="w-full relative"
      >
        <SwiperSlide>
          <img
            src={speciality}
            alt="Speciality"
            className="w-full h-screen object-cover object-center select-none"
            draggable={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={main}
            alt="Main"
            className="w-full h-screen object-contain object-center select-none"
            draggable={false}
          />
        </SwiperSlide>
      </Swiper> */}
    </section>
  );
};

export default HeroSection; 