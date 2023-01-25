import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { Images } from '../../../constants'

import './dashboardNav.scss'

const DashboardNav = ({name}) => {
  return (
    <section className="dashboard__nav app__flex-2">
    <h3>{name}</h3>
    <div className="dashboard__nav-search">
      <input type="search" placeholder="Search" />
      <CiSearch />
    </div>
    <IoMdNotificationsOutline />
    <div className="dashboard__nav-selector">
      <select name="student" id="student">
        <option value="Temitope Adekunle">Temitope Adekunle</option>
        <option value="Temitope Adekunle">Temitope Adekunle</option>
      </select>
    </div>
    <div className="dashboard__nav-user img-size">
      <img src={Images.user} alt="user" />
    </div>
  </section>
  )
}

export default DashboardNav;