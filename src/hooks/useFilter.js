import {useState, useMemo} from 'react'

const useFilter = (characters) => {
  const [genderOption, setGenderOption] = useState('all');
  const [statusOption, setStatusOption] = useState('all');
  const [specieOption, setSpecieOption] = useState('all');
  const [filteredData, setFilteredData] = useState(characters);
  const [text, setText] = useState('');

  useMemo(() => {
    const results = (!text) 
      ? characters.filter(character => 
        (genderOption === 'all' || genderOption === character.gender.toLocaleLowerCase()) &&
        (statusOption === 'all' || statusOption === character.status.toLocaleLowerCase()) &&
        (specieOption === 'all' || specieOption === character.species.toLocaleLowerCase()) 
      )
      : characters.filter(character =>
        (`${character.name}`
          .toLowerCase()
          .includes(text.toLocaleLowerCase()))
      );
    setFilteredData(results);
  },[characters,genderOption, statusOption, specieOption, text ])
  return {
    genderOption,
    statusOption,
    specieOption,
    setGenderOption,
    setStatusOption,
    setSpecieOption,
    text, 
    setText, 
    filteredData,
  }
}

export default useFilter
