import React from "react";
import Back from "../../../components/molecules/back/Back";

import { TopNav } from "../../../components/organisms";
import Selector from "../../../components/molecules/selector/Selector";
import { Images } from "../../../constants";
import "./subjects.scss";
import SubjectCard from "../../../components/molecules/subjectCard/SubjectCard";

const Subjects = () => {
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
  ];
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
          {content.map((item, index) => (
            <SubjectCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
