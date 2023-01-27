import React, { useState } from "react";

import { Pagination } from "../../atoms";
import { EventCard } from "../../molecules";
import "./eventPages.scss";

const EventPages = ({ contents }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const cardPerPage = 3;
  const pagesVisited = pageNumber * cardPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const styles = {
    paginationBttns: "paginationBttns",
    pageNum: "page-num",
    prevLink: "prev-link",
    nextLink: "next-link",
    PaginationActive: "paginationActive",
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
        <Pagination
          itemPerPage={cardPerPage}
          contentLength={contents.length}
          changePage={changePage}
          styles={styles}
        />
      </div>
    </div>
  );
};

export default EventPages;
