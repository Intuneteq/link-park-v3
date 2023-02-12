import React, { useState } from 'react'

import { SUBJECT_CONTENT } from './contents'
import { Container, SubjectTemplate } from '../../../components/templates'
import './subjects.scss'

const Subjects = () => {
  const [pageNumber, setPageNumber] = useState(0)
  const { options, content, style } = SUBJECT_CONTENT

  const cardPerPage = 8
  const pagesVisited = pageNumber * cardPerPage
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <Container name={'Subject'}>
      <SubjectTemplate
        title={'Subjects'}
        options={options}
        content={content}
        pagesVisited={pagesVisited}
        cardPerPage={cardPerPage}
        changePage={changePage}
        style={style}
      />
    </Container>
  )
}

export default Subjects
