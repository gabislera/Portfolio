import { useEffect, useRef } from 'react'
import './projectsVideo.css'

const ProjectsVideo = ({ id, image, title, github, demo }) => {
  const ref = useRef()

  const handleMouseEnter = () => {
    ref.current?.play()
  }

  const handleMouseLeave = () => {
    ref.current?.pause()
    ref.current.currentTime = 0;
  }

  useEffect(() => {
    ref.current?.pause()
    ref.current.currentTime = 0;
  }, [])

  return (
    <div key={id} className='projects-item'>
      <div className='projects-item-image'>
        <video
          muted
          playsInline
          loop
          autoPlay
          src={image}
          alt={title}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={ref} />
      </div>
      <h3>{title}</h3>
      <div className='projects-item-cta'>
        <a className='btn' href={github} target='_blank' >Github</a>
        <a className='btn btn-primary' href={demo} target='_blank' >Demo</a>
      </div>
    </div>
  )
}

export default ProjectsVideo