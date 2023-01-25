import React from "react";

import styles from "./selector.module.scss";

const Selector = ({ title, options, width, height, padding, selectWidth }) => {
  return (
    <div style={{ width }} className={styles.selector}>
      <p className="p-text">{title}</p>
      <select name="" id="" style={{ width: selectWidth, height, padding }}>
        {options.map((item, index) => (
          <option key={index} value="">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
