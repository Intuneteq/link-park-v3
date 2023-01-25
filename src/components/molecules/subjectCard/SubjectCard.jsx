import React from "react";

import styles from "./subjectcard.module.scss";
import SubjectButton from "../../atoms/SubjectButton";

const SubjectCard = ({item}) => {
  return (
    <div
      style={{ background: item.bgColor }}
      className={styles.subjectCard}
    >
      <div style={{ background: item.color }} className={styles.cardImage}>
        <img src={item.img} alt="subject" />
      </div>
      <p>{item.subject}</p>
      <div className={styles.cardFooter}>
        <span>{item.chapters} Chapters</span>
        <SubjectButton item={item} />
      </div>
    </div>
  );
};

export default SubjectCard;
