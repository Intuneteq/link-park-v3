import React from 'react'

import { Testimonials, Footer } from '../../components/organisms'
import './parents.scss'

const Parents = () => {
  return (
    <main className='parents'>
      <section className='parents__section1 app__flex-2'>
        <article className='parents__section1-article'>
          <h1 className='head-text-2'>
            Including <span>YOU</span> in Work and Assessment at School
          </h1>
          <p className='p-text'>
            Bring your school along for the ride as they learn, and don't skip
            out on the assigned reading or assignments. View both your personal
            and academic work in one location.
          </p>
          <button className='btn-primary'>Get Started</button>
        </article>
        <div className='parents__section1-div img-size'>
          <img
            src='https://res.cloudinary.com/intuneteq/image/upload/v1673350450/Link-park-v2/Group_15934_ft3umv.png'
            alt='magnet'
          />
        </div>
      </section>
      <section className='parents__activities app__flex-2'>
        <div className='parents__activities-img img-size'>
          <img
            src='https://res.cloudinary.com/intuneteq/image/upload/v1673350727/Link-park-v2/Group_15935_dtrb8k.png'
            alt='activities'
          />
        </div>
        <article className='parents__activities-article'>
          <div className='arctivities-cap' />
          <h3 className='head-text-2'>Get Caught Up on Daily Activities</h3>
          <p className='p-text'>
            Obtain daily updates of tasks completed. As students finish practice
            sets covering various subjects and degrees of difficulty, they will
            keep receiving fresh notifications.
          </p>
        </article>
      </section>
      <section className='column-flex parents__progress'>
        <h2 className='head-text-2'>
          Your Dashboard and Inbox
          <br />
          will both provide progress reports.
        </h2>
        <div className='img-size'>
          <img
            src='https://res.cloudinary.com/intuneteq/image/upload/v1673321378/Link-park-v2/MBP_Mockup_cyihx1.png'
            alt='laptop'
          />
        </div>
      </section>
      <section className='parents__testimonials'>
        <Testimonials />
      </section>
      <section className='parents__started column-flex'>
        <p className='p-text'>
          Receive daily evaluations on students' performance in order to
          identify shortcomings and improve the appropriate areas.
        </p>
        <button className='btn-tertiary'>Get Started</button>
      </section>
      <Footer />
    </main>
  )
}

export default Parents
