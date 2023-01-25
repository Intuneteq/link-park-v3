import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const SubjectButton = ({ item }) => {
  return (
    <Link
      className="app__flex"
      style={{
        background: item.color,
        width: "38px",
        height: "30px",
        borderRadius: "8px",
      }}
    >
      <IoIosArrowForward width={"24px"} height={"24px"} color="#FFFFFF" />
    </Link>
  );
};

export default SubjectButton;
