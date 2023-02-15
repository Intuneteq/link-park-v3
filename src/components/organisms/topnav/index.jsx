import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { CiSearch } from 'react-icons/ci'
import { MdMenu } from 'react-icons/md'

import { Desktop, Tablet } from '../../../hooks/useMediaQuery'
import { Icons, Images } from '../../../constants'
import { Selector } from '../../molecules'
import styles from './topnav.module.scss'
import { SearchInput } from '../../atoms'
import { NavLink } from 'react-router-dom'

const TopNav = ({ name }) => {
  const [toggleNav, setToggleNav] = useState(false)
  const options = ['Temitope Adekunle', 'Temitope', 'Temitope']

  const navLinks = [
    {
      id: 1,
      path: '/student/dashboard',
      name: 'Dashboard',
    },
    {
      id: 2,
      path: '/student/library',
      name: 'My Library',
    },
    {
      id: 3,
      path: '/student/activities',
      name: 'Activities',
    },
    {
      id: 4,
      path: '/student/calendar',
      name: 'link park calendar',
    },
    {
      id: 5,
      path: '/student/portal',
      name: 'Portal',
    },
  ]

  return (
    <>
      <Desktop>
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
      </Desktop>
      {/* mobile view */}
      <Tablet>
        {toggleNav && (
          <nav
            className={[
              styles.mobile_Links,
              'animate__animated',
              'animate__fadeInDown',
            ].join(' ')}
          >
            <button type='button' onClick={() => setToggleNav(!toggleNav)}>
              <img src={Icons.cut} alt='close' />
            </button>

            <div className={styles.navLinks}>
              {navLinks.map((item) => (
                <NavLink
                  className={styles.link}
                  activeclassname={styles.activeNav}
                  key={item.id}
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
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
            <MdMenu onClick={() => setToggleNav(!toggleNav)} />
          </div>
        </section>
      </Tablet>
    </>
  )
}

TopNav.propTypes = {
  name: PropTypes.string.isRequired,
}

export default TopNav
