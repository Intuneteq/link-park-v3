import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { Images } from '../../../constants'
import { Desktop } from '../../../hooks/useMediaQuery'
import styles from './authtemplate.module.scss'
import {
  parentStatus,
  studentStatus,
} from '../../../pages/user/slices/userSlice'

const AuthTemplate = ({ children }) => {
  const parent = useSelector(parentStatus)
  const student = useSelector(studentStatus)
  return (
    <main className={styles.authTemplate}>
      <Desktop>
        <section className={styles.authImage}>
          <img
            src={
              parent
                ? Images.authParent
                : student
                ? Images.authStudent
                : Images.authStudent
            }
            alt='auth'
          />
        </section>
      </Desktop>
      <section className={styles.authForm}>{children}</section>
    </main>
  )
}

AuthTemplate.propTypes = {
  children: PropTypes.any,
}

export default AuthTemplate
