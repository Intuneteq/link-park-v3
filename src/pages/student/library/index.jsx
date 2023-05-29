import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { Container } from '../../../components/templates'
import { selectCurrentUserId } from '../../auth/api/authSlice'
import { setSubjects } from '../api/studentSlice'
import { useGetAllSubjectsQuery } from '../api/studentsApiSlice'

import styles from './library.module.scss'

const Library = () => {
  const dispatch = useDispatch()

  const userId = useSelector(selectCurrentUserId)
  const result = useGetAllSubjectsQuery('getSubjects')

  if (result.isLoading) {
    // Show Loading spinner
    return <p>...Loading</p>
  }

  let libraryItems
  if (result.isSuccess) {
    dispatch(setSubjects(result.data))
    libraryItems = result.data
    return (
      <Container name={'Library'}>
        <div className={styles.library__body_cards}>
          {libraryItems.slice(0, 8).map((item) => (
            <Link
              to={`/student/${userId}/library/${item.id}`}
              key={item.id}
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
