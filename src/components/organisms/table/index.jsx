import React from 'react'
import PropTypes from 'prop-types'

import useGetWindowResize from '../../../hooks/useGetWindowResize'
import styles from './table.module.scss'

const Table = ({ content }) => {
  const { isMobile } = useGetWindowResize()
  return (
    <table className={styles.assignment_table}>
      <thead className={styles.table_head}>
        <tr>
          {content.head.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.table_body}>
        {content.body.map((item, index) => (
          <tr key={index}>
            <td className={styles.title}>
              {!isMobile && (
                <div className={styles.body_image}>
                  {item.bodyHead.headImg ? (
                    <span className={[styles.title_img, 'img-size'].join(' ')}>
                      <img src={item.bodyHead.headImg} alt='heart' />
                    </span>
                  ) : null}
                </div>
              )}
              <div className={styles.body_head}>
                <span className={styles.head_title}>
                  {item.bodyHead.headTitle}
                </span>{' '}
                <span className={styles.head_text}>
                  {item.bodyHead.headText}
                </span>
              </div>
            </td>
            {item.bodyItems.map((tableItem, index) => (
              <td
                key={index}
                className={[
                  styles.table_grade,
                  `${tableItem.toLowerCase()}`,
                ].join(' ')}
              >
                {tableItem}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  content: PropTypes.any,
}

export default Table
