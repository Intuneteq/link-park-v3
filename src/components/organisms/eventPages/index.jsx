import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Pagination } from '../../atoms'
import { EventCard } from '../../molecules'
import './eventPages.scss'

const EventPages = ({ contents }) => {
  const [pageNumber, setPageNumber] = useState(0)

  const cardPerPage = 3
  const pagesVisited = pageNumber * cardPerPage
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <div className='eventPage'>
      <article>
        {contents
          .slice(pagesVisited, pagesVisited + cardPerPage)
          .map((item, index) => (
            <EventCard key={index} content={item} className='eventPage' />
          ))}
      </article>
      <div>
        <Pagination
          itemPerPage={cardPerPage}
          contentLength={contents.length}
          changePage={changePage}
        />
      </div>
    </div>
  )
}

EventPages.propTypes = {
  contents: PropTypes.any,
}

export default EventPages
