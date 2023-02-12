import React from 'react'
import PropTypes from 'prop-types'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import ReactPaginate from 'react-paginate'

import styles from './atoms.module.scss'

const Pagination = ({ itemPerPage, contentLength, changePage }) => {
  const pageCount = Math.ceil(contentLength / itemPerPage)
  return (
    <ReactPaginate
      breakLabel='...'
      previousLabel={<GrFormPrevious />}
      nextLabel={<GrFormNext />}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={styles.paginationBttns}
      pageLinkClassName={styles.pageNum}
      previousLinkClassName={styles.prevLink}
      nextLinkClassName={styles.nextLink}
      activeLinkClassName={styles.paginationActive}
    />
  )
}

Pagination.propTypes = {
  itemPerPage: PropTypes.any,
  contentLength: PropTypes.any,
  changePage: PropTypes.any,
}

export default Pagination
