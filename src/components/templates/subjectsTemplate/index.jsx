import React from 'react'
import { Pagination } from '../../atoms'
import { Back, Selector } from '../../molecules'
import { SubjectCards } from '../../organisms'

import styles from './subjecttemplate.module.scss'

const SubjectTemplate = ({
  title,
  options,
  content,
  pagesVisited,
  cardPerPage,
  changePage,
  style,
}) => {
  return (
    <div className={styles.subjects__body}>
      <Back />
      <div className={[styles.subjects__body_head, 'app__flex-2'].join(' ')}>
        <h3 className='dashboard-subtext'>{title}</h3>
        <Selector
          title={'Sort by Class'}
          options={options}
          width={'38%'}
          height={'48px'}
          padding={'14px 20px'}
          selectWidth={'209px'}
        />
      </div>
      <SubjectCards
        content={content}
        pagesVisited={pagesVisited}
        cardPerPage={cardPerPage}
        style={style}
      />
      <Pagination
        itemPerPage={cardPerPage}
        contentLength={content.length}
        changePage={changePage}
      />
    </div>
  )
}

export default SubjectTemplate
