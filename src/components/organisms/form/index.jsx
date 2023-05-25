import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Checkbox } from '@nextui-org/react'
import { useSelector } from 'react-redux'
import { AiFillEyeInvisible, AiOutlineEye } from 'react-icons/ai'

import { useGetScreenSize } from '../../../hooks/useMediaQuery'
import { selectAllSchools } from '../../../pages/auth/api/authSlice'
import { Buttons } from '../../atoms'
import styles from './form.module.scss'

const Form = ({
  title,
  handleSubmit,
  isLoading,
  arr,
  signIn,
  btnText,
  footerText,
}) => {
  const { isTablet } = useGetScreenSize()
  const schools = useSelector(selectAllSchools)
  const [toggle, setToggle] = useState(false)

  // Use react hook form to handle form data
  const {
    register,
    control,
    handleSubmit: hookSubmit,
    formState: { errors },
  } = useForm()

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
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select options={schools ?? []} id='school' {...field} />
                  )}
                />
              ) : (
                <input
                  type={
                    item.type !== 'password'
                      ? item.type
                      : toggle
                      ? 'text'
                      : 'password'
                  }
                  placeholder={item.text}
                  aria-describedby={`${item.label}HelpBlock`}
                  aria-label={item.label}
                  aria-labelledby={item.label}
                  aria-invalid={errors[item.label] ? 'true' : 'false'}
                  {...register(item.label, { required: true })}
                />
              )}
              {item.icon &&
                (item.label === 'password' ? (
                  !toggle ? (
                    <AiFillEyeInvisible onClick={() => setToggle(!toggle)} />
                  ) : (
                    <AiOutlineEye onClick={() => setToggle(!toggle)} />
                  )
                ) : (
                  <item.icon />
                ))}
            </div>
            {errors[item.label]?.type === 'required' && (
              <small role='alert'>{`${item.text} is required`}</small>
            )}
          </div>
        ))}
        {signIn && (
          <div className={styles.signIn}>
            <div className={styles.rememberMe}>
              <Checkbox
                aria-describedby={`Remember me`}
                aria-label={'Login Check box'}
                aria-labelledby={'Check box'}
              />
              <small>Remember me</small>
            </div>
            <Link to={'#'}>Forgot Password?</Link>
          </div>
        )}
        <div className={styles.formBtn}>
          <Buttons
            text={!isLoading ? btnText : 'Submitting...'}
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
  schools: PropTypes.array,
  handleSubmit: PropTypes.func,
  signIn: PropTypes.bool,
  isLoading: PropTypes.bool.isRequired,
  btnText: PropTypes.string.isRequired,
  footerText: PropTypes.objectOf(PropTypes.string),
}

export default Form
