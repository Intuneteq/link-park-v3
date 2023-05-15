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
import { fetchSchools, getSchoolsStatus, register } from '../../features/auth'

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState('')

  const { studentInputs, parentInputs, footerText } = SIGNUP_CONTENTS
  const schoolsStatus = useSelector(getSchoolsStatus)

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
    if (user === 'parent') {
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
      navigate('/')
    }

    try {
      await dispatch(register(userData)).unwrap()
      toast.success('Registration successful')
      navigate('/signin')
    } catch (error) {
      console.log(error)
      toast.error(error.message)
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
