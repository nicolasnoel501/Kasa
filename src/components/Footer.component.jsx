import React from 'react'
import KasaLogoWhite from '../assets/kasa-white.png'

const Footer = () => {
  return (
   <footer className='footer'>
    <img className='footer__image' src={KasaLogoWhite} alt='logo du site'/>
    <p className='footer__text'>&copy; 2020 Kasa. All rights reserved</p> 
   </footer>
  )
}

export default Footer