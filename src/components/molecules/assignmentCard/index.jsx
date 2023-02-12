import React from 'react'

import styles from './assignmentCard.module.scss'

const AssignmentCard = () => {
  return (
    <div className={styles.assignmentCard}>
      <section className={styles.cardTop}>
        <span>Title: </span>
        <div>
          <p>Fun Fact About Australia</p>
          <small>Tue 12, 2022</small>
        </div>
      </section>
      <section className={styles.cardBottom}>
        <div className={styles.bottom}>
          <p>Grade:</p>
          <span>0/10</span>
        </div>

        <div className={styles.bottom}>
          <p>Status:</p>
          <small>Pending</small>
        </div>
      </section>
    </div>
  )
}

export default AssignmentCard
