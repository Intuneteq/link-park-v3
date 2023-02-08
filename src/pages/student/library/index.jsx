import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from '../../../components/templates'
import { Images } from '../../../constants'
import styles from './library.module.scss'

const Library = () => {
  const libraryItems = [
    {
      subject: 'Mathematics',
      teacher: 'Mr James Isah',
      class: 'SS2',
    },
    {
      subject: 'English',
      teacher: 'Mr James Isah',
      class: 'SS2',
    },
    {
      subject: 'Physics',
      teacher: 'Mr James Isah',
      class: 'SS2',
    },
    {
      subject: 'Chemistry',
      teacher: 'Mr James Isah',
      class: 'SS2',
    },
    {
      subject: 'Biology',
      teacher: 'Mr James Isah',
      class: 'SS2',
    },
    {
      subject: 'Agriculture',
      teacher: 'Mr James Isah',
      class: 'SS2',
    },
    {
      subject: 'CRK',
      teacher: 'Mr James Isah',
      class: 'SS2',
    },
    {
      subject: 'Futher Mathematics',
      teacher: 'Mr James Isah',
      class: 'SS2',
    },
    {
      subject: 'Social studies',
      teacher: 'Mr James Isah',
      class: 'SS2',
    },
    {
      subject: 'Geography',
      teacher: 'Mr James Isah',
      class: 'SS2',
    },
  ]
  return (
    <Container name={'Library'}>
      <div className={styles.library__body_cards}>
        {libraryItems.slice(0, 8).map((item, index) => (
          <Link
            to={`/student/library/${item.subject
              .toLocaleLowerCase()
              .split(' ')
              .join('')}`}
            key={index}
            className={styles.library_card}
          >
            <div className={[styles.subject_img, 'img-size'].join(' ')}>
              <img src={Images.english} alt='subject' />
            </div>
            <h6>{item.subject}</h6>
            <p>Teacher: {item.teacher}</p>
            <span>Class: {item.class}</span>
          </Link>
        ))}
      </div>
      <div className={[styles.library__body_btn, 'app__flex'].join(' ')}>
        <button className='btn-secondary'>Load more</button>
      </div>
    </Container>
  )
}

export default Library
