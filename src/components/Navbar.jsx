import React from 'react'

import searchIcon from '../assets/icons/search-icon.svg'
import menuIcon from '../assets/icons/menu-icon.svg'
import xIcon from '../assets/icons/x-icon.svg'
import './styles/Navbar.scss'

const Navbar = (props) => {
  const {title, showBar, showMenu, visible} = props;
  return (
    <nav className="row">
      <img
        onClick={showMenu}
        className="icon" 
        src={menuIcon} alt="search"/>
      <h1>{title}</h1>
      <img 
        onClick={showBar}
        className="icon" 
        src={visible ? xIcon : searchIcon} alt="search"/>
    </nav>
  )
}

export default Navbar
