import React from 'react'

import searchIcon from '../assets/icons/search-icon.svg'
import menuIcon from '../assets/icons/menu-icon.svg'
import xIcon from '../assets/icons/x-icon.svg'
import logo from '../assets/images/Logo.png'
import './styles/Navbar.scss'

const Navbar = (props) => {
  const {showBar, showMenu, visible} = props;
  return (
    <nav className="row">
      <img
        onClick={showMenu}
        className="icon" 
        src={menuIcon} alt="search"/>
      <img className="logo" src={logo} alt="logo"/>
      <img 
        onClick={showBar}
        className="icon" 
        src={visible ? xIcon : searchIcon} alt="search"/>
    </nav>
  )
}

export default Navbar
