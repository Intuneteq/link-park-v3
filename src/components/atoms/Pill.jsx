import React from 'react'
import PropTypes from 'prop-types'

import styles from './atoms.module.scss'

const Pill = ({ text, styling }) => {
  return (
    <small style={styling} className={styles.pill}>
      {text}
    </small>
  )
}

Pill.propTypes = {
  text: PropTypes.any,
  styling: PropTypes.any,
}

export default Pill
