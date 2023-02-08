import React from 'react'
import {
  AssessmentCards,
  CalendarEvents,
  LinkParkCalendar,
  Table,
  TopNav,
} from '../../../components/organisms'

import './dashboard.scss'

const Dashboard = () => {
  const cards = [
    {
      head: 'Overall Position',
      subText: '2nd',
      color: '#8A70D6',
      color2: '#BDA6FF',
    },
    {
      head: 'Total Subjects',
      subText: '12',
      color: '#FCAB5E',
      color2: '#FFCFA2',
    },
  ]

  const tableData = {
    head: ['Title', 'Grade', 'Status'],
    body: [
      {
        bodyHead: {
          headTitle: 'Fun Fact About Australia',
          headText: 'Tue 12, 2022',
        },
        bodyItems: ['0/10', 'Pending'],
      },
      {
        bodyHead: {
          headTitle: 'Verbal Abtitude',
          headText: 'Tue 12, 2022',
        },
        bodyItems: ['8/10', 'Completed'],
      },
      {
        bodyHead: {
          headTitle: 'Physics Assignment',
          headText: 'Tue 12, 2022',
        },
        bodyItems: ['9/10', 'Completed'],
      },
      {
        bodyHead: {
          headTitle: 'Physics Assignment',
          headText: 'Tue 12, 2022',
        },
        bodyItems: ['9/10', 'Completed'],
      },
    ],
  }

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

  return (
    <div className='dashboard'>
      <TopNav name='Dashboard' />

      <section className='dashboard__body app__flex-3'>
        <section className='dashboard__body-main'>
          <div className='assessment'>
            <div className='app__flex-2 assessment-head'>
              <h1>Assessments</h1>
              <h2>SS3c</h2>
            </div>
            <AssessmentCards cards={cards} />
          </div>
          <div className='assignment'>
            <div className='app__flex-2 assignment-head'>
              <h3>Students Assignments</h3>
              <button className='btn-tertiary'>view all</button>
            </div>
            <Table content={tableData} />
          </div>
        </section>
        <section className='dashboard__body-side'>
          <LinkParkCalendar />
          <CalendarEvents events={events} />
        </section>
      </section>
    </div>
  )
}

export default Dashboard
