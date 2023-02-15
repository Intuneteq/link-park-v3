import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { SIGNUP_CONTENTS } from './contents'
import { AuthTemplate } from '../../components/templates'
import { Form } from '../../components/organisms'

const SignUp = () => {
  const navigate = useNavigate()
  const { studentInputs, parentInputs, footerText } = SIGNUP_CONTENTS
  const parent = useSelector((state) => state.user.parent)
  const student = useSelector((state) => state.user.student)

  function showInput() {
    if (parent) {
      return parentInputs
    }
    {
      return studentInputs
    }
  }

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
    <AuthTemplate>
      <Form
        title='Create an Account Below'
        arr={showInput()}
        btnText='Sign up'
        footerText={footerText}
        handleSubmit={handleSubmit}
      />
    </AuthTemplate>
  )
}

export default SignUp
