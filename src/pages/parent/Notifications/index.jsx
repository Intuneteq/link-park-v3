import React, { useState } from 'react'
import { IoCheckmark } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'

import { useGetScreenSize } from '../../../hooks/useMediaQuery'
import { Images } from '../../../constants'
import { AccordionIcon } from '../../../components/atoms'
import { Accordion, Selector } from '../../../components/molecules'
import { Container } from '../../../components/templates'
import styles from './notifications.module.scss'

const Notifications = () => {
  const [toggle, setToggle] = useState(false)
  const { isMobile } = useGetScreenSize()
  const options = ['Latest Notification', 'All', 'Last week']
  const notifications = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
  return (
    <Container name={'Notifications'} background={'#E0E0E0'}>
      <section className={styles.notifications}>
        <div className={styles.notification_head}>
          <Selector
            selectWidth={isMobile ? '12rem' : '13.063rem'}
            width={isMobile ? '12rem' : '13.063rem'}
            height={'3rem'}
            padding={'0.875rem 1.25rem'}
            options={options}
          />
          <button type='button'>
            <IoCheckmark />
            <small>Mark all as read</small>
          </button>
        </div>
        <div className={styles.notification_cards}>
          {notifications.map((card) => (
            <Accordion key={card.id} toggle={toggle} setToggle={setToggle}>
              <div className={styles.card}>
                <div className={styles.card_img}>
                  <img src={Images.notification} alt='profile' />
                </div>
                <div className={styles.card_text}>
                  <h1>New Term Calendar for SS2 Students</h1>
                  <p>
                    According to the Approved 2022/2023 LASG School Term Dates:
                    1st Term 2022/2023 Resumes on Monday, 5th September, 2022.
                    2nd Term 2022/2023 ...
                  </p>
                  <small>Now</small>
                </div>
                <div className={styles.btns}>
                  <MdDelete />
                  <AccordionIcon toggle={toggle} />
                </div>
              </div>
            </Accordion>
          ))}
        </div>
      </section>
    </Container>
  )
}

export default Notifications
