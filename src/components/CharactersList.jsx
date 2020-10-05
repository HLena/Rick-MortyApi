import React, { useState } from 'react'
import useSearch from '../hooks/useSearch';

import Navbar from '../components/Navbar'
import Card from '../components/Card'
import NavigationBar from '../components/NavigationBar'
import Sidebar from '../components/Sidebar'

import pepinillo from '../assets/images/pepinillo.png'
import './styles/CharactersList.scss'


const NoResultFounded = () => {
  return (
    <div className="not-found" >
      <h1> results no Found</h1>
      <img 
        className="pepinillo-img"
        src={pepinillo} 
        alt="pepinillo"
      />
    </div>
  )
}


const CharactersList = (props) => {
  const {text, setText, filteredCharacters} = useSearch(props.data);
  const [showBarSearch, setShowBarSearch] = useState(false);


  return (
    <>
      <Navbar title="Characters" 
        visible = {showBarSearch}
        showBar={() => setShowBarSearch(!showBarSearch)}
      />
      <Sidebar />
      <main>
        <NavigationBar
          visible = {showBarSearch}
          textValue={text}
          onChangeValue={ e => {
            setText(e.target.value)
          }}
        />
        {
          filteredCharacters.length < 1
            ? < NoResultFounded/>
            : <section className="container container-cards">
                {
                  filteredCharacters.map((character) => 
                    <Card key={character.id} character={character}/>
                  )
                }
              </section>
        }
        
      </main>
    </>
  )
}

export default CharactersList
