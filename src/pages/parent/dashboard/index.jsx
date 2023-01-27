import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TopNav } from "../../../components/organisms";

import "./dashboard.scss";

const Dashboard = () => {
  const cards = [
    {
      head: "Overall Position",
      subText: "2nd",
      color: "#8A70D6",
      color2: "#BDA6FF",
    },
    {
      head: "Total Subjects",
      subText: "12",
      color: "#FCAB5E",
      color2: "#FFCFA2",
    },
  ];

  const assignments = [
    {
      title: "Fun Fact About Australia",
      date: "Tue 12, 2022",
      grade: "0/10",
      status: "Pending",
    },
    {
      title: "Verbal Abtitude",
      date: "Tue 12, 2022",
      grade: "8/10",
      status: "Completed",
    },
    {
      title: "Physics Assignment",
      date: "Tue 12, 2022",
      grade: "9/10",
      status: "Completed",
    },
    {
      title: "Technical Drawing",
      date: "Tue 12, 2022",
      grade: "0/10",
      status: "Completed",
    },
  ];

  const events = [
    {
      date1: 2,
      date2: "jan",
      title: "Principal Football Cup",
      time: "10am",
      color: '#5792F0'
    },
    {
      date1: 23,
      date2: "jan",
      title: "Inter House Sport",
      time: "10am",
      color: '#FFB0C8'
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

  return (
    <div className="dashboard">
      <TopNav name="Dashboard" />

      <section className="dashboard__body app__flex-3">
        <section className="dashboard__body-main">
          <div className="assessment">
            <div className="app__flex-2 assessment-head">
              <h1>Assessments</h1>
              <h2>SS3c</h2>
            </div>
            <div className="app__flex-2 assessment-card">
              {cards.map((item, index) => (
                <div
                  key={index}
                  className="aCard app__flex-5"
                  style={{ backgroundColor: item.color }}
                >
                  <div>
                    <h6>{item.head}</h6>
                    <p>{item.subText}</p>
                  </div>
                  <span
                    style={{ backgroundColor: item.color2 }}
                    className="app__flex"
                  >
                    Details <IoIosArrowForward />
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="assignment">
            <div className="app__flex-2 assignment-head">
              <h3>Students Assignments</h3>
              <button className="btn-tertiary">view all</button>
            </div>
            <table className="assignment-table">
              <tr>
                <th className="title">Title</th>
                <th>Grade</th>
                <th>Status</th>
              </tr>
              {assignments.map((item, index) => (
                <tr key={index}>
                  <td className="title">
                    <span className="title-head">{item.title}</span> <br />
                    <span className="title-date">{item.date}</span>
                  </td>
                  <td className="table-grade">{item.grade}</td>
                  <td className={item.status.toLowerCase()}>{item.status}</td>
                </tr>
              ))}
            </table>
          </div>
        </section>
        <section className="dashboard__body-side">
          <div className="dashboard-calender">
            <h3>Calender</h3>
            <div className="calendar">okay</div>
          </div>
          <div className="dashboard-events">
            <h3 className="dashboard-subtext">Upcoming Events</h3>
            {events.map((item, index) => (
              <div key={index} className="event-card app__flex">
                <div
                  style={{ backgroundColor: item.color }}
                  className="event-date app__flex"
                >
                  {item.date1}
                  <br /> {item.date2}
                </div>
                <div className="event-info">
                  <p>{item.title}</p>
                  <span>Time: {item.time}</span>
                </div>
              </div>
            ))}
            <div className="app__flex">
              <button className="btn-secondary">View all</button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
