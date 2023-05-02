import React from 'react'
import './portfolio.css'
// import IMG1 from '../../assets/portfolio1.png'
import IMG1 from '../../assets/toDoList.jpg'
import IMG2 from '../../assets/cats.jpg'
import IMG3 from '../../assets/bikcraft.jpg'
import IMG4 from '../../assets/animaisfantasticos.jpg'
import IMG5 from '../../assets/pokedex.jpg'
import IMG6 from '../../assets/calculadora.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'To Do List com React',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Rede social com React',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Bikcraft',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Animais Fantásticos',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Pokedéx',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Calculadora',
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