import React from 'react'
import PropTypes from 'prop-types'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { CiSearch } from 'react-icons/ci'
import { MdMenu } from 'react-icons/md'

import { Images } from '../../../constants'
import { Selector } from '../../molecules'
import styles from './topnav.module.scss'
import { SearchInput } from '../../atoms'

const TopNav = ({ name }) => {
  const options = ['Temitope Adekunle', 'Temitope', 'Temitope']
  return (
    <>
      <section className={styles.dashboard__nav}>
        <h3>{name}</h3>
        <div className={styles.dashboard__nav_search}>
          <SearchInput height={3.25} />
        </div>
        <IoMdNotificationsOutline />
        <div className={styles.dashboard__nav_selector}>
          <Selector
            borderNone
            options={options}
            width={'100%'}
            height={'100%'}
            padding={'0'}
            selectWidth={'100%'}
          />
        </div>
        <div className={[styles.dashboard__nav_user, 'img-size'].join(' ')}>
          <img src={Images.user} alt='user' />
        </div>
      </section>
      {/* mobile view */}
      <section className={styles.mobile}>
        <div className={styles.aboutUser}>
          <div
            className={[styles.dashboard__mobile_user, 'img-size'].join(' ')}
          >
            <img src={Images.user} alt='user' />
          </div>
          <Selector
            borderNone
            options={options}
            width={'80%'}
            height={'100%'}
            padding={'0'}
            selectWidth={'100%'}
          />
        </div>
        <div className={styles.menuOptions}>
          <CiSearch />
          <MdMenu />
        </div>
      </section>
    </>
  )
}

TopNav.propTypes = {
  name: PropTypes.string.isRequired,
}

export default TopNav
