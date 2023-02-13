import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import 'animate.css'

import { selectParent, selectStudent } from './slices/userSlice'
import { USER_CONTENTS } from './contents'
import './UserSelect.scss'

const User = () => {
  const navigate = useNavigate()
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
    if (user.toLowerCase() === 'parent') {
      dispatch(selectParent(true))
    } else if (user.toLowerCase() === 'student') {
      dispatch(selectStudent(true))
    }
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
            onClick={() => handleUserClick(index, user.name)}
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
      <button
        type='button'
        onClick={() => navigate('/signin')}
        className='btn-primary'
      >
        Next
      </button>
    </main>
  )
}

export default User
