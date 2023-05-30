import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import { AccordionIcon, Buttons, LinkButton } from '../../../components/atoms'
import { Container } from '../../../components/templates'
import { Icons, Images } from '../../../constants'

import { useGetSubjectByIdQuery } from '../api/studentsApiSlice'

import styles from './library.module.scss'

const LibrarySlugs = () => {
  const [active, setActive] = useState(null)

  const { slugs } = useParams()
  const SUBJECT = useGetSubjectByIdQuery(slugs)

  const handleToggleAccordion = (i) => {
    if (active === i) {
      return setActive(null)
    }
    setActive(i)
  }

  if (SUBJECT.isLoading) {
    return <p>Loading...</p>
  }

  if (SUBJECT.isSuccess) {
    const subject = SUBJECT.data

    const subjectCardContent = [
      {
        title: 'Subject: ',
        content: subject.title,
      },
      {
        title: 'Lessons: ',
        content: subject.lessons,
      },
      {
        title: 'Class: ',
        content: subject.class,
      },
    ]

    return (
      <Container name={'Library'}>
        <section className={styles.slugs}>
          <div className={styles.subjectHolder}>
            <div className={styles.subjectCard}>
              <div className={[styles.cardImg, 'img-size'].join(' ')}>
                <img src={subject.image} alt='subject' />
              </div>
              {subjectCardContent.map((item, index) => (
                <div key={index} className={styles.cardContent}>
                  <h6>{item.title}</h6>
                  <p>{item.content}</p>
                </div>
              ))}
              <div className={styles.teacherContainer}>
                <div className={[styles.teacher, 'img-size'].join(' ')}>
                  <img src={Images.teacher} alt='teacher' />
                </div>
                <h6>Teacher:</h6>
                <p>{subject.teacher}</p>
              </div>
            </div>
            <Buttons
              type='button'
              classType='secondary'
              text='Submit Assignment'
              height={3}
            />
          </div>
          <div className={styles.accordionContainer}>
            <div className={styles.accordionHead}>
              <h3>Course Outline</h3>
              <div style={{ gap: '20px' }}>
                <LinkButton
                  path='#'
                  button
                  btnItems={{ name: 'Save for later', icon: Icons.save }}
                />
                <LinkButton
                  path='#'
                  button
                  btnItems={{ name: 'Download', icon: Icons.download }}
                />
              </div>
            </div>
            <div className={styles.accordionHolder}>
              {subject.outline.map((item) => (
                <button
                  type='button'
                  key={item.key}
                  onClick={() => handleToggleAccordion(item.key)}
                  className={[styles.accordion].join(' ')}
                >
                  <div>
                    <h6>{item.topic}</h6>
                    <AccordionIcon toggle={active === item.key} />
                  </div>
                  {active === item.key && <p>{item.description}</p>}
                </button>
              ))}
            </div>
          </div>
        </section>
      </Container>
    )
  }
}

export default LibrarySlugs
