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
    width: isMobile ? '10.5rem' : '13.375rem',
  }
  return (
    <Swiper
      slidesPerView={isTablet ? 2 : 3}
      spaceBetween={isTablet ? 25 : 40}
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
