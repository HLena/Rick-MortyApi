import {useState, useMemo} from 'react'

const useFilter = (characters, filterByGender, filterByStatus, filterBySpecie) => {
  const [filteredData, setFilteredData] = useState(characters);
  const [text, setText] = useState('');

  useMemo(() => {
    const results = (!text) 
      ? characters.filter(character => 
        (filterByGender === 'all' || filterByGender === character.gender.toLocaleLowerCase()) &&
        (filterByStatus === 'all' || filterByStatus === character.status.toLocaleLowerCase()) &&
        (filterBySpecie === 'all' || filterBySpecie === character.species.toLocaleLowerCase()) 
      )
      : characters.filter(character =>
        (`${character.name}`
          .toLowerCase()
          .includes(text.toLocaleLowerCase()))
      );
    setFilteredData(results);
  },[characters,filterByGender, filterByStatus, filterBySpecie, text ])
  return {text, setText, filteredData}
}

export default useFilter
