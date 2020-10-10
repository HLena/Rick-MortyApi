import React from 'react'

import './styles/RadioButton.scss'

const CheckBox = (props) => {
  const {onClick, optionSelected, group} = props;
  const textContent = optionSelected.includes('unknown') ? 'unknown' : optionSelected; 
  return (
    <li>
      <input 
        className="option-input radio"
        onClick={onClick} 
        type="radio" 
        id={optionSelected} 
        name={group} 
        defaultChecked={optionSelected === 'all'? true : false}
      />
      <label htmlFor={optionSelected}>{textContent}</label>
    </li>
  )
}

export default CheckBox;
