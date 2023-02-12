import React from 'react'

import { DASHBOARD_CONTENTS } from './contents'
import {
  CalendarEvents,
  LinkParkCalendar,
  SubjectCarousel,
  Table,
} from '../../../components/organisms'
import { Container } from '../../../components/templates'
import styles from './studentdashboard.module.scss'

const StudentDashboard = () => {
  const { events, courses, tableData } = DASHBOARD_CONTENTS

  return (
    <Container name='Dashboard'>
      <section className={styles.studentDashboard}>
        <article className={styles.studentDashboard__body}>
          <div className={styles.main_progress}>
            <h2>Course Progress</h2>
            <SubjectCarousel courses={courses} />
          </div>
          <div className={styles.main_table}>
            <h2>My Subjects</h2>
            <Table content={tableData} />
          </div>
        </article>
        <article className={styles.studentDashboard__side}>
          <LinkParkCalendar />
          <CalendarEvents events={events} />
        </article>
      </section>
    </Container>
  )
}

export default StudentDashboard
