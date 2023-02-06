import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

import styles from './atoms.module.scss'

const LinkButton = ({name, path}) => {
  return (
    <Link className={[`${styles.link_btn} app__flex-5`].join(' ')} to={path}>
      <span>{name}</span>
      <IoIosArrowForward />
    </Link>
  );
};

export default LinkButton;
