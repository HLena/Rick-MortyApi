import React from 'react'
import searchIcon from '../assets/icons/search-icon.svg'
import menuIcon from '../assets/icons/menu-icon.svg'
import './styles/Navbar.scss'

const Navbar = (props) => {
  const {title} = props;
  return (
    <nav className="row">
      <img
        className="icon" 
        src={menuIcon} alt="search"/>
      <h1>{title}</h1>
      <img 
        className="icon" 
        src={searchIcon} alt="search"/>
    </nav>
  )
}

export default Navbar
