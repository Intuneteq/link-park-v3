import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { GrDown } from 'react-icons/gr'

import styles from './selector.module.scss'

const Selector = ({
  borderNone,
  title,
  options,
  width,
  height,
  padding,
  selectWidth,
}) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div style={{ width }} className={styles.selector}>
      {title && <p className='p-text'>{title}</p>}
      <div
        className={styles.selectMenu}
        style={{
          width: selectWidth,
          height,
          padding,
          borderStyle: borderNone && 'none',
        }}
      >
        <button
          type='button'
          onClick={() => setToggle(!toggle)}
          className={styles.selectBtn}
        >
          <span className={styles.sBtnText}>{options[0]}</span>
          <GrDown className={toggle ? styles.rotateUp : ''} />
        </button>

        {toggle && (
          <ul style={{ width: selectWidth }} className={styles.options}>
            {options.map((item, index) => (
              <li key={index} className={styles.option}>
                <span className={styles.optionText}>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

Selector.propTypes = {
  borderNone: PropTypes.bool,
  title: PropTypes.string,
  options: PropTypes.array,
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  selectWidth: PropTypes.string,
}

export default Selector
