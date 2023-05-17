import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { SlHome } from 'react-icons/sl'
import { TbNotebook } from 'react-icons/tb'
import { BsJoystick } from 'react-icons/bs'
import { RiCalendar2Line } from 'react-icons/ri'

import { Sidebar } from '../../organisms'
import {
  selectCurrentUserId,
  selectCurrentUserType,
} from '../../../features/auth/authSlice'
import styles from './layout.module.scss'

const DashboardLayout = () => {
  const id = useSelector(selectCurrentUserId)
  const user = useSelector(selectCurrentUserType)
  const sideBarLinks = [
    {
      id: 1,
      path: `/${user}/${id}`,
      name: 'Dashboard',
      icon: <SlHome />,
    },
    {
      id: 2,
      path: `/${user}/${id}/results`,
      name: 'Results',
      icon: <TbNotebook />,
    },
    {
      id: 3,
      path: `/${user}/${id}/subjects`,
      name: 'Subjects',
      icon: <BsJoystick />,
    },
    {
      id: 4,
      path: `/${user}/${id}/events`,
      name: 'Upcoming Events',
      icon: <RiCalendar2Line />,
    },
    {
      id: 5,
      path: `/${user}/${id}/notifications`,
      name: 'Notifications',
      icon: <RiCalendar2Line />,
    },
    {
      id: 6,
      path: `/${user}/${id}/chats`,
      name: 'Chats',
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
