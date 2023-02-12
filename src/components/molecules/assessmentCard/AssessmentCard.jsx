import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

import style from './assessmentcard.module.scss'

const AssessmentCard = ({ color, color2, head, subText, path }) => {
  return (
    <div className={[style.aCard].join(' ')} style={{ backgroundColor: color }}>
      <div>
        <h6>{head}</h6>
        <p>{subText}</p>
      </div>
      <Link to={path} style={{ backgroundColor: color2 }} className='app__flex'>
        Details <IoIosArrowForward />
      </Link>
    </div>
  )
}

AssessmentCard.propTypes = {
  color: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  head: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default AssessmentCard
