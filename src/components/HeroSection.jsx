import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import speciality from '../assets/speciality.png';
import main from '../assets/image.png';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden m-0 z-0">
      <img src={main} alt="Main" className="w-full h-screen object-contain object-center select-none" draggable={false} />
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