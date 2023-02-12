import React from 'react'
import { PropTypes } from 'prop-types'

import { TopNav } from '../../organisms'

import styles from './container.module.scss'

const Container = ({ children, name }) => {
  return (
    <div className={styles.container}>
      <TopNav name={name} />
      <section className={styles.containerBody}>{children}</section>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  name: PropTypes.string.isRequired,
}

export default Container
