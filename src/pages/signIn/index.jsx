// Dependencies
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'

// Components
import { SIGNIN_CONTENTS } from './contents'
import { AuthTemplate } from '../../components/templates'
import { Form } from '../../components/organisms'
import { useLoginMutation } from '../../features/auth/authApi'
import {
  setCredentials,
  selectCurrentUserType,
} from '../../features/auth/authSlice'

const SignIn = () => {
  const { formInputs, footerText } = SIGNIN_CONTENTS

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUserType)

  const [login, { isLoading }] = useLoginMutation()

  const handleSubmit = async (data) => {
    try {
      const response = await login(data).unwrap()
      const {
        id,
        full_name: fullName,
        accessToken,
        user_type: userType,
      } = response.data
      toast.success('Login successful')
      dispatch(setCredentials({ id, fullName, accessToken, userType }))
      navigate(`/${userType}/${id}`)
    } catch (error) {
      console.error(error)
      if (error?.status === 401) toast.error('Username or Password Incorrect')
      else toast.error('Login Failed')
    }
  }

  const showHeadText = () => {
    if (user === 'guardian') {
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
        isLoading={isLoading}
      />
    </AuthTemplate>
  )
}

export default SignIn
