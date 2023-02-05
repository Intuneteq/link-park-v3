import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

import styles from './atoms.module.scss'

const LinkButton = ({name}) => {
  return (
    <Link className={[`${styles.link_btn} app__flex-5`].join(' ')} to="#">
      <span>{name}</span>
      <IoIosArrowForward />
    </Link>
  );
};

export default LinkButton;
