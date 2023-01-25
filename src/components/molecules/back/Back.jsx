import React from "react";
import { IoIosArrowBack } from "react-icons/io";

import styles from "./back.module.scss";

const Back = () => {
  return (
    <div className={styles.back}>
      <IoIosArrowBack />
      <p>Back to dashboard</p>
    </div>
  );
};

export default Back;
