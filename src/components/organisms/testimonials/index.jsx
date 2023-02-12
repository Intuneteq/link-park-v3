import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import './testimonials.scss'

const Testimonials = () => {
  const testimonies = [
    {
      img: 'https://res.cloudinary.com/intuneteq/image/upload/v1673323058/Link-park-v2/Ellipse_458_gadiaa.png',
      name: 'Mrs Janet Jones',
      testimony:
        "Link-Park is really a saver, ever since my children school introduced this i have been able to monitor all my children's school activities such as their tests score assignments, results and upcoming events.Thanks so much for this. 5 stars for me.",
      star: 'https://res.cloudinary.com/intuneteq/image/upload/v1673323317/Link-park-v2/Frame_15947_vs7v20.png',
    },
    {
      img: 'https://res.cloudinary.com/intuneteq/image/upload/v1673323058/Link-park-v2/Ellipse_458_gadiaa.png',
      name: 'Mrs Janet Jones',
      testimony:
        "Link-Park is really a saver, ever since my children school introduced this i have been able to monitor all my children's school activities such as their tests score assignments, results and upcoming events.Thanks so much for this. 5 stars for me.",
      star: 'https://res.cloudinary.com/intuneteq/image/upload/v1673323317/Link-park-v2/Frame_15947_vs7v20.png',
    },
    {
      img: 'https://res.cloudinary.com/intuneteq/image/upload/v1673323058/Link-park-v2/Ellipse_458_gadiaa.png',
      name: 'Mrs Janet Jones',
      testimony:
        "Link-Park is really a saver, ever since my children school introduced this i have been able to monitor all my children's school activities such as their tests score assignments, results and upcoming events.Thanks so much for this. 5 stars for me.",
      star: 'https://res.cloudinary.com/intuneteq/image/upload/v1673323317/Link-park-v2/Frame_15947_vs7v20.png',
    },
  ]
  return (
    <section className='testimonials column-flex'>
      <h3 className='sub-text'>Testimonials</h3>
      <p className='p-text'>
        Over 500+ Schools uses Link Park and are very certified with us
      </p>
      <Swiper
        initialSlide={1}
        effect={'coverflow'}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 5,
          slideShadows: false,
        }}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
        className='mySwiper app__flex-3'
      >
        {testimonies.map((item, index) => (
          <SwiperSlide key={index} className='swipeItem'>
            <div className='card-head app__flex-3'>
              <div className='testifier img-size'>
                <img src={item.img} alt='testimony' />
              </div>
              <div className='testitier-details'>
                <h6>Mrs Janet Jones</h6>
                <p>Parent</p>
              </div>
            </div>
            <p className='card-body'>
              Link-Park is really a saver, ever since my children school
              introduced this i have been able to monitor all my childrens
              school activities such as their tests score assignments, results
              and upcoming events. Thanks so much for this. 5 stars for me.
            </p>
            <div className='card-star img-size'>
              <img
                src='https://res.cloudinary.com/intuneteq/image/upload/v1673323317/Link-park-v2/Frame_15947_vs7v20.png'
                alt='star'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials
