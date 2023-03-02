import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

import { useGetScreenSize } from '../../../hooks/useMediaQuery'
import { LinkParkCalendar } from '../../../components/organisms'
import { Container } from '../../../components/templates'
import { Images } from '../../../constants'
import './calendar.scss'

const StudentCalendar = () => {
  const { isMobile } = useGetScreenSize()
  return (
    <Container name={'Calendar'}>
      <section className='student_calendar'>
        <div className='calendar_body'>
          <LinkParkCalendar className={!isMobile && 'calendar__'} />
        </div>
        <div className='calendar_facts'>
          <h3>Fun Fact On This Day</h3>
          <div className='factCard'>
            <div>
              <img src={Images.fact} alt='fact' />
            </div>
            <h5>Did you know that:</h5>
            <p>
              United Nations Educational, Scientific, and Cultural Organization
              (UNESCO) was founded.
            </p>
          </div>
          <div className='factBtns'>
            <button type='button'>
              <IoIosArrowBack />
            </button>
            <button type='button'>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default StudentCalendar
