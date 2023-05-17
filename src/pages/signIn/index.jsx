// Dependencies
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'

// Components
import { SIGNIN_CONTENTS } from './contents'
import { AuthTemplate } from '../../components/templates'
import { Form } from '../../components/organisms'
import { useLoginMutation } from '../../features/auth/authApi'
import { setCredentials } from '../../features/auth/authSlice'

const SignIn = () => {
  const { formInputs, footerText } = SIGNIN_CONTENTS

  const [user, setUser] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [login, { isLoading }] = useLoginMutation()

  useEffect(() => {
    const local = localStorage.getItem('user')
    setUser(local)
  }, [])

  const handleSubmit = async (data) => {
    console.log('login data', data)

    try {
      const response = await login(data).unwrap()
      console.log(response)
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
      toast.error('Login Failed')
      return
    }

    // if (user === 'parent') {
    //   navigate('/username/dashboard')
    // } else if (user === 'student') {
    //   navigate('/student/dashboard')
    // } else {
    //   navigate('/')
    // }
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
        isLoading={isLoading}
      />
    </AuthTemplate>
  )
}

export default SignIn
