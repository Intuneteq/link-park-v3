import { AiFillEyeInvisible } from 'react-icons/ai'

export const SIGNIN_CONTENTS = {
  formInputs: [
    {
      id: 1,
      label: 'email',
      text: 'Email Address',
      type: 'email',
    },
    {
      id: 2,
      label: 'password',
      text: 'Password',
      type: 'password',
      icon: <AiFillEyeInvisible />,
    },
  ],

  footerText: {
    text: 'Don’t Have an Account?',
    linkText: 'Register',
    link: '/signup',
  },
}
