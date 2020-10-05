import React from 'react'
import './styles/NavigationBar.scss'

const NavigationBar = (props) => {
  const {textValue, onChangeValue} = props;
  return (
    <div className="navigation__container">
      <input
        className="navigation__input mr-5" 
        type="text" 
        placeholder=" Write here ..."
        maxLength="100"
        value = {textValue}
        onChange = {onChangeValue}
      />
    </div>
  )
}

export default NavigationBar
