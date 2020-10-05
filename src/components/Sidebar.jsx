import React from 'react'

import './styles/Sidebar.scss'

const Sidebar = () => {
  return (
    <aside>
      <ul id="filter">
        <ul id="gender">
          <h3 className="submenu-title">Gender</h3>
          <li><label><input type="radio" id="contactChoice2" name="female" value="Female"/>Female</label></li>
          <li><label><input type="radio" id="contactChoice2" name="male" value="Male"/>Male</label></li>
          <li><label><input type="radio" id="contactChoice2" name="genderless" value="Genderless"/>Genderless</label></li>
          <li><label><input type="radio" id="contactChoice2" name="unknown" value="unknown"/>Unknown</label></li>        
        </ul>
        <ul id="status">
          <h3 className="submenu-title">Status</h3>
          <li><label><input type="radio" id="contactChoice2" name="female" value="Female"/>Alive</label></li>
          <li><label><input type="radio" id="contactChoice2" name="male" value="Male"/>Dead</label></li>
          <li><label><input type="radio" id="contactChoice2" name="unknown" value="unknown"/>Unknown</label></li>
        </ul>
        <ul id="species">
          <h3 className="submenu-title">Specie</h3>
          <li><label><input type="radio" id="contactChoice2" name="unknown" value="human"/>Human</label></li>
          <li><label><input type="radio" id="contactChoice2" name="unknown" value="unknown"/>Unknown</label></li>
        </ul>
      </ul>
    </aside>
  )
}

export default Sidebar
