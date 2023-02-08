import React from 'react'

import styles from './atoms.module.scss'

const Pill = ({text, styling}) => {
  return (
    <small style={styling} className={styles.pill}>{text}</small>
  )
}

export default Pill