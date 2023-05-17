import React from 'react'
import { useSelector } from 'react-redux'

import { DASHBOARD_CONTENTS } from './contents'
import {
  CalendarEvents,
  LinkParkCalendar,
  SubjectCarousel,
  Table,
} from '../../../components/organisms'
import { Container } from '../../../components/templates'
import { selectCurrentUser } from '../../../features/auth/authSlice'
import styles from './studentdashboard.module.scss'

const StudentDashboard = () => {
  const { events, courses, tableData } = DASHBOARD_CONTENTS
  const fullName = useSelector(selectCurrentUser)

  const user = fullName ?? 'fullName'
  return (
    <Container name='Dashboard'>
      <section className={styles.studentDashboard}>
        <article className={styles.studentDashboard__body}>
          <div className={styles.main_progress}>
            <h2>Course Progress {user}</h2>
            <SubjectCarousel courses={courses} />
          </div>
          <div className={styles.main_table}>
            <h2>My Subjects</h2>
            <Table content={tableData} />
          </div>
        </article>
        <article className={styles.studentDashboard__side}>
          <LinkParkCalendar showTitle />
          <CalendarEvents events={events} />
        </article>
      </section>
    </Container>
  )
}

export default StudentDashboard
