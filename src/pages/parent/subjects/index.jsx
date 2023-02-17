import React, { useState } from 'react'

import { SUBJECT_CONTENT } from './contents'
import { Container, SubjectTemplate } from '../../../components/templates'
import { useGetScreenSize } from '../../../hooks/useMediaQuery'
import './subjects.scss'

const Subjects = () => {
  const { options, content } = SUBJECT_CONTENT
  const { isMobile } = useGetScreenSize()

  const [pageNumber, setPageNumber] = useState(0)

  const cardPerPage = 8
  const pagesVisited = pageNumber * cardPerPage
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const style = {
    width: isMobile ? '10.5rem' : '13.375rem',
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
