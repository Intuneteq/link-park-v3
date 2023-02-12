import React from 'react'
import PropTypes from 'prop-types'

import { SubjectCard } from '../../molecules'
import styles from './subjectcards.module.scss'

const SubjectCards = ({ content, pagesVisited, cardPerPage, style }) => {
  return (
    <div className={[styles.subjects__body_cards].join(' ')}>
      {content
        .slice(pagesVisited, pagesVisited + cardPerPage)
        .map((item, index) => (
          <SubjectCard key={index} item={item} style={style} />
        ))}
    </div>
  )
}

SubjectCards.propTypes = {
  content: PropTypes.any,
  pagesVisited: PropTypes.any,
  cardPerPage: PropTypes.any,
  style: PropTypes.any,
}

export default SubjectCards
