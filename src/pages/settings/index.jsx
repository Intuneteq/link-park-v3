import React from 'react'
import { NavLink } from 'react-router-dom'

import './settings.scss'
import { Outlet } from 'react-router-dom'

const Settings = () => {
  const SettingsPath = [
    {
      id: 1,
      name: 'Details',
      path: '/account/settings',
    },
    {
      id: 2,
      name: 'Password',
      path: '/account/settings/passwords',
    },
    {
      id: 3,
      name: 'email',
      path: '/account/settings/emails',
    },
    {
      id: 4,
      name: 'Notification',
      path: '/account/settings/notifications',
    },
  ]

  return (
    <div className='settings'>
      <section className='settings__section1'>
        <article>
          <div>
            <img
              src='https://res.cloudinary.com/dxje0rp9f/image/upload/v1670352965/Link%20Park/_Avatar_ao3elj.svg'
              alt='user'
            />
          </div>
          <span>
            <h1>Settings</h1>
            <p>tobiolanitori@gmail.com</p>
          </span>
        </article>
      </section>
      <section className='settings__section2'>
        <div>
          {SettingsPath.map((item) => (
            <NavLink key={item.id} to={item.path} activeclassname='current' end>
              {item.name}
            </NavLink>
          ))}
        </div>
        <article className='settings_outlets'>
          <Outlet />
        </article>
      </section>
    </div>
  )
}

export default Settings
