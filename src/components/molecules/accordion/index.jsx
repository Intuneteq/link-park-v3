import React from 'react'
import PropTypes from 'prop-types'

import styles from './accordion.module.scss'

const Accordion = ({ children, toggle, setToggle }) => {
  return (
    <button
      type='button'
      onClick={() => setToggle(!toggle)}
      className={styles.card}
    >
      {children}
    </button>
  )
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired,
}

export default Accordion
