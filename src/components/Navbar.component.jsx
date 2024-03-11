import React from 'react'
import KasaLogo from '../assets/kasa.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__brand'>
                <img className='navbar__image' src={KasaLogo} alt="logo du site" />
            </div>
            <div className='navbar__links'>
                <NavLink className='navbar__link' to="/">Accueil</NavLink>
                <NavLink className='navbar__link' to="/about">À propos</NavLink>
            </div>
        </nav>
    )
}

export default Navbar