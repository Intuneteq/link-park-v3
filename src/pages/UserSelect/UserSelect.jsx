import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'animate.css'

import './UserSelect.scss'
const UserSelect = () => {
  const navigate = useNavigate()
  const [animate, setAnimate] = useState({
    activeUser: null,
  })

  const toggleActiveClassName = (user) => {
    if (animate.activeUser === user) {
      return 'animate__animated animate__pulse active UserSelect__container-inner column-flex'
    } else {
      return 'UserSelect__container-inner column-flex'
    }
  }

  return (
    <main className='UserSelect column-flex'>
      <h1 className='sub-text'>Select User Type</h1>
      <p className='p-text'>Please select the option that best describes you</p>
      <section className='app__flex-2 UserSelect__container'>
        <div
          onClick={() => setAnimate({ ...animate, activeUser: 0 })}
          className={toggleActiveClassName(0)}
        >
          <div className='img-size'>
            <img
              src='https://res.cloudinary.com/dxje0rp9f/image/upload/v1673601432/Link%20Park/undraw_pic_profile_re_7g2h_1_lraa9b.png'
              alt=''
            />
          </div>
          <p>I am a Parent</p>
        </div>
        <div
          onClick={() => setAnimate({ ...animate, activeUser: 1 })}
          className={toggleActiveClassName(1)}
        >
          <div className='img-size'>
            <img
              src='https://res.cloudinary.com/dxje0rp9f/image/upload/v1673601432/Link%20Park/274_manager_outline_jbe8zx.png'
              alt=''
            />
          </div>
          <p>I am a Student</p>
        </div>
      </section>
      <button onClick={() => navigate('/signin')} className='btn-primary'>
        {' '}
        Next{' '}
      </button>
    </main>
  )
}

export default UserSelect
