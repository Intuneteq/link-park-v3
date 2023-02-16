import React, { useState } from 'react'

import { useGetScreenSize } from '../../../hooks/useMediaQuery'
import { PORTAL_MATERIALS } from './contents'
import { Container, SubjectTemplate } from '../../../components/templates'

const PortalMaterials = () => {
  const { options, content } = PORTAL_MATERIALS
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
    <Container name={'Portal'}>
      <SubjectTemplate
        title={'Materials'}
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

export default PortalMaterials
