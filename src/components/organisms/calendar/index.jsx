import React from "react";

import "./calendar.scss";

const LinkParkCalendar = ({ showTitle, height }) => {
  return (
    <div className="dashboard-calender">
      {showTitle ? "" : <h3>Calender</h3>}
      <div style={{height}} className="calendar">okay</div>
    </div>
  );
};

export default LinkParkCalendar;
