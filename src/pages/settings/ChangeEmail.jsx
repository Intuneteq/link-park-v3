import React from 'react'
import { FormInput } from '../../components/molecules'

const ChangeEmail = () => {
  const changeEmailForm = [
    {
      id: 1,
      title: 'Current Email',
      label: 'currentEmail',
      type: 'email',
    },
    {
      id: 2,
      title: 'New Email',
      label: 'newEmail',
      type: 'email',
    },
    {
      id: 3,
      title: 'Confirm Email',
      label: 'confirmEmail',
      type: 'pasword',
    },
  ]
  return (
    <div className='settings_details'>
      <div className='details_name'>
        {changeEmailForm.map((item) => (
          <FormInput
            key={item.id}
            inputWidth={21.5}
            height={3.5}
            type={item.text}
            title={item.title}
          />
        ))}
      </div>
    </div>
  )
}

export default ChangeEmail
