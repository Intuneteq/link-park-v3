import React from 'react'
import { GrDown } from 'react-icons/gr'

import styles from './atoms.module.scss'

const AccordionIcon = ({toggle}) => {
  return (
    <GrDown className={toggle ?[ styles.rotateUp, styles.accordion ].join(' '): styles.accordion} />
  )
}

export default AccordionIcon