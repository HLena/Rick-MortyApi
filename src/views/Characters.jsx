import React from 'react'
import useFetch from '../hooks/useFetch';

import Navbar from '../components/Navbar'
import CharactersList from '../components/CharactersList'



const Characters = () => {
  const {loading, data, error} = useFetch("https://rickandmortyapi.com/api/character/")
  if(loading) return <h1>Loading ...</h1>
  if(error) return <h1>Error ...</h1>

  return (
    <>
      <Navbar title="Characters" />
      <CharactersList data={data.results}/>
    </>
  )
};

export default Characters;



// 261939, 100%
// background-color: #0cbaba;
// background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);
