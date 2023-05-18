import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { Images } from '../../../constants'
import { Desktop } from '../../../hooks/useMediaQuery'
import { selectCurrentUserType } from '../../../pages/auth/api/authSlice'
import styles from './authtemplate.module.scss'

const AuthTemplate = ({ children }) => {
  const user = useSelector(selectCurrentUserType)

  return (
    <main className={styles.authTemplate}>
      <Desktop>
        <section className={styles.authImage}>
          <img
            src={user === 'guardian' ? Images.authParent : Images.authStudent}
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
