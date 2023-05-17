import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import 'animate.css'

import { Buttons } from '../../components/atoms'
import { USER_CONTENTS } from './contents'
import { setCredentials } from '../../features/auth/authSlice'

import './UserSelect.scss'

const User = () => {
  const dispatch = useDispatch()
  const { header, subHeader, users } = USER_CONTENTS
  const [animate, setAnimate] = useState({
    activeUser: null,
  })

  const toggleActiveClassName = (index) => {
    if (animate.activeUser === index) {
      return 'animate__animated animate__pulse active UserSelect__container-inner column-flex'
    } else {
      return 'UserSelect__container-inner column-flex'
    }
  }

  const handleUserClick = (index, user) => {
    setAnimate({ ...animate, activeUser: index })
    dispatch(setCredentials({ userType: user }))

    // if (user.toLowerCase() === 'parent') {
    //   dispatch(setCredentials({userType: 'parent'}))
    //   // localStorage.setItem('user', 'parent')
    // } else if (user.toLowerCase() === 'student') {
    //   localStorage.setItem('user', 'student')
    // }
  }

  return (
    <main className='UserSelect column-flex'>
      <h1 className='sub-text'>{header}</h1>
      <p className='p-text'>{subHeader}</p>
      <section className='app__flex-2 UserSelect__container'>
        {users.map((user, index) => (
          <button
            key={index}
            type='button'
            onClick={() => handleUserClick(index, user.key)}
            className={toggleActiveClassName(index)}
            onAnimationEnd={() => setAnimate({ ...animate, activeUser: null })}
          >
            <div className='img-size'>
              <img src={user.img} alt='user' />
            </div>
            <p>{user.text}</p>
          </button>
        ))}
      </section>
      <Buttons
        text='Next'
        height={3.875}
        width={10.75}
        classType={'primary'}
        to={'/signin'}
      />
    </main>
  )
}

export default User
