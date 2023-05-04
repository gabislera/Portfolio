import React from 'react'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import './headerSocials.css'

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
      <a href="https://www.linkedin.com/in/gabiicarniel/" target='_blank'><BsLinkedin /></a>
      <a href="https://github.com/gabislera" target='_blank'><FaGithub /></a>
      <a href="https://www.instagram.com/gabscarniel/" target='_blank'><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials