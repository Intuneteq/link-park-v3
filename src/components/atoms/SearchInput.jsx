import React from 'react'
import PropTypes from 'prop-types'
import { CiSearch } from 'react-icons/ci'

import styles from './atoms.module.scss'

const SearchInput = ({ height }) => {
  return (
    <div style={{ height: `${height}rem` }} className={styles.searchInput}>
      <input type='search' placeholder='Search' />
      <CiSearch />
    </div>
  )
}

SearchInput.propTypes = {
  height: PropTypes.number.isRequired,
}

export default SearchInput
