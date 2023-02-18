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
            <NavLink key={item.id} to={item.path} activeclassname='current'>
              {item.name}
            </NavLink>
          ))}
        </div>
        <article className='settings_outlets'>
          <Outlet />
        </article>
        {/* <article>
          {details && (
            <div className='article_details'>
              <div className='app__flex-2'>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' />
              </div>
              <div className='app__flex-2'>
                <label htmlFor='middleName'>Middle Name</label>
                <input type='text' />
              </div>
              <div className='app__flex-2'>
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' />
              </div>
              <hr />
              <div className='app__flex-2'>
                <label htmlFor='password'>Password</label>
                <input type='text' />
              </div>
            </div>
          )}
          {password && (
            <div className='article-details password column-flex'>
              <div className='app__flex-2'>
                <label htmlFor='currentPassword'>Current Password</label>
                <input type='text' />
              </div>
              <div className='app__flex-2'>
                <label htmlFor='newPassword'>New Password</label>
                <input type='text' />
              </div>
              <div className='app__flex-2'>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input type='text' />
              </div>
            </div>
          )}
          {email && (
            <div className='article-details password column-flex'>
              <div className='app__flex-2'>
                <label htmlFor='currentEmail'>Current Email</label>
                <input type='text' />
              </div>
              <div className='app__flex-2'>
                <label htmlFor='newEmail'>New Email</label>
                <input type='text' />
              </div>
              <div className='app__flex-2'>
                <label htmlFor='confirmEmail'>Confirm Email</label>
                <input type='text' />
              </div>
              <div className='app__flex-2'>
                <label htmlFor='code'>Verification code</label>
                <input type='text' />
              </div>
            </div>
          )}
          {notification && (
            <div className='article-notification'>
              <div className='app__flex-2 notification-1'>
                <div>
                  <h6>Email notifications</h6>
                  <p>
                    Get emails to find out what`s going on when you`re not
                    online
                  </p>
                </div>
                <div>
                  <div>
                    <h6 className='app__flex-2'>
                      Graded Assignment{' '}
                      <span>
                        <Switch initialChecked />
                      </span>
                    </h6>
                    <p>Know the particular assignment a teacher has graded</p>
                  </div>
                  <div>
                    <h6 className='app__flex-2'>
                      New Assignment{' '}
                      <span>
                        <Switch initialChecked />
                      </span>
                    </h6>
                    <p>Get notified when you have new assignments.</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className='app__flex-2 notification-1'>
                <div>
                  <h6>Push notifications</h6>
                  <p>
                    Get emails to find out what`s going on when you`re not
                    online
                  </p>
                </div>
                <div>
                  <div>
                    <h6 className='app__flex-2'>
                      Graded Assignment{' '}
                      <span>
                        <Switch initialChecked />
                      </span>
                    </h6>
                    <p>Know the particular assignment a teacher has graded</p>
                  </div>
                  <div>
                    <h6 className='app__flex-2'>
                      New Assignment{' '}
                      <span>
                        <Switch initialChecked />
                      </span>
                    </h6>
                    <p>Get notified when you have new assignments.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </article> */}
      </section>
    </div>
  )
}

export default Settings
