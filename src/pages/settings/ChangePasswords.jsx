import React from 'react'

import { FormInput } from '../../components/molecules'

const ChangePasswords = () => {
  const changePasswordForm = [
    {
      id: 1,
      title: 'Current Password',
      label: 'currentPassword',
      type: 'password',
    },
    {
      id: 2,
      title: 'New Password',
      label: 'newPassword',
      type: 'password',
    },
    {
      id: 3,
      title: 'Confirm Password',
      label: 'confirmPassword',
      type: 'pasword',
    },
  ]
  return (
    <div className='settings_details'>
      <div className='details_name'>
        {changePasswordForm.map((item) => (
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

export default ChangePasswords
