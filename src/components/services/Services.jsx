import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services-container'>
        <article className='service'>
          <div className='service-head'>
            <h3>React</h3>
          </div>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon' />
              <p>Hooks
              </p>
            </li>
            <li>
              <BiCheck className='service-list-icon' />
              <p>React Router
              </p>
            </li>
            <li>
              <BiCheck className='service-list-icon' />
              <p>useContext
              </p>
            </li>
            <li>
              <BiCheck className='service-list-icon' />
              <p>CSS Modules
              </p>
            </li>
            <li>
              <BiCheck className='service-list-icon' />
              <p>PropTypes
              </p>
            </li>
            <li>
              <BiCheck className='service-list-icon' />
              <p>Componentes funcionais
              </p>
            </li>
            <li>
              <BiCheck className='service-list-icon' />
              <p>Eventos
              </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service-head'>
            <h3>Javascript</h3>
          </div>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon' />
              <p>Objetos
              </p>
            </li>
            <li>
              <BiCheck className='service-list-icon' />
              <p>Strings
              </p>
            </li>
            <li>
              <BiCheck className='service-list-icon' />
              <p>Arrays
              </p>
            </li>
            <li>
              <BiCheck className='service-list-icon' />
              <p>Promisses
              </p>
            </li>
            <li>
              <BiCheck className='service-list-icon' />
              <p>Fetch
              </p>
            </li>
            <li>
              <BiCheck className='service-list-icon' />
              <p>NPM
              </p>
            </li>
            <li>
              <BiCheck className='service-list-icon' />
              <p>GIT
              </p>
            </li>
            <li>
              <BiCheck className='service-list-icon' />
              <p>RegExp
              </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service-head'>
            <h3>HTML/CSS</h3>
          </div>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon' />
              <p>TailwindCSS
              </p>
            </li>
            <li>
              <BiCheck className='service-list-icon' />
              <p>Grid layout
              </p>
            </li>
            <li>
              <BiCheck className='service-list-icon' />
              <p>FlexBox
              </p>
            </li>
            <li>
              <BiCheck className='service-list-icon' />
              <p>Layout Responsivo
              </p>
            </li>
            <li>
              <BiCheck className='service-list-icon' />
              <p>HTML semântico
              </p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services