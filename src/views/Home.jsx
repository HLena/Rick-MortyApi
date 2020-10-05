import React from 'react'
import {Link} from 'react-router-dom'

import './styles/Home.scss'
import Logo from '../assets/images/Logo.png'
import MainLogo from '../assets/images/MainLogo.png'

const Home = () => {
  return (
    <div className="container">
      <img 
        className="logo mr-5" 
        src={Logo} alt="Logo"/>
      <div className="description">
        <p>Ricky and Morty is an American adult animated science diction adventure comedy series creates by Justin Rolland and Dan Harmon for Cartton Network's late-night programming block Adult Swim.</p>
      </div>
      <img 
        className="main-logo mr-5" 
        src={MainLogo} alt="Logo"/>
      <Link to="/characters">
        <button className="btn primary-btn">Charge Data</button>
      </Link>
      
    </div>
  )
}

export default Home;
