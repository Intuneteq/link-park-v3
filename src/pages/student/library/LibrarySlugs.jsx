import React, { useState } from 'react'

import { AccordionIcon, LinkButton } from '../../../components/atoms'
import { Container } from '../../../components/templates'
import { Icons, Images } from '../../../constants'
import styles from './library.module.scss'

const LibrarySlugs = () => {
  const [active, setActive] = useState(null)

  const subjectContent = [
    {
      id: 1,
      title: 'Number Bases',
      content:
        'We normally work with numbers in base 10. In this section we consider numbers in base 2, often called binary numbers. In base 10 we use the digits 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. In base 2 we use only the digits 0 and 1. Binary numbers are at the heart of all computing systems since, in an electrical circuit, 0 represents no current flowing whereas 1 represents a current flowing. In base 10 we use a system of place values as shown below: 1000 100 10 1 4   2   1   5 → 4  × 1000 + 2  × 100 +1 ×10 + 5×  1 3   1   0   2 → 3 × 1000 + 1 × 100 + 2 × 1Note that, to obtain the place value for the next digit to the left, we multiply by 10. If we were to add another digit to the front (left) of the numbers above, that number would represent 10 000s. In base 2 we use a system of place values as shown below:',
    },
    {
      id: 2,
      title: 'Number Bases',
      content:
        'We normally work with numbers in base 10. In this section we consider numbers in base 2, often called binary numbers. In base 10 we use the digits 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. In base 2 we use only the digits 0 and 1. Binary numbers are at the heart of all computing systems since, in an electrical circuit, 0 represents no current flowing whereas 1 represents a current flowing. In base 10 we use a system of place values as shown below: 1000 100 10 1 4   2   1   5 → 4  × 1000 + 2  × 100 +1 ×10 + 5×  1 3   1   0   2 → 3 × 1000 + 1 × 100 + 2 × 1Note that, to obtain the place value for the next digit to the left, we multiply by 10. If we were to add another digit to the front (left) of the numbers above, that number would represent 10 000s. In base 2 we use a system of place values as shown below:',
    },
    {
      id: 3,
      title: 'Number Bases',
      content:
        'We normally work with numbers in base 10. In this section we consider numbers in base 2, often called binary numbers. In base 10 we use the digits 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. In base 2 we use only the digits 0 and 1. Binary numbers are at the heart of all computing systems since, in an electrical circuit, 0 represents no current flowing whereas 1 represents a current flowing. In base 10 we use a system of place values as shown below: 1000 100 10 1 4   2   1   5 → 4  × 1000 + 2  × 100 +1 ×10 + 5×  1 3   1   0   2 → 3 × 1000 + 1 × 100 + 2 × 1Note that, to obtain the place value for the next digit to the left, we multiply by 10. If we were to add another digit to the front (left) of the numbers above, that number would represent 10 000s. In base 2 we use a system of place values as shown below:',
    },
    {
      id: 4,
      title: 'Number Bases',
      content:
        'We normally work with numbers in base 10. In this section we consider numbers in base 2, often called binary numbers. In base 10 we use the digits 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. In base 2 we use only the digits 0 and 1. Binary numbers are at the heart of all computing systems since, in an electrical circuit, 0 represents no current flowing whereas 1 represents a current flowing. In base 10 we use a system of place values as shown below: 1000 100 10 1 4   2   1   5 → 4  × 1000 + 2  × 100 +1 ×10 + 5×  1 3   1   0   2 → 3 × 1000 + 1 × 100 + 2 × 1Note that, to obtain the place value for the next digit to the left, we multiply by 10. If we were to add another digit to the front (left) of the numbers above, that number would represent 10 000s. In base 2 we use a system of place values as shown below:',
    },
    {
      id: 5,
      title: 'Number Bases',
      content:
        'We normally work with numbers in base 10. In this section we consider numbers in base 2, often called binary numbers. In base 10 we use the digits 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. In base 2 we use only the digits 0 and 1. Binary numbers are at the heart of all computing systems since, in an electrical circuit, 0 represents no current flowing whereas 1 represents a current flowing. In base 10 we use a system of place values as shown below: 1000 100 10 1 4   2   1   5 → 4  × 1000 + 2  × 100 +1 ×10 + 5×  1 3   1   0   2 → 3 × 1000 + 1 × 100 + 2 × 1Note that, to obtain the place value for the next digit to the left, we multiply by 10. If we were to add another digit to the front (left) of the numbers above, that number would represent 10 000s. In base 2 we use a system of place values as shown below:',
    },
    {
      id: 6,
      title: 'Number Bases',
      content:
        'We normally work with numbers in base 10. In this section we consider numbers in base 2, often called binary numbers. In base 10 we use the digits 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. In base 2 we use only the digits 0 and 1. Binary numbers are at the heart of all computing systems since, in an electrical circuit, 0 represents no current flowing whereas 1 represents a current flowing. In base 10 we use a system of place values as shown below: 1000 100 10 1 4   2   1   5 → 4  × 1000 + 2  × 100 +1 ×10 + 5×  1 3   1   0   2 → 3 × 1000 + 1 × 100 + 2 × 1Note that, to obtain the place value for the next digit to the left, we multiply by 10. If we were to add another digit to the front (left) of the numbers above, that number would represent 10 000s. In base 2 we use a system of place values as shown below:',
    },
    {
      id: 7,
      title: 'Number Bases',
      content:
        'We normally work with numbers in base 10. In this section we consider numbers in base 2, often called binary numbers. In base 10 we use the digits 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. In base 2 we use only the digits 0 and 1. Binary numbers are at the heart of all computing systems since, in an electrical circuit, 0 represents no current flowing whereas 1 represents a current flowing. In base 10 we use a system of place values as shown below: 1000 100 10 1 4   2   1   5 → 4  × 1000 + 2  × 100 +1 ×10 + 5×  1 3   1   0   2 → 3 × 1000 + 1 × 100 + 2 × 1Note that, to obtain the place value for the next digit to the left, we multiply by 10. If we were to add another digit to the front (left) of the numbers above, that number would represent 10 000s. In base 2 we use a system of place values as shown below:',
    },
  ]

  const handleToggleAccordion = (i) => {
    if (active === i) {
      return setActive(null)
    }
    setActive(i)
  }

  return (
    <Container name={'Library'}>
      <section className={[styles.slugs, 'app__flex-3'].join(' ')}>
        <div className={styles.subjectHolder}>
          <div className={styles.subjectCard}>
            <div className={[styles.cardImg, 'img-size'].join(' ')}>
              <img src={Images.subject} alt='subject' />
            </div>
            <div className={[styles.cardContent, 'app__flex-5'].join(' ')}>
              <h6>Subject:</h6>
              <p>New General Mathematics</p>
            </div>
            <div className={[styles.cardContent, 'app__flex-5'].join(' ')}>
              <h6>Lessons:</h6>
              <p>16</p>
            </div>
            <div className={[styles.cardContent, 'app__flex-5'].join(' ')}>
              <h6>Class:</h6>
              <p>SS2</p>
            </div>
            <div className={[styles.teacherContainer, 'column-flex'].join(' ')}>
              <div className={[styles.teacher, 'img-size'].join(' ')}>
                <img src={Images.teacher} alt='teacher' />
              </div>
              <h6>Teacher:</h6>
              <p>Mr James Joeseph</p>
            </div>
          </div>
          <button className='btn-secondary'>Submit Assignment</button>
        </div>
        <div className={styles.accordionContainer}>
          <div className={[styles.accordionHead, 'app__flex-2'].join(' ')}>
            <h3>Course Outline</h3>
            <div style={{ gap: '20px' }} className='app__flex'>
              <LinkButton
                button
                btnItems={{ name: 'Save for later', icon: Icons.save }}
              />
              <LinkButton
                button
                btnItems={{ name: 'Download', icon: Icons.download }}
              />
            </div>
          </div>
          <div className={[styles.accordionHolder, 'column-flex'].join(' ')}>
            {subjectContent.map((item, index) => (
              <button
                type='button'
                key={index}
                onClick={() => handleToggleAccordion(index)}
                className={[styles.accordion].join(' ')}
              >
                <div className='app__flex-2'>
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
