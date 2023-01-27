import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ReactPaginate from "react-paginate";

const Pagination = ({ itemPerPage, contentLength, changePage, styles }) => {
  const pageCount = Math.ceil(contentLength / itemPerPage);
  return (
    <ReactPaginate
      breakLabel="..."
      previousLabel={<GrFormPrevious />}
      nextLabel={<GrFormNext />}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={styles.paginationBttns}
      pageLinkClassName={styles.pageNum}
      previousLinkClassName={styles.prevLink}
      nextLinkClassName={styles.nextLink}
      activeLinkClassName={styles.PaginationActive}
    />
  );
};

export default Pagination;
