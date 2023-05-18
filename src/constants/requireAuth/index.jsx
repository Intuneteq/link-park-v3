import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectCurrentToken } from '../../pages/auth/api/authSlice'

const RequireAuth = () => {
  const location = useLocation()
  const token = useSelector(selectCurrentToken)

  return token ? (
    <Outlet />
  ) : (
    <Navigate to='/user' state={{ from: location }} replace />
  )
}

export default RequireAuth
