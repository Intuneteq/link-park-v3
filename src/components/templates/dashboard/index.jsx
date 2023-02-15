import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../organisms'

import { SlHome } from 'react-icons/sl'
import { TbNotebook } from 'react-icons/tb'
import { BsJoystick } from 'react-icons/bs'
import { RiCalendar2Line } from 'react-icons/ri'

import styles from './layout.module.scss'

const DashboardLayout = () => {
  const sideBarLinks = [
    {
      id: 1,
      path: '/username/dashboard',
      name: 'Dashboard',
      icon: <SlHome />,
    },
    {
      id: 2,
      path: '/username/results',
      name: 'Results',
      icon: <TbNotebook />,
    },
    {
      id: 3,
      path: '/username/subjects',
      name: 'Subjects',
      icon: <BsJoystick />,
    },
    {
      id: 4,
      path: '/username/events/new',
      name: 'Upcoming Events',
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

export default DashboardLayout
