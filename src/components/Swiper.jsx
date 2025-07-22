import React from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img3 from '../assets/s.png'; 
import img2 from "../assets/rasm.png";
import img1 from "../assets/1111.png";

const Swiper = () => {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto bg-white py-6">
      <style>{`
        .swiper-button-prev,
        .swiper-button-next {
          background-color: #00AEEF;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          top: 50%;
          transform: translateY(-50%);
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 18px;
          font-weight: bold;
        }

        .swiper-pagination-bullet {
          background-color: #d4d4d4;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background-color: #FFF500 !important;
        }
      `}</style>

      <SwiperComponent
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="rounded"
      >
        {[ img1, img2, img3].map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              className="w-[1030px]  h-[692px] mx-auto rounded"
            />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
};

export default Swiper;
