import { useEffect, useRef } from 'react'

const PortfolioVideo = ({ id, image, title, github, demo }) => {
  const ref = useRef()

  const handleMouseEnter = () => {
    ref.current?.play()
  }

  const handleMouseLeave = () => {
    ref.current?.pause()
    ref.current.currentTime = 0;
  }


  return (
    <div key={id} className='portfolio-item'>
      <div className='portfolio-item-image'>
        <video
          muted

          src={image}
          alt={title}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={ref} />
      </div>
      <h3>{title}</h3>
      <div className='portfolio-item-cta'>
        <a className='btn' href={github} target='_blank' >Github</a>
        <a className='btn btn-primary' href={demo} target='_blank' >Demo</a>
      </div>
    </div>
  )
}

export default PortfolioVideo