import React from 'react'
import PropTypes from 'prop-types'

import './calendar.scss'

const LinkParkCalendar = ({ showTitle, height }) => {
  return (
    <div className='dashboard-calender'>
      {showTitle ? '' : <h3>Calender</h3>}
      <div style={{ height }} className='calendar'>
        okay
      </div>
    </div>
  )
}

LinkParkCalendar.propTypes = {
  showTitle: PropTypes.any,
  height: PropTypes.any,
}

export default LinkParkCalendar
