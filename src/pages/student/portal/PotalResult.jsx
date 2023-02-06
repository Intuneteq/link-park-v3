import React, { useState } from 'react'
import { Container, ResultBoard } from '../../../components/templates'

const PotalResult = () => {
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