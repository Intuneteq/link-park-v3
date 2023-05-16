// Dependencies
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'

// Components
import { SIGNUP_CONTENTS } from './contents'
import { AuthTemplate } from '../../components/templates'
import { Form } from '../../components/organisms'
import { authApiSlice } from '../../features/auth'

// import { useGetSchoolsQuery, useRegisterMutation } from '../../features/api'

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState('')
  // const [register] = useRegisterMutation()

  const { studentInputs, parentInputs, footerText } = SIGNUP_CONTENTS

  useEffect(() => {
    const local = localStorage.getItem('user')
    setUser(local)
  }, [])

  useEffect(() => {
    dispatch(authApiSlice.endpoints.getSchools.initiate())
  }, [])

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
      toast.success('select user')
      navigate('/user')
      return
    }

    // const response = await register(userData)
    // if (response.error) {
    //   toast.error(response.error.data.message)
    // } else {
    //   toast.success('Registration successful')
    //   navigate('/signin')
    // }
  }

  return (
    <AuthTemplate>
      <Form
        title='Create an Account Below'
        arr={showInput()}
        // schools={schools}
        btnText='Sign up'
        footerText={footerText}
        handleSubmit={handleSubmit}
      />
    </AuthTemplate>
  )
}

export default SignUp
