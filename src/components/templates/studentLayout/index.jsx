import React from 'react'
import { Outlet } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import { SlHome } from 'react-icons/sl'
import { TbNotebook } from 'react-icons/tb'
import { BsJoystick } from 'react-icons/bs'
import { RiCalendar2Line } from 'react-icons/ri'

import { Sidebar } from '../../organisms'
// import {
//   selectCurrentUserId,
//   selectCurrentUserType,
// } from '../../../features/auth/authSlice'
import styles from './layout.module.scss'

const StudentLayout = () => {
  // const id = useSelector(selectCurrentUserId)
  const sideBarLinks = [
    {
      id: 1,
      path: '/student/dashboard',
      name: 'Dashboard',
      icon: <SlHome />,
    },
    {
      id: 2,
      path: '/student/library',
      name: 'My Library',
      icon: <TbNotebook />,
    },
    {
      id: 3,
      path: '/student/activities',
      name: 'Activities',
      icon: <BsJoystick />,
    },
    {
      id: 4,
      path: '/student/calendar',
      name: 'link park calendar',
      icon: <RiCalendar2Line />,
    },
    {
      id: 5,
      path: '/student/portal',
      name: 'Portal',
      icon: <RiCalendar2Line />,
    },
  ]

  return (
    <main className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar sideLinks={sideBarLinks} />
      </div>
      <div className={styles.outlet}>
        <Outlet context={{ sideBarLinks }} />
      </div>
    </main>
  )
}

export default StudentLayout
