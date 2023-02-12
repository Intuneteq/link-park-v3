import React from 'react'
import PropTypes from 'prop-types'

import { Pagination } from '../../atoms'
import { Back, Selector } from '../../molecules'
import useGetWindowResize from '../../../hooks/useGetWindowResize'
import styles from './resultbody.module.scss'

const ResultBoard = ({
  selectors,
  result,
  cardPerPage,
  pagesVisited,
  changePage,
  backbutton,
}) => {
  const { isMobile } = useGetWindowResize()
  return (
    <section className={styles.results__body}>
      <div className={styles.results__body_header}>
        {backbutton && <Back />}
        {isMobile && <h4>Result</h4>}
        <h3>
          Overall Position <span>2nd</span>
        </h3>
      </div>
      <div className={styles.results__body_selctor}>
        {selectors.map((item, index) => (
          <Selector
            key={index}
            title={item.title}
            options={item.options}
            width={isMobile ? '100%' : '33%'}
            selectWidth={isMobile ? '100%' : '13.063rem'}
            height='3rem'
            padding='0.875rem 1.25rem'
          />
        ))}
      </div>
      <div className={styles.results__body_result}>
        <table className={styles.result_table}>
          <thead>
            <tr>
              <th className={styles.result_first}>Subject</th>
              <th>Grade</th>
              <th>Remark</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {result
              .slice(pagesVisited, pagesVisited + cardPerPage)
              .map((item, index) => (
                <tr key={index} className={styles.items}>
                  <td className={styles.result_first}>{item.subject}</td>
                  <td>100</td>
                  <td>{item.Remark}</td>
                  <td
                    className={item.score >= 65 ? styles.green : styles.yellow}
                  >
                    {item.score}/100
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <table className={styles.result_conclusion}>
          <tbody>
            <tr>
              <th className={styles.result_first}>Total Score</th>
              <th>100</th>
              <th>Excellent</th>
              <th className={styles.green}>98/100</th>
            </tr>
          </tbody>
        </table>
        <Pagination
          itemPerPage={cardPerPage}
          contentLength={result.length}
          changePage={changePage}
        />
      </div>
    </section>
  )
}

ResultBoard.propTypes = {
  selectors: PropTypes.array.isRequired,
  result: PropTypes.array.isRequired,
  cardPerPage: PropTypes.number,
  pagesVisited: PropTypes.number,
  changePage: PropTypes.func,
  backbutton: PropTypes.bool,
}

export default ResultBoard
