import React from "react";
import { BsFacebook, BsSkype } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import "./footer.scss";
import Images from "../../constants/Images";

const Footer = () => {
  return (
    <div>
      <footer className="app__flex-2">
        <div className="img-size">
          <img src={Images} alt="logo" />
        </div>
        <ul>
          <p>Quick Links</p>
          <li>Home</li>
          <li>About Us</li>
          <li>Students</li>
          <li>Parents</li>
        </ul>
        <ul>
          <p>Help</p>
          <li>FAQ</li>
          <li>Contact Us</li>
          <li>Terms and Condition</li>
          <li>Privacy Policy</li>
        </ul>
        <div className="footer__icons">
          <p>Socials</p>
          <div className="icons">
            <BsFacebook />
            <AiFillTwitterCircle />
            <AiFillInstagram />
            <AiFillLinkedin />
            <BsSkype />
          </div>
        </div>
      </footer>
      <hr />
      <h6>© 2023 Link-Park. All Rights Reserved</h6>
    </div>
  );
};

export default Footer;
