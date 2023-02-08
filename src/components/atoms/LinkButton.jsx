import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

import styles from './atoms.module.scss'

const LinkButton = ({ name, path, button, btnItems, back }) => {
  return (
    <>
      {button ? (
        <button className={styles.actionBtn}>
          {back ? <IoIosArrowBack /> : <img src={btnItems.icon} alt='icon' />}
          <p>{btnItems.name}</p>
        </button>
      ) : (
        <Link
          className={[`${styles.link_btn} app__flex-5`].join(' ')}
          to={path}
        >
          <span>{name}</span>
          <IoIosArrowForward />
        </Link>
      )}
    </>
  )
}

export default LinkButton
