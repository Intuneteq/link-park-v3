import React from 'react'
import PropTypes from 'prop-types'

import dayjs from 'dayjs'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'

import './calendar.scss'

const LinkParkCalendar = ({ showTitle, height }) => {
  const [value, setValue] = React.useState(dayjs(Date.now()))
  return (
    <div className='dashboard-calender'>
      {showTitle ? '' : <h3>Calender</h3>}
      <div style={{ height }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            className='calendar__'
            displayStaticWrapperAs='desktop'
            openTo='day'
            value={value}
            onChange={(newValue) => {
              setValue(newValue)
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
    </div>
  )
}

LinkParkCalendar.propTypes = {
  showTitle: PropTypes.any,
  height: PropTypes.any,
}

export default LinkParkCalendar
