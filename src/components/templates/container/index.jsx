import React from "react";
import { TopNav } from "../../organisms";

import styles from "./container.module.scss";

const Container = ({ children, name }) => {
  return (
    <div className={styles.container}>
      <TopNav name={name} />
      <section className={styles.containerBody}>{children}</section>
    </div>
  );
};

export default Container;
