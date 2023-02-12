import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './eventcard.module.scss'
import { AccordionIcon } from '../../atoms'

const EventCard = ({ content }) => {
  const [dropDown, setDropDown] = useState(false)

  return (
    <div className={styles.eventCard}>
      <div className={styles.cardDate}>
        <p className='dashboard-subtext'>{content.day}</p>
        <span>{content.month}</span>
      </div>
      <button
        onClick={() => setDropDown(!dropDown)}
        className={styles.cardBody}
      >
        <div>
          <h5>{content.title}</h5>
          <p className='p-text-2'>
            {!dropDown
              ? content.body.substring(0, 132).trimEnd() + '...'
              : content.body}
          </p>
          <h6>{!dropDown ? '' : 'Signed: Management'}</h6>
        </div>
        <AccordionIcon toggle={dropDown} />
      </button>
    </div>
  )
}

EventCard.propTypes = {
  content: PropTypes.any,
}

export default EventCard
