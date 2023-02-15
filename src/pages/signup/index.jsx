import React from 'react'
import { useSelector } from 'react-redux'

import { SIGNUP_CONTENTS } from './contents'
import { AuthTemplate } from '../../components/templates'
import { Form } from '../../components/organisms'

const SignUp = () => {
  const { studentInputs, parentInputs, footerText } = SIGNUP_CONTENTS
  const parent = useSelector((state) => state.user.parent)

  function showInput() {
    if (parent) {
      return parentInputs
    }
    {
      return studentInputs
    }
  }
  return (
    <AuthTemplate>
      <Form
        title='Create an Account Below'
        arr={showInput()}
        btnText='Sign up'
        footerText={footerText}
      />
    </AuthTemplate>
  )
}

export default SignUp
