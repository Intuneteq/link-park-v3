import React from 'react'
import { Link } from 'react-router-dom'

import { STUDENT_ACTIVITIES } from './contents'
import { Carousel, LinkParkCalendar } from '../../../components/organisms'
import { Container } from '../../../components/templates'
import { Images } from '../../../constants'
import { Pill, TableCard } from '../../../components/atoms'

import styles from './activities.module.scss'

const Activities = () => {
  const { events, leaderBoard, tableHead, tableContent } = STUDENT_ACTIVITIES

  const toggleStatusClass = (item) => {
    if (item === 'completed') {
      return styles.green
    } else if (item === 'pending') {
      return styles.pending
    } else {
      return styles.red
    }
  }
  return (
    <Container name={'Activities'}>
      <section className={styles.activities}>
        <div className={styles.activities_main}>
          <h3>Upcoming Event</h3>
          <Carousel
            events={events}
            modules='pagination'
            swiperValues={{ slides: 1, space: 10 }}
          >
            <div className={styles.eventCard}>
              <div className={styles.eventCard_content}>
                <p>24th January, 2023</p>
                <h2>Inter-school</h2>
                <span>Competition</span>
                <br />
                <Link to='#'>View Full Details</Link>
              </div>
              <div className={[styles.eventcard_Img, 'img-size'].join(' ')}>
                <img src={Images.eventImage} alt='events' />
              </div>
            </div>
          </Carousel>
          <div className={styles.activitiesTable}>
            <h3>To Do Tasks</h3>
            <div className={styles.tableContent}>
              <div className={styles.tableHeader}>
                {tableHead.map((item, index) => (
                  <button type='button' key={index} className={styles.active}>
                    {item}
                  </button>
                ))}
              </div>
              <table>
                <tbody>
                  {tableContent.map((item, index) => (
                    <tr key={index}>
                      <TableCard>
                        <p>{item.head.headText}</p>
                        <small>{item.head.headSmall}</small>
                      </TableCard>
                      <TableCard>
                        <Pill
                          text={item.grade}
                          styling={{
                            background: '#b3ece5',
                            width: '72px',
                            height: '24px',
                            color: '#00915E',
                          }}
                        />
                      </TableCard>
                      <TableCard>
                        <span
                          className={toggleStatusClass(
                            item.status.toLocaleLowerCase()
                          )}
                        >
                          {item.status}
                        </span>
                      </TableCard>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className='btn-tertiary' type='button'>
                View All Tasks
              </button>
            </div>
          </div>
        </div>
        <div className={styles.activities_side}>
          <LinkParkCalendar height='288.6px' showTitle />
          <article className={styles.leaderBoard}>
            <h3>Leaderboard</h3>
            <div className={styles.leaderBoardActivities}>
              {leaderBoard.map((item) => (
                <div className={styles.activitiesCard} key={item.id}>
                  <div className={styles.activityUser}>
                    <div className={[styles.activityImg, 'img-size'].join(' ')}>
                      <img src={Images.user} alt='user' />
                    </div>
                    <div>
                      <p>Moses Isaac</p>
                      <Pill
                        text={'SS1 B'}
                        styling={{
                          background: '#b3ece5',
                          width: '57px',
                          height: '18px',
                          color: '#10ad76',
                        }}
                      />
                    </div>
                  </div>
                  <p>1st Position</p>
                </div>
              ))}
              <button className='btn-tertiary' type='button'>
                view all
              </button>
            </div>
          </article>
        </div>
      </section>
    </Container>
  )
}

export default Activities
