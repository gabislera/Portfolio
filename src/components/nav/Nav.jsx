import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageRoundedDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a
        className={activeNav === '#' ? 'active' : ''}
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
        className={activeNav === '#contact' ? 'active' : ''}
        onClick={() => setActiveNav('#contact')}
        href="#contact">
        <BiMessageRoundedDetail />
      </a>
    </nav>
  )
}

export default Nav