import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { SubjectCard } from "../../molecules";
import "./subjectcarousel.scss";

const SubjectCarousel = ({courses}) => {
  const style = {
    width: '181px'
  }
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={40}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="swiper_component mySwiper"
    >
      {courses.map((course, index) => (
        <SwiperSlide className="swipes" style={{width: style.width}}>
          <SubjectCard item={course} key={index} style={style} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SubjectCarousel;
