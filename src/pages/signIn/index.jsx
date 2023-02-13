import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Checkbox } from '@nextui-org/react'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { useSelector } from 'react-redux'

import './signIn.scss'

const SignIn = () => {
  const parent = useSelector((state) => state.user.parent)
  const student = useSelector((state) => state.user.student)
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (parent) {
      navigate('/username/dashboard')
    } else if (student) {
      navigate('/student/dashboard')
    } else {
      navigate('/')
    }
  }
  return (
    <main className='signIn app__flex auth'>
      <section className='auth__img img-size'>
        <img
          src='https://res.cloudinary.com/intuneteq/image/upload/v1673438686/Link-park-v2/Frame_15971_ivgcpf.png'
          alt='sign-in'
        />
      </section>
      <form onSubmit={() => handleSubmit()} className='auth__form column-flex'>
        <h2 className='sub-text'>
          {parent ? 'Welcome Back Mr/Mrs' : student ? 'Welcome Back!' : ''}
        </h2>
        <p className='p-text'>Please enter your details to get started</p>
        <section className='column-flex form-inputs'>
          <div className='form-control column-flex'>
            <label htmlFor='email'>Email Address</label>
            <div>
              <input type='email' name='email' placeholder='Email Address' />
            </div>
          </div>
          <div className='form-control column-flex'>
            <label htmlFor='password'>Password</label>
            <div>
              <input type='password' name='email' placeholder='Password' />
              <AiFillEyeInvisible />
            </div>
          </div>
          <div className='remember-me app__flex-2'>
            <div className='app__flex-2'>
              <Checkbox className='check-box' />
              <span>Remember me</span>
            </div>
            <span>Forgot password?</span>
          </div>
          <div className='form-btn'>
            <button type='submit' className='btn-primary'>
              Sign In
            </button>
          </div>
          <div className='form-footer app__flex'>
            <p className='p-text-2'>
              Don’t Have an Account?{' '}
              <button type='button' onClick={() => navigate('/signup')}>
                Register
              </button>
            </p>
          </div>
        </section>
      </form>
    </main>
  )
}

export default SignIn
