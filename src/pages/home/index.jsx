import React from 'react'

import { Images } from '../../constants'
import { Footer, Testimonials } from '../../components/organisms'
import { HOMEPAGE_CONTENT } from './contents'
import './home.scss'
import { Buttons } from '../../components/atoms'

const Home = () => {
  const {
    heroSection,
    sectionTwo,
    sectionThree,
    sectionFour,
    sectionFive,
    sectionSix,
  } = HOMEPAGE_CONTENT

  return (
    <main className='home'>
      <section className='home__section1'>
        <article className='home__section1-article'>
          <h1>{heroSection.headText}</h1>
          <p>{heroSection.text}</p>
          <div className='app__flex'>
            <Buttons
              type='button'
              text='Get Started'
              height={3.875}
              width={10.75}
              classType={'tertiary'}
            />
            <button className='about-btn'>About us</button>
          </div>
        </article>
        <div className='home__section1-img img-size'>
          <img src={Images.heroImage} alt='child' />
        </div>
      </section>
      <section className='home__digital'>
        <h3>{sectionTwo.headText}</h3>
        <p>{sectionTwo.subText}</p>
        <article className='section__digital-modal'>
          {sectionTwo.digitalizing.map((item, index) => (
            <div className='modal-div' key={index}>
              <div className='img-size'>
                <img src={item.img} alt='item' />
              </div>
              <h6>{item.head}</h6>
              <p>{item.text}</p>
            </div>
          ))}
        </article>
      </section>
      <section className='home__works'>
        <h3>{sectionThree.headText}</h3>
        <p>{sectionThree.subText}</p>
        <article className='home__works-article'>
          <div className='article-content'>
            <h3>{sectionThree.register.headText}</h3>
            <p>{sectionThree.register.subText}</p>
          </div>
          <div className='article-img img-size'>
            <img src={sectionThree.register.img} alt='register' />
          </div>
          <div className='article-arrow'>
            <img src={sectionThree.register.arrow} alt='arrows' />
          </div>
        </article>
        <article className='home__works-article'>
          <div className='article-img img-size'>
            <img src={sectionThree.monitor.img} alt='activities' />
          </div>
          <div className='article-content'>
            <h3>{sectionThree.monitor.headText}</h3>
            <p className='p-text'>{sectionThree.monitor.subText}</p>
          </div>
          <div className='article-arrow-2'>
            <img src={sectionThree.monitor.arrow} alt='arrows' />
          </div>
        </article>
        <article className='home__works-article'>
          <div className='article-content'>
            <h3>{sectionThree.notification.headText}</h3>
            <p>{sectionThree.notification.subText}</p>
          </div>
          <div className='article-img img-size'>
            <img src={sectionThree.notification.img} alt='register' />
          </div>
        </article>
      </section>
      <section className='home__achievements'>
        <h3>{sectionFour.headText}</h3>
        <article className='home__achievements-content'>
          {sectionFour.achievements.map((item, index) => (
            <div className='achievements' key={index}>
              <h5>{item.figure}</h5>
              <p>{item.text}</p>
            </div>
          ))}
        </article>
      </section>
      <section className='home__track'>
        <h2>
          Effectively Track Your <span>Wards Learning</span> Process
        </h2>
        <p>{sectionFive.subText}</p>
        <Buttons
          width={17.25}
          height={3.875}
          type='button'
          text='Get Started'
          classType='primary'
        />
      </section>
      <section className='home__walk'>
        <div className='dot1 img-size'>
          <img src={sectionSix.dot1} alt='dot1' />
        </div>
        <div className='home__walk-img img-size'>
          <img src={sectionSix.video} alt='video' />
        </div>
        <article className='home__walk-article'>
          <h2>{sectionSix.headText}</h2>
          <p>{sectionSix.subText}</p>
          <Buttons
            type='button'
            text='About Us'
            classType='secondary'
            width={10.4}
            height={3.875}
          />
        </article>
        <div className='dot2 img-size'>
          <img src={sectionSix.dot2} alt='dot2' />
        </div>
      </section>
      <section>
        <Testimonials />
      </section>
      <Footer />
    </main>
  )
}

export default Home
