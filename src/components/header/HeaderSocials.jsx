import React from 'react'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import './headerSocials.css'

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
      <a href="https://linkedin.com" target='_blank'><BsLinkedin /></a>
      <a href="https://hithub.com" target='_blank'><FaGithub /></a>
      <a href="https://teste.com" target='_blank'><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials