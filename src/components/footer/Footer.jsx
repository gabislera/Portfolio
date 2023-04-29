import React from 'react'
import './footer.css'
import { FaInstagram } from 'react-icons/fa'
import { SlSocialTwitter } from 'react-icons/sl'
import { RxDiscordLogo } from 'react-icons/rx'

const Footer = () => {
  return (
    <footer>
      <a className='footer-logo' href="#">Logo</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer-socials'>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://twitter.com"><SlSocialTwitter /></a>
        <a href="https://discord.com"><RxDiscordLogo /></a>
      </div>

      <div className='footer-copyright'>
        <small>&copy; Alguns direitos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer