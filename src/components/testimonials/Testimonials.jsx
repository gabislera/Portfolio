import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/unopar.png'
import AVTR2 from '../../assets/origamid.png'
import AVTR3 from '../../assets/udemy.png'


// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const dataTestimonials = [
  {
    avatar: AVTR1,
    name: 'UNOPAR',
    sub: 'Análise e desenvolvimento de sistemas',
    review: 'Em andamento'
  },
  {
    avatar: AVTR2,
    name: 'Origamid',
    sub: 'React Completo',
    review: 'Hooks, React Router, useContext, CSS Modules, PropTypes, Eventos'
  },
  {
    avatar: AVTR2,
    name: 'Origamid',
    sub: 'Javascript Completo ES6+',
    review: 'Objetos, Strings, Arrays, Promisses, Fetch, RegExp, NPM, Git, Babel, Webpack '
  },
  {
    avatar: AVTR2,
    name: 'Origamid',
    sub: 'HTML e CSS para iniciantes',
    review: 'HTML, CSS, JavaScript, Git, CSS Grid Layout, CSS FlexBox, Layout Responsivo'
  },
  {
    avatar: AVTR3,
    name: 'Udemy',
    sub: 'Javascript completo para iniciantes',
    review: 'Paradigmas de programação moderna, Javascript básico, HTML, CSS'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Cursos realizados</h5>
      <h2>Formação</h2>

      <Swiper className='container testimonials-container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >

        {
          dataTestimonials.map(({ avatar, name, review, sub }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client-avatar'>
                  <img src={avatar} />
                </div>
                <h3>{name}</h3>
                <h5 className='client-name'>{sub}</h5>
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