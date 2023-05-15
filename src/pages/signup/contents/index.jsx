import { AiFillEyeInvisible } from 'react-icons/ai'

export const SIGNUP_CONTENTS = {
  studentInputs: [
    {
      id: 1,
      label: 'firstName',
      text: 'First Name',
      half: true,
      type: 'text',
    },
    {
      id: 2,
      label: 'lastName',
      text: 'Last Name',
      half: true,
      type: 'text',
    },
    {
      id: 3,
      label: 'parentCode',
      text: 'Parent Code',
      type: 'text',
    },
    {
      id: 7,
      label: 'phoneNumber',
      text: 'Phone Number',
      type: 'number',
    },
    {
      id: 4,
      label: 'email',
      text: 'Email Address',
      type: 'email',
    },
    {
      id: 5,
      label: 'password',
      text: 'Password',
      type: 'password',
      icon: <AiFillEyeInvisible />,
    },
  ],
  parentInputs: [
    {
      id: 1,
      label: 'firstName',
      text: 'First Name',
      half: true,
      type: 'text',
    },
    {
      id: 2,
      label: 'lastName',
      text: 'Last Name',
      half: true,
      type: 'text',
    },
    {
      id: 4,
      label: 'email',
      text: 'Email Address',
      type: 'email',
    },
    {
      id: 5,
      label: 'password',
      text: 'Password',
      type: 'password',
      icon: <AiFillEyeInvisible />,
    },
    {
      id: 6,
      label: 'selectSchchool',
      text: 'Select school',
      type: 'select',
      options: [],
    },
    {
      id: 7,
      label: 'phoneNumber',
      text: 'Phone Number',
      type: 'number',
    },
  ],

  footerText: {
    text: 'Already Have an Account?',
    linkText: 'Sign In',
    link: '/signin',
  },
}
