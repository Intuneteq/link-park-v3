import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { SIGNIN_CONTENTS } from './contents'
import { AuthTemplate } from '../../components/templates'
import { Form } from '../../components/organisms'
import { parentStatus, studentStatus } from '../user/slices/userSlice'

const SignIn = () => {
  const { formInputs, footerText } = SIGNIN_CONTENTS
  const parent = useSelector(parentStatus)
  const student = useSelector(studentStatus)
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

  const showHeadText = () => {
    if (parent) {
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
