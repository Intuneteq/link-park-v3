import React, { useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { Buttons } from '../../../components/atoms'
import { Container } from '../../../components/templates'
import { selectCurrentUserId } from '../../auth/api/authSlice'
import { setSubjects } from '../api/studentSlice'
import { useGetAllSubjectsQuery } from '../api/studentsApiSlice'

import styles from './library.module.scss'

const Library = () => {
  const [showScrollbar, setShowScrollbar] = useState(false)
  const [index, setIndex] = useState(8)
  const dispatch = useDispatch()

  const userId = useSelector(selectCurrentUserId)
  const result = useGetAllSubjectsQuery('getSubjects')

  // Show horizontal scroll bar if item in libraryItems is > 8 or the load more button was clicked
  useLayoutEffect(() => {
    const checkScrollbarVisibility = () => {
      const libraryBodyCards = document.getElementById('libraryBodyCards')
      const loadMore =
        libraryBodyCards &&
        libraryBodyCards.scrollWidth > libraryBodyCards.clientWidth

      if (loadMore) {
        setShowScrollbar(true)
      } else {
        setShowScrollbar(false)
      }
    }

    window.addEventListener('resize', checkScrollbarVisibility)
    checkScrollbarVisibility()

    return () => {
      window.removeEventListener('resize', checkScrollbarVisibility)
    }
  }, [])

  if (result.isLoading) {
    // Show Loading spinner
    return <p>...Loading</p>
  }

  if (result.isSuccess) {
    dispatch(setSubjects(result.data))
    const libraryItems = result.data

    const handleLoadMore = () => {
      const totalIndex = libraryItems.length
      setIndex(totalIndex)
    }

    return (
      <Container name={'Library'}>
        <div
          id='libraryBodyCards'
          className={[
            styles.library__body_cards,
            showScrollbar ? styles.show_scrollbar : '',
          ].join(' ')}
        >
          {libraryItems.slice(0, index).map((item) => (
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
              <span>Class: {item.class}</span>
            </Link>
          ))}
        </div>
        <div className={[styles.library__body_btn, 'app__flex'].join(' ')}>
          <Buttons
            onClick={handleLoadMore}
            width={9}
            height={3}
            text='load more'
            classType='secondary'
            type='button'
            fontSize='1.25'
            fontWeight={400}
          />
        </div>
      </Container>
    )
  }
}

export default Library
