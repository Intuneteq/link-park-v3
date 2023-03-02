import React from 'react'
import { useNavigate } from 'react-router-dom'

import './about.scss'
import { Testimonials, Footer } from '../../components/organisms'
import { Buttons } from '../../components/atoms'

const About = () => {
  const navigate = useNavigate()

  return (
    <main>
      <div className='aboutUs'>
        <section className='aboutUs__main app__flex-2'>
          <div className='aboutUs__main-content'>
            <h1 className='head-text'>
              Education made <span>Easy</span>
            </h1>
            <div className='aboutUs__main-inner'>
              <hr />
              <p className='p-text'>
                LinkPark is an edutech platform that is built to <br /> support
                the existing school system to bring out the <br /> best out of
                students.
              </p>
            </div>
            <Buttons
              type='button'
              text='Get Started'
              height={3.875}
              width={10.75}
              classType={'primary'}
              to={'/user'}
            />
          </div>
          <div className='aboutUs__img'>
            <img
              src='https://res.cloudinary.com/dxje0rp9f/image/upload/v1672419550/Link%20Park/unsplash_DNkoNXQti3c_tnqff5.png'
              alt=''
            />
          </div>
          <div className='frame'></div>
          <div className='frame2'></div>
          <button
            onClick={() => navigate('/user')}
            className='btn-primary btn-mobile'
          >
            {' '}
            Get Started{' '}
          </button>
        </section>

        <section className='boxes'>
          <img
            className='bigPurple'
            src='https://res.cloudinary.com/dxje0rp9f/image/upload/v1672582848/Link%20Park/Rectangle_107_l9cldi.png'
            alt=''
          />
          <img
            className='smallGreen'
            src='https://res.cloudinary.com/dxje0rp9f/image/upload/v1672582848/Link%20Park/Rectangle_108_yshqdn.png'
            alt=''
          />
          <img
            className='small'
            src='https://res.cloudinary.com/dxje0rp9f/image/upload/v1672582848/Link%20Park/Rectangle_103_fbddws.png'
            alt=''
          />
          <img
            className='big'
            src='https://res.cloudinary.com/dxje0rp9f/image/upload/v1672582848/Link%20Park/Rectangle_104_bsu6ii.png'
            alt=''
          />
        </section>

        <section className='app__flex-2 section2'>
          <div className='section2__img'>
            <img
              src='https://res.cloudinary.com/dxje0rp9f/image/upload/v1673446250/Link%20Park/Rectangle_106_nwmyjf.png'
              alt=''
            />
          </div>
          <div className='section2__content'>
            <h3>Every Student is Special</h3>
            <p>
              At LinkPark, we believe that every student is special, the only
              reason why they struggle with their academics is the lack of
              special attention and support they need to become the star they
              are meant to be. The physical school is is limited in bridging
              this gap because of its mass teaching method, and very minimal way
              of tracking student progress. However, with a fully digitalized
              system, students can be tracked, parents can be involved, and the
              gap can be bridged.
            </p>
          </div>
        </section>

        <section className='app__flex-2 section3'>
          <div className='section3__content'>
            <h3>Not a school</h3>
            <p>
              LinkPark is not a digital school, rather , it is a digital tool to
              help schools to help students. LinkPark was founded in July, 2022,
              and headquartered at Akure, Ondo state. LinkPark team is led by
              Olanitori Tobi, a graduate of Computer Engineering from FUOYE, and
              a self taught Programmer.
            </p>
          </div>
          <div className='section3__img'>
            <img
              src='https://res.cloudinary.com/dxje0rp9f/image/upload/v1673446386/Link%20Park/unsplash_s9CC2SKySJM_1_qzsoaq.png'
              alt=''
            />
          </div>
        </section>

        <section className='section4'>
          <h1>The Team</h1>
          <div className='app__flex-2 section4__img-container'>
            <div>
              <div className='section4__card'>
                <img
                  src='https://res.cloudinary.com/dxje0rp9f/image/upload/v1672557412/Link%20Park/unsplash_yluUEc7NhfM_fx8wwo.png'
                  alt=''
                />
              </div>
              <div className='section4__card-content'>
                <h4>Temitope Adekunle</h4>
                <p>Developer</p>
              </div>
            </div>
            <div>
              <div className='section4__card'>
                <img
                  src='https://res.cloudinary.com/dxje0rp9f/image/upload/v1672557412/Link%20Park/unsplash_NYiYc13lKAY_qrqd8c.png'
                  alt=''
                />
              </div>
              <div className='section4__card-content'>
                <h4>Temitope Adekunle</h4>
                <p>Developer</p>
              </div>
            </div>
            <div>
              <div className='section4__card'>
                <img
                  src='https://res.cloudinary.com/dxje0rp9f/image/upload/v1672557412/Link%20Park/unsplash_aoEwuEH7YAs_u6yzhb.png'
                  alt=''
                />
              </div>
              <div className='section4__card-content'>
                <h4>Temitope Adekunle</h4>
                <p>Developer</p>
              </div>
            </div>
            <div>
              <div className='section4__card'>
                <img
                  src='https://res.cloudinary.com/dxje0rp9f/image/upload/v1672557412/Link%20Park/unsplash_sbFdK0lTUXc_fxy9zc.png'
                  alt=''
                />
              </div>
              <div className='section4__card-content'>
                <h4>Temitope Adekunle</h4>
                <p>Developer</p>
              </div>
            </div>
          </div>
        </section>

        <section className='testimonials'>
          <Testimonials />
        </section>
      </div>

      <section className=' column-flex newsletter'>
        <h1>Our Newsletter</h1>
        <p>
          Subscribe to our News Letter to get updates and offers as it drops
        </p>
        <div className='newsletter__input app__flex'>
          <input type='text' placeholder=' Enter your email address' />{' '}
          <div>
            <Buttons
              text='Subscribe'
              height={3}
              width={8}
              classType={'primary'}
              to={'/user'}
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default About
