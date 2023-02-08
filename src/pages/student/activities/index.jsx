import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import { LinkParkCalendar } from '../../../components/organisms'
import { Container } from '../../../components/templates'
import { Images } from '../../../constants'
import { Pill, TableCard } from '../../../components/atoms'

import styles from './activities.module.scss'

const Activities = () => {
  const events = [{ id: 1 }, { id: 2 }, { id: 3 }]
  const leaderBoard = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
  const tableHead = ['Assignments', 'Assessments', 'Completed']
  const tableContent = [
    {
      head: {
        headText: 'Maths Algebra Equation Assignment',
        headSmall: '4th January, 2023',
      },
      grade: '7/10',
      status: 'Completed',
    },
    {
      head: {
        headText: 'English Assignment on Pronuns',
        headSmall: '4th January, 2023',
      },
      grade: '7/10',
      status: 'Pending',
    },
    {
      head: {
        headText: 'Physics Pendulum Assignment',
        headSmall: '4th January, 2023',
      },
      grade: '7/10',
      status: 'Not done',
    },
    {
      head: {
        headText: 'Periodic Table Memorization',
        headSmall: '4th January, 2023',
      },
      grade: '7/10',
      status: 'Completed',
    },
  ]

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
      <section className={[styles.activities, 'app__flex-3'].join(' ')}>
        <div className={styles.activities_main}>
          <h1 className='dashboard-subtext'>Upcoming Event</h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className={[styles.swiper_component, 'mySwiper'].join(' ')}
          >
            {events.map((event, index) => (
              <SwiperSlide key={index} className={[styles.swipes].join(' ')}>
                <div className={styles.eventCard}>
                  <div className={styles.eventCard_content}>
                    <p className='app__flex'>24th January, 2023</p>
                    <h2>Inter-school</h2>
                    <span>Competition</span>
                    <br />
                    <Link to='#'>View Full Details</Link>
                  </div>
                  <div className={[styles.eventcard_Img, 'img-size'].join(' ')}>
                    <img src={Images.eventImage} alt='events' />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.activitiesTable}>
            <h3 className='dashboard-subtext'>To Do Tasks</h3>
            <div className={styles.tableContent}>
              <div className={['app__flex', styles.tableHeader].join(' ')}>
                {tableHead.map((item, index) => (
                  <button type='button' key={index} className={styles.active}>
                    {item}
                  </button>
                ))}
              </div>
              <table>
                <tbody>
                  {tableContent.map((item, index) => (
                    <tr>
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
            <h3 className='dashboard-subtext'>Leaderboard</h3>
            <div className={styles.leaderBoardActivities}>
              {leaderBoard.map((item, index) => (
                <div
                  className={[styles.activitiesCard, 'app__flex-2'].join(' ')}
                  key={index}
                >
                  <div className={[styles.activityUser, 'app__flex'].join(' ')}>
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
