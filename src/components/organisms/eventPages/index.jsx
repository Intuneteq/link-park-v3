import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ReactPaginate from "react-paginate";

import { EventCard } from "../../molecules";

import "./eventPages.scss";

const EventPages = ({ contents }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const cardPerPage = 3;
  const pagesVisited = pageNumber * cardPerPage;
  const pageCount = Math.ceil(contents.length / cardPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="eventPage">
      <article>
        {contents
          .slice(pagesVisited, pagesVisited + cardPerPage)
          .map((item, index) => (
            <EventCard key={index} content={item} className="eventPage" />
          ))}
      </article>
      <div>
        <ReactPaginate
          breakLabel="..."
          previousLabel={<GrFormPrevious />}
          nextLabel={<GrFormNext />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="paginationBttns"
          pageLinkClassName="page-num"
          previousLinkClassName="prev-link"
          nextLinkClassName="next-link"
          activeLinkClassName="paginationActive"
        />
      </div>
    </div>
  );
};

export default EventPages;
