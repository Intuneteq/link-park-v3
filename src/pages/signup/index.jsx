import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { SIGNUP_CONTENTS } from './contents'
import { AuthTemplate } from '../../components/templates'
import { Form } from '../../components/organisms'
import {
  selectAllSchools,
  getSchoolsStatus,
  getSchoolsError,
  fetchSchools,
  getUser,
  getRegistrationStatus,
  getRegistrationError,
  registerUser,
} from './services'

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState('')

  useEffect(() => {
    const local = localStorage.getItem('user')
    setUser(local)
  }, [])

  const { studentInputs, parentInputs, footerText } = SIGNUP_CONTENTS
  const schools = useSelector(selectAllSchools)
  const schoolsStatus = useSelector(getSchoolsStatus)
  const registeredUser = useSelector(getUser)
  const error = useSelector(getSchoolsError)

  useEffect(() => {
    if (schoolsStatus === 'idle') {
      dispatch(fetchSchools())
    }
  }, [schoolsStatus, dispatch])

  function showInput() {
    if (user === 'parent') {
      // console.log()
      parentInputs.forEach((input) => {
        if (input.id === 6) {
          // If Fetch all schools return error
          input.options = error
            ? []
            : schools.map((school) => {
                return { ...school, value: school.id, label: school.name }
              })
        }
      })
      return parentInputs
    } else {
      return studentInputs
    }
  }

  const handleSubmit = (data) => {
    console.log(data)
    const {
      firstName: first_name,
      lastName: last_name,
      email,
      password,
      school,
      phoneNumber: phone_number,
    } = data
    if (user === 'parent') {
      // Dispatch register

      const parentData = {
        user_type: 'guardian',
        school_id: school.id,
        first_name,
        last_name,
        email,
        password,
        phone_number,
      }

      dispatch(registerUser(parentData)).unwrap()
      console.log(registeredUser)
      navigate('/username/dashboard')
    } else if (user === 'student') {
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
