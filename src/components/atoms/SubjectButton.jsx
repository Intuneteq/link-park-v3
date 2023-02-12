import React from 'react'
import PropTypes from 'prop-types'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const SubjectButton = ({ item }) => {
  return (
    <Link
      className='app__flex'
      style={{
        background: item.color,
        width: '38px',
        height: '30px',
        borderRadius: '8px',
      }}
    >
      <IoIosArrowForward width={'24px'} height={'24px'} color='#FFFFFF' />
    </Link>
  )
}

SubjectButton.propTypes = {
  item: PropTypes.any,
}

export default SubjectButton
