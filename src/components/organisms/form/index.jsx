import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Checkbox } from '@nextui-org/react'

import { useGetScreenSize } from '../../../hooks/useMediaQuery'
import { Buttons } from '../../atoms'
import styles from './form.module.scss'

const Form = ({ title, handleSubmit, arr, signIn, btnText, footerText }) => {
  const { isTablet } = useGetScreenSize()

  const { register, control, handleSubmit: hookSubmit } = useForm()

  return (
    <section className={styles.formBox}>
      <h2>{title}</h2>
      <p>Please enter your details to get started</p>

      <form className={styles.form} onSubmit={hookSubmit(handleSubmit)}>
        {arr.map((item, index) => (
          <div
            className={item.half ? styles.formHolderHalf : styles.formHolder}
            key={index}
          >
            <label aria-label={item.label} htmlFor={item.label}>
              {item.text}
            </label>
            <div className={styles.inputHolder}>
              {item.type === 'select' ? (
                <Controller
                  name='school'
                  control={control}
                  render={({ field }) => (
                    <Select options={item.options} id='school' {...field} />
                  )}
                />
              ) : (
                <input
                  type={item.type}
                  placeholder={item.text}
                  aria-describedby={`${item.label}HelpBlock`}
                  aria-label={item.label}
                  aria-labelledby={item.label}
                  {...register(item.label)}
                />
              )}
              {item.icon && item.icon}
            </div>
          </div>
        ))}
        {signIn && (
          <div className={styles.signIn}>
            <div className={styles.rememberMe}>
              <Checkbox />
              <small>Remember me</small>
            </div>
            <Link to={'#'}>Forgot Password?</Link>
          </div>
        )}
        <div className={styles.formBtn}>
          <Buttons
            text={btnText}
            type='submit'
            classType='primary'
            height={3.875}
            fontSize={isTablet ? '1' : '1.25'}
            fontWeight={700}
          />
        </div>
        <small className={styles.formFooter}>
          {footerText.text}{' '}
          <Link to={footerText.link}>{footerText.linkText}</Link>
        </small>
      </form>
    </section>
  )
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  arr: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func,
  signIn: PropTypes.bool,
  btnText: PropTypes.string.isRequired,
  footerText: PropTypes.objectOf(PropTypes.string),
}

export default Form
{
  /* <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={item.options}
                  /> */
}
