import React from 'react'
import PropTypes from 'prop-types'

import { AssessmentCard } from '../../molecules'
import styles from './cards.module.scss'

const AssessmentCards = ({ cards }) => {
  return (
    <div className={[`${styles.assessment_card}`].join(' ')}>
      {cards.map((item, index) => (
        <AssessmentCard
          key={index}
          color={item.color}
          color2={item.color2}
          head={item.head}
          subText={item.subText}
          path={item.path}
        />
      ))}
    </div>
  )
}

AssessmentCards.propTypes = {
  cards: PropTypes.any,
}

export default AssessmentCards
