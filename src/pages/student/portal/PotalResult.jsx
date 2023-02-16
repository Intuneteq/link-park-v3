import React, { useState } from 'react'

import { PORTAL_RESULTS_CONTENT } from './contents'
import { Container, ResultBoard } from '../../../components/templates'

const PotalResult = () => {
  const { selectors, result } = PORTAL_RESULTS_CONTENT
  const [pageNumber, setPageNumber] = useState(0)

  const cardPerPage = 7
  const pagesVisited = pageNumber * cardPerPage
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <Container name={'Portal'}>
      <ResultBoard
        selectors={selectors}
        result={result}
        cardPerPage={cardPerPage}
        pagesVisited={pagesVisited}
        changePage={changePage}
        backbutton={true}
      />
    </Container>
  )
}

export default PotalResult
