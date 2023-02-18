import React from 'react'
import PropTypes from 'prop-types'

import { InputBox } from '../../atoms'
import styles from './form.module.scss'

const FormInput = ({ inputWidth, height, type, title, label }) => {
  return (
    <div className={styles.form_control}>
      <label htmlFor={label}>{title}</label>
      <InputBox
        width={`${inputWidth}rem`}
        height={`${height}rem`}
        type={type}
        placeholder={title}
      />
    </div>
  )
}

FormInput.propTypes = {
  inputWidth: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
}

export default FormInput
