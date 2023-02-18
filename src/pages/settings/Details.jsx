import React from 'react'

import { FormInput } from '../../components/molecules'

const Details = () => {
  const detailsForm = [
    {
      id: 1,
      title: 'First Name',
      label: 'firstName',
      type: 'text',
    },
    {
      id: 2,
      title: 'Middle Name',
      label: 'middleName',
      type: 'text',
    },
    {
      id: 3,
      title: 'Last Name',
      label: 'lastName',
      type: 'text',
    },
  ]
  return (
    <div className='settings_details'>
      <div className='details_name'>
        {detailsForm.map((item) => (
          <FormInput
            key={item.id}
            inputWidth={21.5}
            height={3.5}
            type={item.text}
            title={item.title}
          />
        ))}
      </div>

      <hr />
      <div className='details_name'>
        <FormInput
          inputWidth={21.5}
          height={3.5}
          type={'password'}
          title={'Password'}
        />
      </div>
    </div>
  )
}

export default Details
