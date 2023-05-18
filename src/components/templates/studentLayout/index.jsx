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
} from '../../../pages/auth/api/authSlice'
import styles from './layout.module.scss'

const StudentLayout = () => {
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
      path: `/${user}/${id}/library`,
      name: 'My Library',
      icon: <TbNotebook />,
    },
    {
      id: 3,
      path: `/${user}/${id}/activities`,
      name: 'Activities',
      icon: <BsJoystick />,
    },
    {
      id: 4,
      path: `/${user}/${id}/calendar`,
      name: 'link park calendar',
      icon: <RiCalendar2Line />,
    },
    {
      id: 5,
      path: `/${user}/${id}/portal`,
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
