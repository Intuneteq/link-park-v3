import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useGetScreenSize } from '../../../hooks/useMediaQuery'
import { Buttons } from '../../../components/atoms'
import { AssignmentCard } from '../../../components/molecules'
import {
  AssessmentCards,
  CalendarEvents,
  Carousel,
  LinkParkCalendar,
  Table,
} from '../../../components/organisms'
import { Container } from '../../../components/templates'
import { DASHBOARD_CONTENT } from './contents'
import styles from './dashboard.module.scss'
import { useGetStudentsByGuardianIdQuery } from '../api/guardianApi'
import { setGuardianStudents } from '../api/guardianSlice'
import { selectCurrentUserId } from '../../auth/api/authSlice'

const Dashboard = () => {
  const dispatch = useDispatch()

  const { isMobile } = useGetScreenSize()
  const { cards, tableData, events } = DASHBOARD_CONTENT

  const guardianId = useSelector(selectCurrentUserId)

  const { data, isSuccess } = useGetStudentsByGuardianIdQuery(guardianId)

  if (isSuccess) {
    dispatch(setGuardianStudents(data))
  }

  return (
    <Container name={'Dashboard'}>
      <section className={styles.dashboard}>
        <section className={styles.dashboard__main}>
          <div className={styles.assessment}>
            <div className={styles.assessment_head}>
              <h4>{isMobile ? 'Dashboard' : 'Assessments'}</h4>
              <h4>SS3C</h4>
            </div>
            <AssessmentCards cards={cards} />
          </div>
          <div className={styles.assignment}>
            <div className={styles.assignment_head}>
              <h3>Students Assignments</h3>
              {!isMobile ? (
                <Buttons
                  type={'button'}
                  text={'View All'}
                  classType={'tertiary'}
                  width={8}
                  height={2.5}
                  // color={'#474646'}
                />
              ) : (
                ''
              )}
            </div>
            {isMobile ? (
              <Carousel
                events={events}
                modules='pagination'
                swiperValues={{ slides: 1, space: 10 }}
              >
                <AssignmentCard />
              </Carousel>
            ) : (
              <Table content={tableData} />
            )}
          </div>
        </section>
        <section className={styles.dashboard__side}>
          <LinkParkCalendar />
          <CalendarEvents events={events} />
        </section>
      </section>
    </Container>
  )
}

export default Dashboard
