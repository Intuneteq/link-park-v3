import React from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import './carousel.scss'

const Carousel = ({ children, events, modules, swiperValues }) => {
  const toggleModule = () => {
    if (modules.toLowerCase() === 'pagination') {
      return [Pagination]
    }
  }
  return (
    <Swiper
      slidesPerView={swiperValues.slides}
      spaceBetween={swiperValues.space}
      pagination={{
        clickable: true,
      }}
      modules={toggleModule()}
      className='carousel_swiper mySwiper'
    >
      {events.map((event, index) => (
        <SwiperSlide key={index} className='carousel_swipes'>
          {children}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  events: PropTypes.array.isRequired,
  modules: PropTypes.string,
  swiperValues: PropTypes.object,
}

export default Carousel
