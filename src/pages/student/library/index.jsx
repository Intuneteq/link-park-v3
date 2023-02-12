import React from 'react'
import { Link } from 'react-router-dom'

import { LIBRARY_CONTENTS } from './contents'
import { Container } from '../../../components/templates'
import { Images } from '../../../constants'
import styles from './library.module.scss'

const Library = () => {
  const { libraryItems } = LIBRARY_CONTENTS

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
