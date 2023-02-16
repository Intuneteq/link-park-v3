import React from 'react'

import { useGetScreenSize } from '../../../hooks/useMediaQuery'
import { PORTAL_CONTENTS } from './contents'
import { LinkButton } from '../../../components/atoms'
import { SubjectCard } from '../../../components/molecules'
import {
  AssessmentCards,
  CalendarEvents,
  LinkParkCalendar,
} from '../../../components/organisms'
import { Container } from '../../../components/templates'
import styles from './portal.module.scss'

const Portal = () => {
  const { cards, events, timeTable, content } = PORTAL_CONTENTS
  const { isMobile } = useGetScreenSize()

  return (
    <Container name='Portal'>
      <section className={styles.portal__body}>
        <article className={styles.portal__body_main}>
          <AssessmentCards cards={cards} />
          <div className={styles.time_table}>
            <h3>Time Table</h3>
            <div className={styles.table_body}>
              <span>Monday 2nd, 2022</span>
              <div className={styles.body_schedule}>
                {timeTable.map((item, index) => (
                  <div key={index}>
                    <p>{item.subject}</p>
                    <span>{item.time}</span>
                  </div>
                ))}
              </div>
              <LinkButton path='#' name={'View full timetable'} />
            </div>
          </div>
          <div className={styles.portal_materials}>
            <div className={styles.materials}>
              <h3>Materials</h3>
              <LinkButton
                name={'View all  materials'}
                path={'/student/portal/materials'}
              />
            </div>
            <div className={styles.subject_material}>
              {content.slice(0, 3).map((item, index) => (
                <SubjectCard
                  key={index}
                  item={item}
                  style={{ width: isMobile ? '10.5rem' : '13.375rem' }}
                />
              ))}
            </div>
          </div>
        </article>
        <article className={styles.portal__body_side}>
          <LinkParkCalendar />
          <CalendarEvents events={events} />
        </article>
      </section>
    </Container>
  )
}

export default Portal
