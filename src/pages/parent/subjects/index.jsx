import React, { useState } from "react";

import { Pagination } from "../../../components/atoms";
import { Selector, SubjectCard, Back } from "../../../components/molecules";
import { TopNav } from "../../../components/organisms";
import { Images } from "../../../constants";
import "./subjects.scss";

const Subjects = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const cardPerPage = 8;
  const pagesVisited = pageNumber * cardPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const options = ["SS1", "SS2", "SS3"];
  const content = [
    {
      img: Images.calculator,
      subject: "mathematics",
      chapters: 12,
      bgColor: "#FFF0E1",
      color: "#FCAB5E",
    },
    {
      img: Images.discovery,
      subject: "Physics",
      chapters: 16,
      bgColor: "#E9E3FE",
      color: "#8A70D6",
    },
    {
      img: Images.science,
      subject: "Chemistry",
      chapters: 14,
      bgColor: "#E5F3FE",
      color: "#579BE4",
    },
    {
      img: Images.science,
      subject: "Geography",
      chapters: 14,
      bgColor: "#E5F3FE",
      color: "#8C1BAB",
    },
    {
      img: Images.calculator,
      subject: "mathematics",
      chapters: 12,
      bgColor: "#FFF0E1",
      color: "#FCAB5E",
    },
    {
      img: Images.discovery,
      subject: "Physics",
      chapters: 16,
      bgColor: "#E9E3FE",
      color: "#8A70D6",
    },
    {
      img: Images.science,
      subject: "Chemistry",
      chapters: 14,
      bgColor: "#E5F3FE",
      color: "#579BE4",
    },
    {
      img: Images.science,
      subject: "Geography",
      chapters: 14,
      bgColor: "#E5F3FE",
      color: "#8C1BAB",
    },
    {
      img: Images.calculator,
      subject: "mathematics",
      chapters: 12,
      bgColor: "#FFF0E1",
      color: "#FCAB5E",
    },
    {
      img: Images.discovery,
      subject: "Physics",
      chapters: 16,
      bgColor: "#E9E3FE",
      color: "#8A70D6",
    },
    {
      img: Images.science,
      subject: "Chemistry",
      chapters: 14,
      bgColor: "#E5F3FE",
      color: "#579BE4",
    },
    {
      img: Images.science,
      subject: "Geography",
      chapters: 14,
      bgColor: "#E5F3FE",
      color: "#8C1BAB",
    },
    {
      img: Images.calculator,
      subject: "mathematics",
      chapters: 12,
      bgColor: "#FFF0E1",
      color: "#FCAB5E",
    },
    {
      img: Images.discovery,
      subject: "Physics",
      chapters: 16,
      bgColor: "#E9E3FE",
      color: "#8A70D6",
    },
    {
      img: Images.science,
      subject: "Chemistry",
      chapters: 14,
      bgColor: "#E5F3FE",
      color: "#579BE4",
    },
    {
      img: Images.science,
      subject: "Geography",
      chapters: 14,
      bgColor: "#E5F3FE",
      color: "#8C1BAB",
    },
  ];

  const style = {
    width: '214px'
  }
  return (
    <div className="subjects">
      <TopNav name={"Subjects"} />
      <div className="subjects__body">
        <Back />
        <div className="subjects__body-head app__flex-2">
          <h3 className="dashboard-subtext">Subjects</h3>
          <Selector
            title={"Sort by Class"}
            options={options}
            width={"38%"}
            height={"48px"}
            padding={"14px 20px"}
            selectWidth={"209px"}
          />
        </div>
        <div className="subjects__body-cards app__flex-2">
          {content
            .slice(pagesVisited, pagesVisited + cardPerPage)
            .map((item, index) => (
              <SubjectCard key={index} item={item} style={style} />
            ))}
        </div>
        <Pagination
          itemPerPage={cardPerPage}
          contentLength={content.length}
          changePage={changePage}
        />
      </div>
    </div>
  );
};

export default Subjects;
