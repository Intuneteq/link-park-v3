import React from 'react'

import {
  AssessmentCards,
  CalendarEvents,
  LinkParkCalendar,
} from '../../../components/organisms'
import { Container } from '../../../components/templates'

import './portal.scss'
import { LinkButton } from '../../../components/atoms'
import { Images } from '../../../constants'
import { SubjectCard } from '../../../components/molecules'

const Portal = () => {
  const cards = [
    {
      head: 'Overall Position',
      subText: '2nd',
      color: '#8A70D6',
      color2: '#BDA6FF',
      path: '/student/portal/results',
    },
    {
      head: 'Total Subjects',
      subText: '12',
      color: '#FCAB5E',
      color2: '#FFCFA2',
      path: '/',
    },
  ]

  const events = [
    {
      date1: 2,
      date2: 'jan',
      title: 'Principal Football Cup',
      time: '10am',
      color: '#5792F0',
    },
    {
      date1: 23,
      date2: 'jan',
      title: 'Inter House Sport',
      time: '10am',
      color: '#FFB0C8',
    },
    {
      date1: 15,
      date2: 'Feb',
      title: 'Swimming Class',
      time: '4pm',
      color: '#B395F3',
    },
    {
      date1: 28,
      date2: 'Feb',
      title: 'Visitation to the Zoo',
      time: '3pm',
      color: '#E9B575',
    },
    {
      date1: 28,
      date2: 'Feb',
      title: 'Excursion to Aso Rock',
      time: '11am',
      color: '#E9B575',
    },
  ]

  const timeTable = [
    {
      subject: 'Mathematics',
      time: '8:00 - 9:30',
    },
    {
      subject: 'Chemistry',
      time: '9:30 - 10:30',
    },
    {
      subject: 'Break Time',
      time: '10:30 - 11:00',
    },
  ]

  const content = [
    {
      img: Images.calculator,
      subject: 'mathematics',
      chapters: 12,
      bgColor: '#FFF0E1',
      color: '#FCAB5E',
    },
    {
      img: Images.discovery,
      subject: 'Physics',
      chapters: 16,
      bgColor: '#E9E3FE',
      color: '#8A70D6',
    },
    {
      img: Images.science,
      subject: 'Chemistry',
      chapters: 14,
      bgColor: '#E5F3FE',
      color: '#579BE4',
    },
    {
      img: Images.science,
      subject: 'Geography',
      chapters: 14,
      bgColor: '#E5F3FE',
      color: '#8C1BAB',
    },
    {
      img: Images.calculator,
      subject: 'mathematics',
      chapters: 12,
      bgColor: '#FFF0E1',
      color: '#FCAB5E',
    },
  ]

  return (
    <Container name='Portal'>
      <section className='portal__body app__flex-3'>
        <article className='portal__body-main'>
          <AssessmentCards cards={cards} />
          <div className='time-table'>
            <h3 className='dashboard-subtext'>Time Table</h3>
            <div className='table-body'>
              <span className='p-text'>Monday 2nd, 2022</span>
              <div className='app__flex-4 body_schedule'>
                {timeTable.map((item, index) => (
                  <div key={index}>
                    <p className='dashboard-subtext'>{item.subject}</p>
                    <span>{item.time}</span>
                  </div>
                ))}
              </div>
              <LinkButton name={'View full timetable'} />
            </div>
          </div>
          <div className='portal-materials'>
            <div className='app__flex-2'>
              <h3 className='dashboard-subtext'>Materials</h3>
              <LinkButton
                name={'View all  materials'}
                path={'/student/portal/materials'}
              />
            </div>
            <div className='subject_material app__flex-2'>
              {content.slice(0, 3).map((item, index) => (
                <SubjectCard
                  key={index}
                  item={item}
                  style={{ width: '214px' }}
                />
              ))}
            </div>
          </div>
        </article>
        <article className='portal__body-side'>
          <LinkParkCalendar />
          <CalendarEvents events={events} />
        </article>
      </section>
    </Container>
  )
}

export default Portal
