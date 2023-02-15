import React from 'react'
import PropTypes from 'prop-types'
import { CiSearch } from 'react-icons/ci'

import { useGetScreenSize } from '../../hooks/useMediaQuery'
import styles from './atoms.module.scss'

const SearchInput = ({ height }) => {
  const { smallScreen } = useGetScreenSize()
  return (
    <div
      style={{ height: smallScreen ? '100%' : `${height}rem` }}
      className={styles.searchInput}
    >
      <input type='search' placeholder='Search' />
      <CiSearch />
    </div>
  )
}

SearchInput.propTypes = {
  height: PropTypes.number.isRequired,
}

export default SearchInput
