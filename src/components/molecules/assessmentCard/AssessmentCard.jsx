import React from "react";
import { IoIosArrowForward } from "react-icons/io";

import style from './assessmentcard.module.scss'

const AssessmentCard = ({color, color2, head, subText}) => {
  return (
    <div
      className={[style.aCard, "app__flex-5"].join(' ')}
      style={{ backgroundColor: color }}
    >
      <div>
        <h6>{head}</h6>
        <p>{subText}</p>
      </div>
      <span style={{ backgroundColor: color2 }} className="app__flex">
        Details <IoIosArrowForward />
      </span>
    </div>
  );
};

export default AssessmentCard;
