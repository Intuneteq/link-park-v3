import React from 'react'
import { SubjectCard } from '../../molecules'

import styles from './subjectcards.module.scss'

const SubjectCards = ({ content, pagesVisited, cardPerPage, style }) => {
  return (
    <div className={[styles.subjects__body_cards, 'app__flex-2'].join(' ')}>
      {content
        .slice(pagesVisited, pagesVisited + cardPerPage)
        .map((item, index) => (
          <SubjectCard key={index} item={item} style={style} />
        ))}
    </div>
  )
}

export default SubjectCards
