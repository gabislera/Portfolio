import { useState, useEffect } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageRoundedDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { FiBox } from 'react-icons/fi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  useEffect(() => {
    const handleScroll = () => {
      const about = document.querySelector('#about')
      const experience = document.querySelector('#experience')
      const services = document.querySelector('#services')
      const projects = document.querySelector('#projects')
      const contact = document.querySelector('#contact')
      const scrollPosition = window.scrollY

      console.log(scrollPosition, services.offsetTop)

      if (scrollPosition < about.offsetTop - 100) {
        setActiveNav('#')
      } else if (scrollPosition < experience.offsetTop - 80) {
        setActiveNav('#about')
      } else if (scrollPosition < services.offsetTop - 100) {
        setActiveNav('#experience')
      } else if (scrollPosition < projects.offsetTop - 80) {
        setActiveNav('#services')
      } else if (scrollPosition < contact.offsetTop - 100) {
        setActiveNav('#projects')
      } else {
        setActiveNav('#contact')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav>
      <a className={activeNav === '#' ? 'active' : ''}
        onClick={() => setActiveNav('#')}
        href="#">
        <AiOutlineHome />
      </a>
      <a
        className={activeNav === '#about' ? 'active' : ''}
        onClick={() => setActiveNav('#about')}
        href="#about">
        <AiOutlineUser />
      </a>
      <a
        className={activeNav === '#experience' ? 'active' : ''}
        onClick={() => setActiveNav('#experience')}
        href="#experience">
        <BiBook />
      </a>
      <a
        className={activeNav === '#services' ? 'active' : ''}
        onClick={() => setActiveNav('#services')}
        href="#services">
        <RiServiceLine />
      </a>
      <a
        className={activeNav === '#projects' ? 'active' : ''}
        onClick={() => setActiveNav('#projects')}
        href="#projects">
        <FiBox />
      </a>
      <a
        className={activeNav === '#contact' ? 'active' : ''}
        onClick={() => setActiveNav('#contact')}
        href="#contact">
        <BiMessageRoundedDetail />
      </a>
    </nav>
  )
}

export default Nav