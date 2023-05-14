import React, { useState, useEffect } from 'react'
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
  const [school, setSchool] = useState('')

  useEffect(() => {
    setSchool(options[0]?.name)
  }, [options])

  const handleClick = function () {
    setToggle(!toggle)
  }

  const selectSchool = function (item) {
    setSchool(item.name)
    setToggle(!toggle)
  }

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
          onClick={(e) => handleClick(e)}
          className={styles.selectBtn}
        >
          <span className={styles.sBtnText}>{school}</span>
          <GrDown className={toggle ? styles.rotateUp : ''} />
        </button>

        {toggle && (
          <ul style={{ width: selectWidth }} className={styles.options}>
            {options.map((item, index) => (
              <button
                type='button'
                onClick={() => selectSchool(item)}
                key={item.id ?? index}
                className={styles.option}
              >
                <span className={styles.optionText}>{item.name}</span>
              </button>
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
  options: PropTypes.array.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  selectWidth: PropTypes.string,
}

export default Selector
