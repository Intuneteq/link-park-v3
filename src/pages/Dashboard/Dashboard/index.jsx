import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { Images } from '../../../constants'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <section className='dashboard__nav app__flex-2'>
        <h3>Dashboard</h3>
        <div>
          <input type="search" />
        </div>
        <IoMdNotificationsOutline />
        <div>
          <select name="student" id="student">
            <option value="Temitope Adekunle">Temitope Adekunle</option>
            <option value="Temitope Adekunle">Temitope Adekunle</option>
          </select>
        </div>
        <div>
          <img src={Images.user} alt="user" />
        </div>
      </section>
    </div>
  )
}

export default Dashboard