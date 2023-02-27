import React from 'react'
import { TiMicrophone } from 'react-icons/ti'
import { BsImage } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'

import { Images } from '../../../constants'
import styles from './messenger.module.scss'

const index = () => {
  return (
    <div className={styles.messengerCard}>
      <div className={styles.cardHead}>
        <div className={styles.messenger_fluid}>
          <div className={styles.messenger_imgHead}>
            <img src={Images.notification} alt='user' />
          </div>
          <p>Cynthia James</p>
        </div>

        <small>Report?</small>
      </div>

      <div className={styles.message_container}>
        <div className={styles.user}>
          <div className={styles.user_img}>
            <img src={Images.notification} alt='' />
          </div>
          <div className={styles.user_message}>
            <p>Hello Mrs, Jummai</p>
            <p>Hope you and your family are doing great?</p>
          </div>
        </div>

        <div className={styles.messenger}>
          <div className={styles.messenger_message}>
            <p>Hello Mrs, Cynthia</p>
            <p>Yes we are doing great</p>
          </div>
          <div className={styles.messenger_img}>
            <img src={Images.notification} alt='messenger' />
          </div>
        </div>

        <div className={styles.user}>
          <div className={styles.user_img}>
            <img src={Images.notification} alt='' />
          </div>
          <div className={styles.user_message}>
            <p>Hello Mrs, Jummai</p>
            <p>Hope you and your family are doing great?</p>
          </div>
        </div>

        <div className={styles.messenger}>
          <div className={styles.messenger_message}>
            <p>...</p>
          </div>
          <div className={styles.messenger_img}>
            <img src={Images.notification} alt='messenger' />
          </div>
        </div>
      </div>
      <div className={styles.inputBox}>
        <input type='text' placeholder='Type a message' />
        <div className={styles.inputIcons}>
          <TiMicrophone />
          <BsImage />
          <button type='submit'>
            <span>Send</span>
            <FiSend />
          </button>
        </div>
      </div>
    </div>
  )
}

export default index
