import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

import styles from './back.module.scss'

const Back = ({ className }) => {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(-1)}
      className={[styles.back, className].join(' ')}
    >
      <IoIosArrowBack />
      <p>Back to dashboard</p>
    </button>
  )
}
Back.propTypes = {
  className: PropTypes.string,
}
export default Back
