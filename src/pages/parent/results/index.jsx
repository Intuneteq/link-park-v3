import React, { useState } from 'react'

import { RESULT_PARENT } from './contents'
import { Container, ResultBoard } from '../../../components/templates'
import './results.scss'

const Results = () => {
  const { selectors, result } = RESULT_PARENT
  const [pageNumber, setPageNumber] = useState(0)

  const cardPerPage = 7
  const pagesVisited = pageNumber * cardPerPage
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <Container name={'Results'}>
      <ResultBoard
        selectors={selectors}
        result={result}
        cardPerPage={cardPerPage}
        pagesVisited={pagesVisited}
        changePage={changePage}
      />
    </Container>
  )
}

export default Results
