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
            Sou estudante de Análise e Desenvolvimento de Sistemas, apaixonada por inovação, jogos e tecnologia. Já trabalhei com fotografia e estudei comunicação, mas foi na área de desenvolvimento Front End que me encontrei. Possuo certificação em HTML, CSS, Javascript e React.
          </p>
          <p>
            Além disso, tenho conhecimento em NextJs, TailwindCSS e React Native e estou estudando Typscript no momento. Através de estudos com UX/UI design, também entendo de criação de interfaces intuitivas e atraentes para os usuários.
          </p>
          <p>
            Sou uma pessoa que não tem medo de novos desafios e está sempre aberta para eles, interessada em projetos que possam aprimorar o meu conhecimento e contribuir para o meu desenvolvimento pessoal e profissional. Eu me adapto fácil à novas ferramentas e estou em constante aprendizado, tentando sempre acompanhar as demandas em constante evolução da área.
          </p>

          <a className='btn btn-primary' href="#contact">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About