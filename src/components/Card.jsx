import React from 'react';

import './styles/Card.scss';
import genderIcon from '../assets/icons/gender-icon.svg';


const colorState = {
  alive: 'green',
  dead: 'red',
  unknown: 'orange',
}
const Card = (props) => {
  const {
    name,
    image,
    gender,
    status,
    origin,
    species,
    location } = props.character;
  return (
    <div className="card-character"> 
      <img className="card__img" src={image} alt="name"/>
      <div className="card__info">
        <h1 className="name-character">{name}</h1>
        <div className="row">
          <div className ="detail">
            <img 
              className="card-icon"
              src={genderIcon}
              alt="gender"
              />
            {gender}
          </div>
          <div className ="detail">
            <div 
              className="state-icon card-icon"
              style={{background:`${colorState[status.toLocaleLowerCase()]}`}}
              />
            {status}
          </div>
        </div>
        <hr/>
        <p className="specie">{species}</p>
        <p className="location">{location.name.replace('(Replacement Dimension)','')}</p>
        <p className="origin">{origin.name.replace('(Replacement Dimension)','')}</p>
      </div>
    </div>
  )
}

export default Card;
