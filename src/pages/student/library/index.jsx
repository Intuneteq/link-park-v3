import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

// import { LIBRARY_CONTENTS } from './contents'
import { Container } from '../../../components/templates'
// import { Images } from '../../../constants'
import { selectCurrentUserId } from '../../auth/api/authSlice'
import { useGetAllSubjectsQuery } from '../api/studentsApiSlice'

import styles from './library.module.scss'

const Library = () => {
  // const { libraryItems } = LIBRARY_CONTENTS
  const userId = useSelector(selectCurrentUserId)
  const result = useGetAllSubjectsQuery('getSubjects')

  if (result.isLoading) {
    // Show Loading spinner
    return <p>...Loading</p>
  }

  let libraryItems
  if (result.isSuccess) {
    libraryItems = result.data
    return (
      <Container name={'Library'}>
        <div className={styles.library__body_cards}>
          {libraryItems.slice(0, 8).map((item, index) => (
            <Link
              to={`/student/${userId}/library/${item.title
                .toLocaleLowerCase()
                .split(' ')
                .join('')}`}
              key={index}
              className={styles.library_card}
            >
              <div className={[styles.subject_img, 'img-size'].join(' ')}>
                <img src={item.image} alt='subject' />
              </div>
              <h6>{item.title}</h6>
              <p>Teacher: {item.teacher}</p>
              <span>Class: {'SS2'}</span>
            </Link>
          ))}
        </div>
        <div className={[styles.library__body_btn, 'app__flex'].join(' ')}>
          <button className='btn-secondary'>Load more</button>
        </div>
      </Container>
    )
  }
}

export default Library
