// Dependencies
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'

// Components
import { SIGNUP_CONTENTS } from './contents'
import { AuthTemplate } from '../../../components/templates'
import { Form } from '../../../components/organisms'
import { useRegisterMutation, useGetSchoolsQuery } from '../api/authApi'
import { selectCurrentUserType } from '../api/authSlice'

const SignUp = () => {
  const user = useSelector(selectCurrentUserType)
  const [content, setContent] = useState([])

  const navigate = useNavigate()

  const [register, { isLoading: isRegistering }] = useRegisterMutation()
  const { isLoading: fetchingSchool, isError, error } = useGetSchoolsQuery()

  const { studentInputs, parentInputs, footerText } = SIGNUP_CONTENTS

  useEffect(() => {
    if (user === 'guardian') {
      setContent(parentInputs)
    } else if (user === 'student') {
      setContent(studentInputs)
    } else {
      navigate('/user')
    }
  }, [user, navigate, parentInputs, studentInputs])

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

  let render

  if (fetchingSchool) {
    render = <p>Loading...</p>
  } else if (isError) {
    render = <h1>{error}</h1>
  } else {
    render = (
      <AuthTemplate>
        <Form
          title='Create an Account Below'
          arr={content}
          btnText='Sign up'
          footerText={footerText}
          handleSubmit={handleSubmit}
          isLoading={isRegistering}
        />
      </AuthTemplate>
    )
  }

  return render
}

export default SignUp
