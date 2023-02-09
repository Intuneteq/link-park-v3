import React from 'react'
import PropTypes from 'prop-types'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { Images } from '../../../constants'
import { Selector } from '../../molecules'

import './topnav.scss'
import { SearchInput } from '../../atoms'

const TopNav = ({ name }) => {
  const options = ['Temitope Adekunle', 'Temitope', 'Temitope']
  return (
    <section className='dashboard__nav app__flex-2'>
      <h3>{name}</h3>
      <div className='dashboard__nav-search'>
        <SearchInput height={3.25} />
      </div>
      <IoMdNotificationsOutline />
      <div className='dashboard__nav-selector'>
        <Selector
          borderNone
          options={options}
          width={'100%'}
          height={'100%'}
          padding={'0'}
          selectWidth={'100%'}
        />
      </div>
      <div className='dashboard__nav-user img-size'>
        <img src={Images.user} alt='user' />
      </div>
    </section>
  )
}

TopNav.propTypes = {
  name: PropTypes.string.isRequired,
}

export default TopNav
