import React from "react";
import Selector from "../../../components/molecules/selector/Selector";
import DashboardNav from "../../../components/organisms/DashboardNav";

import "./results.scss";

const Results = () => {
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
      <DashboardNav name="Results" />
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
            <tr>
              <th className="result-first">Subject</th>
              <th>Grade</th>
              <th>Remark</th>
              <th>Score</th>
            </tr>
            {result.map((item, index) => (
              <tr key={index} className='items'>
                <td className="result-first">{item.subject}</td>
                <td>100</td>
                <td>{item.Remark}</td>
                <td className={item.score >= 65 ? 'green' : 'yellow'}>{item.score}/100</td>
              </tr>
            ))}
          </table>
          <table className="result-conclusion">
            <tr>
                <th className="result-first">Total Score</th>
                <th>100</th>
                <th>Excellent</th>
                <th className="green">98/100</th>
            </tr>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Results;
