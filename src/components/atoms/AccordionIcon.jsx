import React from 'react'
import PropTypes from 'prop-types'

import { GrDown } from 'react-icons/gr'

import styles from './atoms.module.scss'

const AccordionIcon = ({ toggle }) => {
  return (
    <GrDown
      className={
        toggle
          ? [styles.rotateUp, styles.accordion].join(' ')
          : styles.accordion
      }
    />
  )
}

AccordionIcon.propTypes = {
  toggle: PropTypes.object.isRequired,
}

export default AccordionIcon
