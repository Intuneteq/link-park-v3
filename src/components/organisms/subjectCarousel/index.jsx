import React from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import { useGetScreenSize } from '../../../hooks/useMediaQuery'
import { SubjectCard } from '../../molecules'
import './subjectcarousel.scss'

const SubjectCarousel = ({ courses }) => {
  const { isMobile, isTablet } = useGetScreenSize()
  const style = {
    width: isMobile ? '12.5rem' : '11.313rem',
  }
  return (
    <Swiper
      slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
      spaceBetween={40}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='swiper_component mySwiper'
    >
      {courses.map((course, index) => (
        <SwiperSlide
          key={index}
          className='swipes'
          style={{ width: style.width }}
        >
          <SubjectCard item={course} style={style} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

SubjectCarousel.propTypes = {
  courses: PropTypes.array.isRequired,
}

export default SubjectCarousel
