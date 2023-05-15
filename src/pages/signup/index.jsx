// Dependencies
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'

// Components
import { SIGNUP_CONTENTS } from './contents'
import { AuthTemplate } from '../../components/templates'
import { Form } from '../../components/organisms'

// Reducers
import {
  fetchSchools,
  getSchoolsStatus,
  register,
  getRegistrationStatus,
  getRegistrationError,
} from '../../features/auth'

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState('')

  const { studentInputs, parentInputs, footerText } = SIGNUP_CONTENTS
  const schoolsStatus = useSelector(getSchoolsStatus)
  const registrationStatus = useSelector(getRegistrationStatus)
  const registrationErrorMsg = useSelector(getRegistrationError)

  useEffect(() => {
    const local = localStorage.getItem('user')
    setUser(local)
  }, [])

  useEffect(() => {
    if (schoolsStatus === 'idle') {
      dispatch(fetchSchools())
    }
  }, [schoolsStatus, dispatch])

  function showInput() {
    if (user === 'parent') {
      return parentInputs
    } else {
      return studentInputs
    }
  }

  const handleSubmit = (data) => {
    console.log(data)

    // User is a parent
    if (user === 'parent') {
      const parentData = {
        user_type: 'guardian',
        school_id: data.school.id,
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        password: data.password,
        phone_number: data.phoneNumber,
      }
      // Dispatch register
      dispatch(register(parentData)).unwrap()
      if (registrationStatus === 'failed') {
        toast.error(registrationErrorMsg)
      } else {
        toast.success('Registration successful')
        navigate('/signin')
      }
    }

    // User is a student
    if (user === 'student') {
      navigate('/student/dashboard')
    }

    // No user in local storage
    if (!user) {
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
