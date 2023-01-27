import React, { useState } from "react";
import { Pagination } from "../../../components/atoms";

import { Selector } from "../../../components/molecules";
import { TopNav } from "../../../components/organisms";
import "./results.scss";

const Results = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const cardPerPage = 7;
  const pagesVisited = pageNumber * cardPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const selectors = [
    {
      title: "Result type",
      options: ["Exam Result", "Test Result", "Assignment scores"],
    },
    {
      title: "Sort by",
      options: ["First Term", "Second Term", "Third Term"],
    },
  ];

  const result = [
    {
      subject: "English Language",
      Remark: "Good",
      score: 70,
    },
    {
      subject: "Mathematics",
      Remark: "Very Good",
      score: 81,
    },
    {
      subject: "Social Studies",
      Remark: "Excellent",
      score: 98,
    },
    {
      subject: "Physics",
      Remark: "Good",
      score: 65,
    },
    {
      subject: "Chemistry",
      Remark: "Good",
      score: 78,
    },
    {
      subject: "Information Techology",
      Remark: "Excellent",
      score: 99,
    },
    {
      subject: "Biology",
      Remark: "Pass",
      score: 45,
    },
  ];
  return (
    <div className="results">
      <TopNav name="Results" />
      <section className="results__body">
        <h3 className="p-text">
          Overall Position <span className="dashboard-subtext">2nd</span>
        </h3>
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
            {/* <tbody> */}
            <tr>
              <th className="result-first">Subject</th>
              <th>Grade</th>
              <th>Remark</th>
              <th>Score</th>
            </tr>
            {result.slice(pagesVisited, pagesVisited + cardPerPage).map((item, index) => (
              // <tbody key={index}>
              <tr className="items">
                <td className="result-first">{item.subject}</td>
                <td>100</td>
                <td>{item.Remark}</td>
                <td className={item.score >= 65 ? "green" : "yellow"}>
                  {item.score}/100
                </td>
              </tr>
              // </tbody>
            ))}
            {/* </tbody> */}
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
    </div>
  );
};

export default Results;
