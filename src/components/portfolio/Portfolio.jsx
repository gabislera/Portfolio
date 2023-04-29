import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio title 1',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Portfolio title 2',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio title 3',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Portfolio title 4',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Portfolio title 5',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Portfolio title 6',
    github: 'https://github.com',
    demo: 'https://github.com',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio-container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio-item'>
                <div className='portfolio-item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio-item-cta'>
                  <a className='btn' href={github} target='_blank' >Github</a>
                  <a className='btn btn-primary' href={demo} target='_blank' >Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio