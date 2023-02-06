import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import styles from "./back.module.scss";

const Back = () => {
  const navigate = useNavigate()
  return (
    <button onClick={()=>navigate(-1)} className={styles.back}>
      <IoIosArrowBack />
      <p>Back to dashboard</p>
    </button>
  );
};

export default Back;
