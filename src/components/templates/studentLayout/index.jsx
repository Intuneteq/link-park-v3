import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../organisms'

import { SlHome } from 'react-icons/sl'
import { TbNotebook } from 'react-icons/tb'
import { BsJoystick } from 'react-icons/bs'
import { RiCalendar2Line } from 'react-icons/ri'

import styles from './layout.module.scss'

const StudentLayout = () => {
  const sideBarLinks = [
    {
      path: '/student/dashboard',
      name: 'Dashboard',
      icon: <SlHome />,
    },
    {
      path: '/student/library',
      name: 'My Library',
      icon: <TbNotebook />,
    },
    {
      path: '/student/activities',
      name: 'Activities',
      icon: <BsJoystick />,
    },
    {
      path: '/student/calendar',
      name: 'link park calendar',
      icon: <RiCalendar2Line />,
    },
    {
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
        <Outlet />
      </div>
    </main>
  )
}

export default StudentLayout
