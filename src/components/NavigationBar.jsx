import React from 'react'
import './styles/NavigationBar.scss'

const NavigationBar = (props) => {
  const {textValue, onChangeValue, visible} = props;
  return (
      <input
        style = {{visibility:(visible ? 'visible' : 'hidden')}}
        className="navigation__input mr-5" 
        type="text" 
        placeholder=" Write here ..."
        maxLength="100"
        value = {textValue}
        onChange = {onChangeValue}
      />
  )
}

export default NavigationBar
