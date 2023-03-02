import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import { TbLogout } from 'react-icons/tb'
import { AiOutlineSetting } from 'react-icons/ai'

import { Images } from '../../../constants'

import './sidebar.scss'

const Sidebar = ({ sideLinks }) => {
  return (
    <nav className='sidebar'>
      <Link to={'/'} className='sidebar__logo img-size'>
        <img src={Images.logo} alt='logo' />
      </Link>

      <div className='sidebar__links'>
        <div>
          {sideLinks.map((item) => (
            <NavLink
              to={item.path}
              key={item.id}
              className='app__flex-3'
              activeclassname='active'
            >
              <span>{item.icon}</span>
              <p className='p-text'>{item.name}</p>
            </NavLink>
          ))}
        </div>

        <div>
          <NavLink
            to={'/account/settings'}
            activeclassname='active'
            className='app__flex-3'
          >
            <span>
              <AiOutlineSetting />
            </span>
            <p className='p-text'>settings</p>
          </NavLink>
          <NavLink to={'/username/signout'} className='app__flex-3 sign'>
            <span>
              <TbLogout />
            </span>
            <p className='p-text'>sign out</p>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

Sidebar.propTypes = {
  sideLinks: PropTypes.any,
}

export default Sidebar
