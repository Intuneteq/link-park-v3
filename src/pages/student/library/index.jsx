import React from "react";
import { TopNav } from "../../../components/organisms";
import { Container } from "../../../components/templates";

import "./library.scss";

const Library = () => {
  const libraryItems = [
    {
      subject: "Mathematics",
      teacher: "Mr James Isah",
      class: "SS2",
    },
    {
      subject: "Mathematics",
      teacher: "Mr James Isah",
      class: "SS2",
    },
    {
      subject: "Mathematics",
      teacher: "Mr James Isah",
      class: "SS2",
    },
    {
      subject: "Mathematics",
      teacher: "Mr James Isah",
      class: "SS2",
    },
    {
      subject: "Mathematics",
      teacher: "Mr James Isah",
      class: "SS2",
    },
    {
      subject: "Mathematics",
      teacher: "Mr James Isah",
      class: "SS2",
    },
    {
      subject: "Mathematics",
      teacher: "Mr James Isah",
      class: "SS2",
    },
    {
      subject: "Mathematics",
      teacher: "Mr James Isah",
      class: "SS2",
    },
    {
      subject: "Mathematics",
      teacher: "Mr James Isah",
      class: "SS2",
    },
    {
      subject: "Mathematics",
      teacher: "Mr James Isah",
      class: "SS2",
    },
  ];
  return (
    <Container>
      <div className="library">
        <TopNav name="Dashboard" />

        <section className="library__body">
          <div className="library__body-cards">
            {libraryItems.slice(0, 7).map((item, index) => (
              <div key={index} className="library-card">
                <div className="subject-img img-size">
                  <img src="" alt="subject" />
                </div>
                <h6>{item.subject}</h6>
                <p>Teacher: {item.teacher}</p>
                <span>Class: {item.class}</span>
              </div>
            ))}
          </div>
          <div className="library__body-btn app__flex">
            <button className="btn-secondary">Load more</button>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Library;
