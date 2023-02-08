import React from "react";

import styles from "./atoms.module.scss";

const TableCard = ({children}) => {
  return (
      <td className={styles.tableData}>
        {children}
      </td>
  );
};

export default TableCard;
