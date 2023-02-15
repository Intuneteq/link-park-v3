import React, { useState } from 'react'

import { LIBRARY_CONTENTS } from './contents'
import { AccordionIcon, Buttons, LinkButton } from '../../../components/atoms'
import { Container } from '../../../components/templates'
import { Icons, Images } from '../../../constants'
import styles from './library.module.scss'

const LibrarySlugs = () => {
  const [active, setActive] = useState(null)
  const { subjectContent, subjectCardContent } = LIBRARY_CONTENTS

  const handleToggleAccordion = (i) => {
    if (active === i) {
      return setActive(null)
    }
    setActive(i)
  }

  return (
    <Container name={'Library'}>
      <section className={styles.slugs}>
        <div className={styles.subjectHolder}>
          <div className={styles.subjectCard}>
            <div className={[styles.cardImg, 'img-size'].join(' ')}>
              <img src={Images.subject} alt='subject' />
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
              <p>Mr James Joeseph</p>
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
            {subjectContent.map((item, index) => (
              <button
                type='button'
                key={index}
                onClick={() => handleToggleAccordion(index)}
                className={[styles.accordion].join(' ')}
              >
                <div>
                  <h6>Number Bases</h6>
                  <AccordionIcon toggle={active === index} />
                </div>
                {active === index && <p>{item.content}</p>}
              </button>
            ))}
          </div>
        </div>
      </section>
    </Container>
  )
}

export default LibrarySlugs
