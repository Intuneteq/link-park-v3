import React from 'react'
import PropTypes from 'prop-types'

import styles from './atoms.module.scss'

const InputBox = ({ width, height, type, placeholder }) => {
  return (
    <input
      className={styles.inputBox}
      style={{ width, height }}
      type={type}
      placeholder={placeholder}
    />
  )
}

InputBox.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

export default InputBox
