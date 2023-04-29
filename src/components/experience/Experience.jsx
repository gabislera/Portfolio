import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience-container'>
        <div className='experience-frontend'>
          <h3>Frontend Developer</h3>
          <div className='experience-content'>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>CSS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Javascript</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>React</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience-others'>
          <h3>Other skills</h3>
          <div className='experience-content'>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Ingles</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Figma</h4>
                <small>Basic</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Photoshop</h4>
                <small>Basic</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Premiere</h4>
                <small>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience