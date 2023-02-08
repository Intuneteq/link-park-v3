import React from 'react'
import { AssessmentCard } from '../../molecules'

import styles from './cards.module.scss'

const AssessmentCards = ({ cards }) => {
  return (
    <div className={[`app__flex-2 ${styles.assessment_card}`].join(' ')}>
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

export default AssessmentCards
