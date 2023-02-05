import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { TopNav } from "../../../components/organisms";

import "./events.scss";

const Events = () => {
  const eventLink = [
    {
      name: "New",
      path: "/username/events/new",
    },
    {
      name: "Past Events",
      path: "/username/events/past-events",
    },
    {
      name: "All",
      path: "/username/events/all",
    },
  ];

  return (
    <div className="events">
      <TopNav name={"Upcoming Events"} />
      <section className="events__body">
        <div className="app__flex-3 events__body-head">
          {eventLink.map((item, index) => (
            <NavLink key={index} className='event-links' activeclassname="active" to={item.path}>
              {item.name}
            </NavLink>
          ))}
        </div>
        <Outlet />
      </section>
    </div>
  );
};

export default Events;
