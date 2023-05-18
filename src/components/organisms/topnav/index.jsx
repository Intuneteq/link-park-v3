import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { CiSearch } from 'react-icons/ci'
import { MdMenu } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { Desktop, Tablet } from '../../../hooks/useMediaQuery'
import { Icons, Images } from '../../../constants'
import { Selector } from '../../molecules'
import { SearchInput } from '../../atoms'
import {
  selectCurrentUser,
  selectCurrentUserType,
} from '../../../pages/auth/api/authSlice'
import './topnav.scss'

const TopNav = ({ name, navLinks }) => {
  const [toggleNav, setToggleNav] = useState(false)

  const fullName = useSelector(selectCurrentUser)
  const userType = useSelector(selectCurrentUserType)

  const options = ['Temitope Adekunle', 'Temitope', 'Temitope']

  let nameContent
  if (userType === 'guardian') {
    nameContent = (
      <Selector
        borderNone
        options={options}
        width={'100%'}
        height={'100%'}
        padding={'0'}
        selectWidth={'100%'}
      />
    )
  } else if (userType === 'student') {
    nameContent = <p>{fullName}</p>
  }

  return (
    <>
      <Desktop>
        <section className='dashboard__nav'>
          <h3>{name}</h3>
          <div className='dashboard__nav_search'>
            <SearchInput height={3.25} />
          </div>
          <IoMdNotificationsOutline />
          <div className='dashboard__nav_selector'>{nameContent}</div>
          <div className='dashboard__nav_user img-size'>
            <img src={Images.user} alt='user' />
          </div>
        </section>
      </Desktop>
      {/* mobile view */}
      <Tablet>
        {toggleNav && (
          <nav className='mobile_Links animate__animated animate__fadeInDown'>
            <button type='button' onClick={() => setToggleNav(!toggleNav)}>
              <img src={Icons.cut} alt='close' />
            </button>

            <div className='navLinks'>
              {navLinks.map((item) => (
                <NavLink
                  className='link'
                  activeclassname='active'
                  key={item.id}
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
        <section className='mobile'>
          <div className='aboutUser'>
            <div className='dashboard__mobile_user img-size'>
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
          <div className='menuOptions'>
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
  navLinks: PropTypes.array.isRequired,
}

export default TopNav
