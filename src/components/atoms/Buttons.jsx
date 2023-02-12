import React from 'react'
import PropTypes from 'prop-types'

import styles from './atoms.module.scss'

const Buttons = ({ width, height, text, classType, color, onClick, type }) => {
  const toggleClassName = () => {
    if (classType.toLowerCase() === 'primary') {
      return styles.btnPrimary
    } else if (classType.toLowerCase() === 'secondary') {
      return styles.btnSecondary
    } else if (classType.toLowerCase() === 'tertiary') {
      return styles.btnTertiary
    }
  }
  return (
    <button
      onClick={onClick}
      type={type}
      className={toggleClassName()}
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
        color,
        fontSize: '1rem',
      }}
    >
      {text}
    </button>
  )
}

Buttons.propTypes = {
  text: PropTypes.string.isRequired,
  classType: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
}

export default Buttons
