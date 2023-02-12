import React from 'react'
import PropTypes from 'prop-types'

import useGetWindowResize from '../../../hooks/useGetWindowResize'
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
  const { isMobile } = useGetWindowResize()
  return (
    <div className={styles.subjects__body}>
      <Back />
      <div className={[styles.subjects__body_head].join(' ')}>
        <h4>{title}</h4>
        <Selector
          title={'Sort by Class'}
          options={options}
          width={'38%'}
          height={'48px'}
          padding={'14px 20px'}
          selectWidth={isMobile ? '97px' : '209px'}
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

SubjectTemplate.propTypes = {
  title: PropTypes.any,
  options: PropTypes.any,
  content: PropTypes.any,
  pagesVisited: PropTypes.any,
  cardPerPage: PropTypes.any,
  changePage: PropTypes.any,
  style: PropTypes.any,
}

export default SubjectTemplate
