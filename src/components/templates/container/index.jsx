import React from 'react'
import { PropTypes } from 'prop-types'
import { useOutletContext } from 'react-router-dom'

import { TopNav } from '../../organisms'

import styles from './container.module.scss'

const Container = ({ children, name, background }) => {
  const { sideBarLinks } = useOutletContext()
  return (
    <div className={styles.container}>
      <TopNav navLinks={sideBarLinks} name={name} />
      <section style={{ background }} className={styles.containerBody}>
        {children}
      </section>
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
  background: PropTypes.string,
}

export default Container
