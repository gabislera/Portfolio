import React from 'react'
import './about.css'
import AboutImage from '../../assets/imagem1.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about-container'>
        <div className='about-me'>
          <div className='about-me-image'>
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className='about-content'>
          {/* <div className='about-cards'>
            <article className='about-card'>
              <FaAward className='about-icon' />
              <h1>Experience</h1>
              <h2>3+ Years Working</h2>
            </article>

            <article className='about-card'>
              <FiUsers className='about-icon' />
              <h1>Clients</h1>
              <h2>200+ worldwide</h2>
            </article>

            <article className='about-card'>
              <VscFolderLibrary className='about-icon' />
              <h1>Projects</h1>
              <h2>80+ completed</h2>
            </article>
          </div> */}

          <p>
            Olá! Meu nome é Gabriela, tenho 30 anos e sou uma desenvolvedora Front End em busca de novas oportunidades de aprendizado e crescimento profissional.
          </p>
          <p>
            Minhas principais habilidades incluem HTML, CSS, JavaScript e React. Além disso, tenho conhecimentos em UX/UI design, o que me permite criar interfaces mais intuitivas e atraentes para os usuários.
          </p>
          <p>
            Estou sempre aberta a novos desafios e projetos que possam contribuir para o meu desenvolvimento profissional e pessoal. Se você estiver procurando por um desenvolvedor dedicado e comprometido, fique à vontade para entrar em contato comigo. Será um prazer trabalhar com você!
          </p>

          <a className='btn btn-primary' href="#contact">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About