import React from 'react'
import './header.css'
import Buttons from './Buttons'
import ProfilePhoto from '../../assets/profile1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className='container header-container'>
        <h5>Hello I'm</h5>
        <h1>Gabi Carniel</h1>
        <h5 className='text-light'>FrontEnd Developer</h5>
        <Buttons />
        <HeaderSocials />

        <div className='profile-photo'>
          <img src={ProfilePhoto} alt="" />
        </div>

        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header