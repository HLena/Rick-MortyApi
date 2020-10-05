import React from 'react'
import useFetch from '../hooks/useFetch';

import CharactersList from '../components/CharactersList'



const Characters = () => {
  const {loading, data, error} = useFetch("https://rickandmortyapi.com/api/character/")
  if(loading) return <h1>Loading ...</h1>
  if(error) return <h1>Error ...</h1>

  return (
    <CharactersList data={data.results}/>
  )
};

export default Characters;



