import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';
import useFilter from '../hooks/useFilter';

import CharactersList from '../components/CharactersList'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar'


const Characters = () => {
  const [showBarSearch, setShowBarSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [
    {
      data: { characters, nextPage, prevPage },
      loading,
      error,
    },
    fetchData,
  ] = useFetch()
  const {
    genderOption,
    statusOption,
    specieOption,
    setGenderOption,
    setStatusOption,
    setSpecieOption,
    text, 
    setText, 
    filteredData} = useFilter(characters); 
  
  const handleShowMoreCharacters = () => fetchData(nextPage);

  const handleOptionChange = ({target}) => {
    const option = target.id.includes('unknown') ? 'unknown' : target.id;
    console.log(target);
    switch(target.name) {
      case 'gender':
        setGenderOption(option)
        break;
      case 'status':
        setStatusOption(option)
        break;
      case 'specie':
        setSpecieOption(option)
        break;
      default:
    }
  }

  if(error) return <h1>Error ...</h1>
  if(loading) return <h1>Loading ...</h1>

  return (
    <>
       <Navbar title="Characters" 
        visible = {showBarSearch}
        showBar={() => {
          if(showBarSearch) setText('')
          setShowBarSearch(!showBarSearch)
        }}
        showMenu={() => {
          setShowMenu(!showMenu)
        }}
      />
      <Sidebar 
        visible = {showMenu}
        onClick={handleOptionChange} 
        option={{
          gender:genderOption,
          status:statusOption,
          specie:specieOption
        }}
      />
      <CharactersList 
        filteredData={filteredData}
        loadingMore = {handleShowMoreCharacters}
        page = {{nextPage, prevPage}}
        bar = {
          {
            showBarSearch,
            text,
            setText
          }
        }
      />
    </>
  )
};

export default Characters;



