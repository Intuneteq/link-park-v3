// Dependencies
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'

// Components
import { SIGNUP_CONTENTS } from './contents'
import { AuthTemplate } from '../../../components/templates'
import { Form } from '../../../components/organisms'
import { useRegisterMutation, authApiSlice } from '../api/authApi'
import { selectCurrentUserType } from '../api/authSlice'

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [register, { isLoading }] = useRegisterMutation()
  const user = useSelector(selectCurrentUserType)

  const { studentInputs, parentInputs, footerText } = SIGNUP_CONTENTS

  useEffect(() => {
    if (user === 'guardian') {
      dispatch(authApiSlice.endpoints.getSchools.initiate())
    }
  }, [dispatch, user])

  function showInput() {
    if (user === 'guardian') {
      return parentInputs
    } else {
      return studentInputs
    }
  }

  const handleSubmit = async (data) => {
    console.log(data)

    let userData = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
      phone_number: data.phoneNumber,
    }

    // User is a parent
    if (user === 'guardian') {
      userData = {
        ...userData,
        user_type: 'guardian',
        school_id: data.school.id,
      }
    }

    // User is a student
    if (user === 'student') {
      userData = {
        ...userData,
        user_type: 'student',
        guardian_code: data.parentCode,
      }
    }

    // No user in local storage
    if (!user) {
      toast.success('select user')
      navigate('/user')
      return
    }

    try {
      await register(userData).unwrap()
      toast.success('Registration successful')
      navigate('/signin')
    } catch (error) {
      console.error(error)
      toast.error(error.data.message)
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
        isLoading={isLoading}
      />
    </AuthTemplate>
  )
}

export default SignUp
