import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import "./carousel.scss";

const Carousel = ({ children, type, events, modules, swiperValues }) => {
  return (
    <Swiper
      slidesPerView={swiperValues.slides}
      spaceBetween={swiperValues.space}
      pagination={{
        clickable: true,
      }}
      modules={[modules]}
      className="swiper_component mySwiper"
    >
      {events.map((event, index) => (
        <SwiperSlide key={index} className="swipes">
          {children}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
