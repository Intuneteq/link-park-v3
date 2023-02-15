import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { Images } from '../../../constants'
import { Desktop } from '../../../hooks/useMediaQuery'
import styles from './authtemplate.module.scss'

const AuthTemplate = ({ children }) => {
  const parent = useSelector((state) => state.user.parent)
  const student = useSelector((state) => state.user.student)
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
