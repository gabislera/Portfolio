import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const dataTestimonials = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur iusto quo eaque, ipsum doloribus laborum delectus consectetur soluta exercitationem molestiae, adipisci dolore consequatur accusamus enim quis saepe. Totam, explicabo.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur iusto quo eaque, ipsum doloribus laborum delectus consectetur soluta exercitationem molestiae, adipisci dolore consequatur accusamus enim quis saepe. Totam, explicabo.'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur iusto quo eaque, ipsum doloribus laborum delectus consectetur soluta exercitationem molestiae, adipisci dolore consequatur accusamus enim quis saepe. Totam, explicabo.'
  },
  {
    avatar: AVTR4,
    name: 'Jeff Styles',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur iusto quo eaque, ipsum doloribus laborum delectus consectetur soluta exercitationem molestiae, adipisci dolore consequatur accusamus enim quis saepe. Totam, explicabo.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials-container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >

        {
          dataTestimonials.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client-avatar'>
                  <img src={avatar} />
                </div>
                <h5 className='client-name'>{name}</h5>
                <small className='client-review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials