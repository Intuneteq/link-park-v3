import React from 'react'
import PropTypes from 'prop-types'

import './calendarevents.scss'
import { Buttons } from '../../atoms'

const CalendarEvents = ({ events }) => {
  return (
    <div className='dashboard-events'>
      <h3 className='dashboard-subtext'>Upcoming Events</h3>
      {events.map((item, index) => (
        <div key={index} className='event-card app__flex'>
          <div
            style={{ backgroundColor: item.color }}
            className='event-date app__flex'
          >
            {item.date1}
            <br /> {item.date2}
          </div>
          <div className='event-info'>
            <p>{item.title}</p>
            <span>Time: {item.time}</span>
          </div>
        </div>
      ))}
      <div className='app__flex'>
        <Buttons
          width={8.938}
          height={2.5}
          classType={'secondary'}
          type={'button'}
          text={'View all'}
        />
      </div>
    </div>
  )
}
CalendarEvents.propTypes = {
  events: PropTypes.array,
}

export default CalendarEvents
