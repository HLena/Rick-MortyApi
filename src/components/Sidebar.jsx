import React from 'react'

import RadioButton from './RadioButton'

import './styles/Sidebar.scss'



const Sidebar = (props) => {
  const {onClick, visible} = props;
  return (
    <aside className={visible ? 'show-menu' : ''}>
      <h2> Filters</h2>
      <ul id="gender">
        <h3 className="submenu-title">Gender</h3>
        <RadioButton onClick={onClick} optionSelected='all' group='gender' />
        <RadioButton onClick={onClick} optionSelected='female' group='gender' />
        <RadioButton onClick={onClick} optionSelected='male' group='gender' />
        <RadioButton onClick={onClick} optionSelected='genderless' group='gender' />
        <RadioButton onClick={onClick} optionSelected='unknown 1' group='gender' />
      </ul>
      <ul id="status">
        <h3 className="submenu-title">Status</h3>
        <RadioButton onClick={onClick} optionSelected='all' group='status' />
        <RadioButton onClick={onClick} optionSelected='alive' group='status' />
        <RadioButton onClick={onClick} optionSelected='dead' group='status' />
        <RadioButton onClick={onClick} optionSelected='unknown 2' group='status' />
      </ul>
      <ul id="species">
        <h3 className="submenu-title">Specie</h3>
        <RadioButton onClick={onClick} optionSelected='all' group='specie' />
        <RadioButton onClick={onClick} optionSelected='human' group='specie' />
        <RadioButton onClick={onClick} optionSelected='alien' group='specie' />
      </ul>
    </aside>
  )
}

export default Sidebar
