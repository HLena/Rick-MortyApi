import React from 'react';

import Card from '../components/Card'
import NavigationBar from '../components/NavigationBar'

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
  const {
    filteredData,
    loadingMore,
    page : {
      nextPage
    },
    bar : {
      showBarSearch,
      text,
      setText
    }
  } = props; 

  return (
    <>
      <main>
        <NavigationBar
          visible = {showBarSearch}
          onChangeValue={ e => {
            setText(e.target.value)
          }}
          textValue={text}
        />
        {
          filteredData.length < 1
            ? < NoResultFounded/>
            : <section className="container container-cards">
                {
                  (filteredData).map((character) => 
                    <Card key={character.id} character={character}/>
                  )
                }
              </section>
        }
        {(nextPage !== null && filteredData.length > 0) && 
        <button className="btn btn-pagination" onClick={loadingMore}>Load More</button>}
      </main>
    </>
  )
}

export default CharactersList
