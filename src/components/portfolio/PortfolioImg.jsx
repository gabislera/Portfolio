import React from 'react'

const PortfolioImg = ({ id, image, title, github, demo }) => {
  return (
    <article key={id} className='portfolio-item'>
      <div className='portfolio-item-image'>
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className='portfolio-item-cta'>
        <a className='btn ' href={github} target='_blank' >Github</a>
        <a className='btn btn-primary' href={demo} target='_blank' >Demo</a>
      </div>
    </article>
  )
}

export default PortfolioImg