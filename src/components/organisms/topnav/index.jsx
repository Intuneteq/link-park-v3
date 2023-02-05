import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Images } from "../../../constants";
import { Selector } from "../../molecules";

import "./topnav.scss";

const TopNav = ({ name }) => {
  const options = ["Temitope Adekunle", "Temitope", "Temitope"];
  return (
    <section className="dashboard__nav app__flex-2">
      <h3>{name}</h3>
      <div className="dashboard__nav-search">
        <input type="search" placeholder="Search" />
        <CiSearch />
      </div>
      <IoMdNotificationsOutline />
      <div className="dashboard__nav-selector">
        <Selector
          borderNone
          options={options}
          width={"100%"}
          height={"100%"}
          padding={"0"}
          selectWidth={"100%"}
        />
      </div>
      <div className="dashboard__nav-user img-size">
        <img src={Images.user} alt="user" />
      </div>
    </section>
  );
};

export default TopNav;
