import React from "react";

import "./UserSelect.scss";
const UserSelect = () => {
  return (
    <div className="UserSelect column-flex">
      <h1>Select User Type</h1>
      <p>Please select the option that best describes you</p>
      <section className="app__flex UserSelect__container">
        <div className="UserSelect__container-inner">
          <div className="img-size">
            <img
              src="https://res.cloudinary.com/dxje0rp9f/image/upload/v1673601432/Link%20Park/undraw_pic_profile_re_7g2h_1_lraa9b.png"
              alt=""
            />  
          </div>
          <p>I am a Parent</p>
        </div>
        <div className="UserSelect__container-inner">
          <div className="img-size">
            <img
              src="https://res.cloudinary.com/dxje0rp9f/image/upload/v1673601432/Link%20Park/274_manager_outline_jbe8zx.png"
              alt=""
            />
          </div>
          <p>I am a Student</p>
        </div>
      </section>
      <button className="btn-primary"> Next </button>
    </div>
  );
};

export default UserSelect;
