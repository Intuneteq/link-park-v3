import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { TbLogout } from 'react-icons/tb'
import { AiOutlineSetting } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'

import { Images } from '../../../constants'
import {
  selectCurrentUserId,
  selectCurrentUserType,
  logOut,
} from '../../../pages/auth/api/authSlice'
import { useLogoutMutation } from '../../../pages/auth/api/authApi'
import { apiSlice } from '../../../app/api/apiSlice'

import './sidebar.scss'

const Sidebar = ({ sideLinks }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const id = useSelector(selectCurrentUserId)
  const user = useSelector(selectCurrentUserType)
  const [logout] = useLogoutMutation()

  const handleLogout = async () => {
    try {
      await dispatch(logout)
    } catch (error) {
      console.error(error)
      toast.error('Logout Failed')
    }
    dispatch(apiSlice.util.resetApiState())
    dispatch(logOut())
    navigate('/user')
  }

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
              end
            >
              <span>{item.icon}</span>
              <p className='p-text'>{item.name}</p>
            </NavLink>
          ))}
        </div>

        <div>
          <NavLink
            to={`/${user}/${id}/account/settings`}
            activeclassname='active'
            className='app__flex-3'
            end
          >
            <span>
              <AiOutlineSetting />
            </span>
            <p className='p-text'>settings</p>
          </NavLink>
          <button
            type='button'
            onClick={handleLogout}
            className='app__flex-3 sign'
          >
            <span>
              <TbLogout />
            </span>
            <p className='p-text'>sign out</p>
          </button>
        </div>
      </div>
    </nav>
  )
}

Sidebar.propTypes = {
  sideLinks: PropTypes.any,
}

export default Sidebar
