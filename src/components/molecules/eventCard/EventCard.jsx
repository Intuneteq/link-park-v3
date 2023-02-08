import React, { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

import styles from './eventcard.module.scss'

const EventCard = ({ content }) => {
  const [dropDown, setDropDown] = useState(false)

  return (
    <div className={styles.eventCard}>
      <div className={styles.cardDate}>
        <p className='dashboard-subtext'>{content.day}</p>
        <span>{content.month}</span>
      </div>
      <div className={styles.cardBody}>
        <div>
          <h5>{content.title}</h5>
          <p className='p-text-2'>
            {!dropDown
              ? content.body.substring(0, 132).trimEnd() + '...'
              : content.body}
          </p>
          <h6>{!dropDown ? '' : 'Signed: Management'}</h6>
        </div>
        {!dropDown ? (
          <IoIosArrowDown onClick={() => setDropDown(!dropDown)} />
        ) : (
          <IoIosArrowUp onClick={() => setDropDown(!dropDown)} />
        )}
      </div>
    </div>
  )
}

export default EventCard
