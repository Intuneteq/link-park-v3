import React from 'react'
import PropTypes from 'prop-types'

import styles from './atoms.module.scss'

const TableCard = ({ children }) => {
  return <td className={styles.tableData}>{children}</td>
}

TableCard.propTypes = {
  children: PropTypes.any,
}

export default TableCard
