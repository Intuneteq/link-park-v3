import React from 'react'
import { Outlet } from 'react-router-dom'

import { NavBar } from '../../organisms'

const ExternalLayouts = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default ExternalLayouts
