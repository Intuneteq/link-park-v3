import React from 'react'

import { Images } from '../../../constants'
import styles from './messenger.module.scss'

const MessengerCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <img src={Images.notification} alt='user' />
      </div>
      <div className={styles.card_text}>
        <h6>
          Ibrahim Isah<span className={styles.star}>*</span>
        </h6>
        <p>We want ot inform you that the students...</p>
      </div>
    </div>
  )
}

export default MessengerCard
