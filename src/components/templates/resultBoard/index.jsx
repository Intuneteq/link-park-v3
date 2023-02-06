import React from "react";
import { Pagination } from "../../atoms";
import { Back, Selector } from "../../molecules";

import "./resultbody.scss";

const ResultBoard = ({
  selectors,
  result,
  cardPerPage,
  pagesVisited,
  changePage,
  backbutton
}) => {
  return (
    <section className="results__body">
      <div className="results__body-header app__flex-2">
        {backbutton && <Back/> }
        <h3 className="p-text">
          Overall Position <span className="dashboard-subtext">2nd</span>
        </h3>
      </div>
      <div className="results__body-selctor app__flex-2">
        {selectors.map((item, index) => (
          <Selector
            key={index}
            title={item.title}
            options={item.options}
            width="33%"
            selectWidth="13.063rem"
            height="3rem"
            padding="0.875rem 1.25rem"
          />
        ))}
      </div>
      <div className="results__body-result">
        <table className="result-table">
          <thead>
            <tr>
              <th className="result-first">Subject</th>
              <th>Grade</th>
              <th>Remark</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {result
              .slice(pagesVisited, pagesVisited + cardPerPage)
              .map((item, index) => (
                <tr key={index} className="items">
                  <td className="result-first">{item.subject}</td>
                  <td>100</td>
                  <td>{item.Remark}</td>
                  <td className={item.score >= 65 ? "green" : "yellow"}>
                    {item.score}/100
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <table className="result-conclusion">
          <tr>
            <th className="result-first">Total Score</th>
            <th>100</th>
            <th>Excellent</th>
            <th className="green">98/100</th>
          </tr>
        </table>
        <Pagination
          itemPerPage={cardPerPage}
          contentLength={result.length}
          changePage={changePage}
        />
      </div>
    </section>
  );
};

export default ResultBoard;
