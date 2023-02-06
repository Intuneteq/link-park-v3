import React from "react";

import {
  CalendarEvents,
  LinkParkCalendar,
  SubjectCarousel,
  Table,
} from "../../../components/organisms";
import { Container } from "../../../components/templates";
import { Images } from "../../../constants";
import "./studentdashboard.scss";

const StudentDashboard = () => {
  const events = [
    {
      date1: 2,
      date2: "jan",
      title: "Principal Football Cup",
      time: "10am",
      color: "#5792F0",
    },
    {
      date1: 23,
      date2: "jan",
      title: "Inter House Sport",
      time: "10am",
      color: "#FFB0C8",
    },
    {
      date1: 15,
      date2: "Feb",
      title: "Swimming Class",
      time: "4pm",
      color: "#B395F3",
    },
    {
      date1: 28,
      date2: "Feb",
      title: "Visitation to the Zoo",
      time: "3pm",
      color: "#E9B575",
    },
    {
      date1: 28,
      date2: "Feb",
      title: "Excursion to Aso Rock",
      time: "11am",
      color: "#E9B575",
    },
  ];

  const courses = [
    {
      img: Images.discovery,
      subject: "Geography",
      chapters: 15,
      bgColor: "#b9fcc0",
      color: "#40c85e",
    },
    {
      img: Images.science,
      subject: "Chemistry",
      chapters: 25,
      bgColor: "#c5edff",
      color: "#11a8e8",
    },
    {
      img: Images.calculator,
      subject: "Physics",
      chapters: 18,
      bgColor: "#beccff",
      color: "#4069f8",
    },
    {
      img: Images.calculator,
      subject: "Mathematics",
      chapters: 18,
      bgColor: "#beccff",
      color: "#4069f8",
    },
  ];

  const tableData = {
    head: ["Course name", "Start", "Grade"],
    body: [
      {
        bodyHead: {
          headImg: Images.heart,
          headTitle: "Biology",
          headText: "30 Lessons",
        },
        bodyItems: ["May 5", "100"],
      },
      {
        bodyHead: {
          headImg: Images.heart,
          headTitle: "Biology",
          headText: "30 Lessons",
        },
        bodyItems: ["May 5", "100"],
      },
      {
        bodyHead: {
          headImg: Images.heart,
          headTitle: "Biology",
          headText: "30 Lessons",
        },
        bodyItems: ["May 5", "100"],
      },
    ],
  };

  return (
    <Container name="Dashboard">
      <section className="studentDashboard__body app__flex-3">
        <article className="studentDashboard__body-main">
          <div className="main_progress">
            <h2>Course Progress</h2>
            <SubjectCarousel courses={courses} />
          </div>
          <div className="main_table">
            <h2>My Subjects</h2>
            <Table content={tableData} />
          </div>
        </article>
        <article className="studentDashboard__body-side">
          <LinkParkCalendar />
          <CalendarEvents events={events} />
        </article>
      </section>
    </Container>
  );
};

export default StudentDashboard;
