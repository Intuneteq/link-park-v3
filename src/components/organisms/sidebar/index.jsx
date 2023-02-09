import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { TbLogout } from 'react-icons/tb'
import { AiOutlineSetting } from 'react-icons/ai'

import { Images } from '../../../constants'

import './sidebar.scss'

const Sidebar = ({ sideLinks }) => {
  return (
    <nav className='sidebar'>
      <div className='sidebar__logo img-size'>
        <img src={Images.logo} alt='logo' />
      </div>

      <div className='sidebar__links'>
        <div>
          {sideLinks.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className='app__flex-3'
              activeclassname='active'
            >
              <span>{item.icon}</span>
              <p className='p-text'>{item.name}</p>
            </NavLink>
          ))}
        </div>

        <div>
          <NavLink to={'/username/settings'} className='app__flex-3'>
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
  sideLinks: PropTypes.arrayOf([
    PropTypes.objectOf(PropTypes.string.isRequired),
  ]),
}

export default Sidebar
