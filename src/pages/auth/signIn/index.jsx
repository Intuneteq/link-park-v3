// Dependencies
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'

// Components
import { SIGNIN_CONTENTS } from './contents'
import { AuthTemplate } from '../../../components/templates'
import { Form } from '../../../components/organisms'
import { useLoginMutation } from '../api/authApi'
import { setCredentials, selectCurrentUserType } from '../api/authSlice'

const SignIn = () => {
  const [title, setTitle] = useState('')
  const user = useSelector(selectCurrentUserType)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { formInputs, footerText } = SIGNIN_CONTENTS

  const [login, { isLoading }] = useLoginMutation()

  useEffect(() => {
    if (user === 'guardian') {
      setTitle('Welcome Back Mr/Mrs')
    } else if (user === 'student') {
      setTitle('Welcome Back to school')
    } else {
      navigate('/user')
    }
  }, [user, navigate])

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

  return (
    <AuthTemplate>
      <Form
        title={title}
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
