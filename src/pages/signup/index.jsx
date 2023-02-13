import React from 'react'

import './signup.scss'

const SignUp = () => {
  return (
    <main className='signup app__flex auth'>
      <section className='auth__img img-size'>
        <img
          src='https://res.cloudinary.com/intuneteq/image/upload/v1673438686/Link-park-v2/Frame_15971_ivgcpf.png'
          alt='sign-up'
        />
      </section>
      <form className='auth__form column-flex' action='submit'>
        <h2 className='sub-text'>Create an Account Below</h2>
        <p className='p-text'>Please enter your details to get started</p>
        <section className='column-flex form-inputs'>
          <div style={{ width: '100%' }} className='app__flex-2'>
            <div style={{ width: '48%' }} className='form-control column-flex'>
              <label htmlFor='firstName'>First Name</label>
              <div>
                <input type='text' name='email' placeholder='First Name' />
              </div>
            </div>
            <div style={{ width: '48%' }} className='form-control column-flex'>
              <label htmlFor='last name'>Last Name</label>
              <div>
                <input type='text' name='email' placeholder='Last Name' />
              </div>
            </div>
          </div>
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
            </div>
          </div>
          <div className='form-control column-flex'>
            <label htmlFor='schools'>Select school</label>
            <div>
              <select name='cars' id='cars'>
                <option>Select School</option>
                <option value='Nigeria Turkish Nile International College'>
                  Nigeria Turkish Nile International College
                </option>
                <option value='The Regent Secondary School, Abuja'>
                  The Regent Secondary School, Abuja
                </option>
                <option value='Ave Maria Secondary School, Abuja'>
                  Ave Maria Secondary School, Abuja
                </option>
                <option value='Pace Setters College'>
                  Pace Setters College
                </option>
                <option value='Tophill Secondary School'>
                  Tophill Secondary School
                </option>
                <option value='Whiteplains British School, Abuja'>
                  Whiteplains British School, Abuja
                </option>
                <option value='Tophill Nursery Primary and Secondary School'>
                  Tophill Nursery Primary and Secondary School
                </option>
              </select>
            </div>
          </div>
          <div className='form-control column-flex'>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <div>
              <input type='number' name='email' placeholder='Phone Number' />
            </div>
          </div>
          <div className='form-btn'>
            <button className='btn-primary'>Sign In</button>
          </div>
        </section>
      </form>
    </main>
  )
}

export default SignUp
