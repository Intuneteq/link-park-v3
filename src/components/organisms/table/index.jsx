import React from 'react'

import './table.scss'

const Table = ({ content }) => {
  return (
    <table className='assignment-table'>
      <thead className='table_head'>
        <tr>
          {content.head.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody className='table_body'>
        {content.body.map((item, index) => (
          <tr key={index}>
            <td className='title app__flex-3'>
              <div className='body_image'>
                {item.bodyHead.headImg ? (
                  <span className='title-img img-size'>
                    <img src={item.bodyHead.headImg} alt='heart' />
                  </span>
                ) : null}
              </div>
              <div className='column-flex body_head'>
                <span className='head_title'>{item.bodyHead.headTitle}</span>{' '}
                <span className='head_text'>{item.bodyHead.headText}</span>
              </div>
            </td>
            {item.bodyItems.map((tableItem, index) => (
              <td
                key={index}
                className={`table-grade ${tableItem.toLowerCase()}`}
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

export default Table
