import React, { useState } from 'react'
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
        <div onClick={() => setToggle(!toggle)} className={styles.selectBtn}>
          <span className={styles.sBtnText}>{options[0]}</span>
          <GrDown className={toggle ? styles.rotateUp : ''} />
        </div>

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

export default Selector
