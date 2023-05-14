import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { SIGNUP_CONTENTS } from './contents'
import { AuthTemplate } from '../../components/templates'
import { Form } from '../../components/organisms'
import { parentStatus, studentStatus } from '../user/slices/userSlice'
import {
  selectAllSchools,
  getSchoolsStatus,
  getSchoolsError,
  fetchSchools,
  // registerUser,
} from './services'
// import { useGetAllSchoolsQuery } from '../../api/apiSlice'

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { studentInputs, parentInputs, footerText } = SIGNUP_CONTENTS
  const schools = useSelector(selectAllSchools)
  const schoolsStatus = useSelector(getSchoolsStatus)
  const error = useSelector(getSchoolsError)
  const parent = useSelector(parentStatus)
  const student = useSelector(studentStatus)

  useEffect(() => {
    if (schoolsStatus === 'idle') {
      dispatch(fetchSchools())
    }
  }, [schoolsStatus, dispatch])

  function showInput() {
    if (parent) {
      parentInputs.forEach((input) => {
        if (input.id === 6) {
          // If Fetch all schools return error
          input.options = error ? [] : schools
        }
      })
      return parentInputs
    } else {
      return studentInputs
    }
  }

  const handleSubmit = () => {
    if (parent) {
      // Dispatch register

      navigate('/username/dashboard')
    } else if (student) {
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
