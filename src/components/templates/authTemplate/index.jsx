import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Images } from '../../../constants'
import { Desktop } from '../../../hooks/useMediaQuery'
import { getStorageData } from '../../../hooks/useLocalStorage'
import styles from './authtemplate.module.scss'

const AuthTemplate = ({ children }) => {
  const [user, setUser] = useState('')

  useEffect(() => {
    setUser(getStorageData('user', 'parent'))
  }, [])

  return (
    <main className={styles.authTemplate}>
      <Desktop>
        <section className={styles.authImage}>
          <img
            src={user === 'parent' ? Images.authParent : Images.authStudent}
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
