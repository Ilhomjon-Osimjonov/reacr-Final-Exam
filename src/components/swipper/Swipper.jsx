import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import swiperData from "../../mock/swipper";
import "./Swipper.css"

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Swipper = () => {
  return (
    <div className="swipper-container">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
      >
        {swiperData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="swiper-slide">
              <img
                src={slide.image}
              />
              <div className="swiper-slide-text">
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swipper;