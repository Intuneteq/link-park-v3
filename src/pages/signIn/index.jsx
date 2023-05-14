import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'

import { SIGNIN_CONTENTS } from './contents'
import { AuthTemplate } from '../../components/templates'
import { Form } from '../../components/organisms'
// import { parentStatus, studentStatus } from '../user/slices/userSlice'

const SignIn = () => {
  const { formInputs, footerText } = SIGNIN_CONTENTS
  const [user, setUser] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const local = localStorage.getItem('user')
    console.log('i am local', local)
    setUser(local)
  }, [])

  const handleSubmit = () => {
    if (user === 'parent') {
      navigate('/username/dashboard')
    } else if (user === 'student') {
      navigate('/student/dashboard')
    } else {
      navigate('/')
    }
  }

  const showHeadText = () => {
    if (user === 'parent') {
      return 'Welcome Back Mr/Mrs'
    } else {
      return 'Welcome Back to school'
    }
  }

  return (
    <AuthTemplate>
      <Form
        title={showHeadText()}
        arr={formInputs}
        signIn
        btnText='Sign In'
        footerText={footerText}
        handleSubmit={handleSubmit}
      />
    </AuthTemplate>
  )
}

export default SignIn
