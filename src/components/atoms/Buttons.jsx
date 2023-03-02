import React from 'react'
import PropTypes from 'prop-types'

import { useGetScreenSize } from '../../hooks/useMediaQuery'
import styles from './atoms.module.scss'
import { Link } from 'react-router-dom'

const Buttons = ({
  width,
  height,
  text,
  classType,
  color,
  onClick,
  type,
  fontWeight,
  fontSize,
  to,
}) => {
  const { isMobile } = useGetScreenSize()
  const toggleClassName = () => {
    if (classType.toLowerCase() === 'primary') {
      return styles.btnPrimary
    } else if (classType.toLowerCase() === 'secondary') {
      return styles.btnSecondary
    } else if (classType.toLowerCase() === 'tertiary') {
      return styles.btnTertiary
    }
  }

  const displayButton = function () {
    if (to) {
      return (
        <Link
          to={to}
          className={toggleClassName()}
          style={{
            width: width ? (isMobile ? '9rem' : `${width}rem`) : '100%',
            height: height ? (isMobile ? '3rem' : `${height}rem`) : '100%',
            color,
            fontSize: fontSize ? `${fontSize}rem` : '1rem',
            fontWeight,
          }}
        >
          {text}
        </Link>
      )
    } else {
      return (
        <button
          onClick={onClick}
          type={type}
          className={toggleClassName()}
          style={{
            width: width ? (isMobile ? '9rem' : `${width}rem`) : '100%',
            height: height ? (isMobile ? '3rem' : `${height}rem`) : '100%',
            color,
            fontSize: fontSize ? `${fontSize}rem` : '1rem',
            fontWeight,
          }}
        >
          {text}
        </button>
      )
    }
  }

  return displayButton()
}

Buttons.propTypes = {
  text: PropTypes.string.isRequired,
  classType: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  fontWeight: PropTypes.number,
  fontSize: PropTypes.string,
  to: PropTypes.string,
}

export default Buttons
