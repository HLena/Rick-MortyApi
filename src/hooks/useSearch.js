import {useState, useMemo} from 'react'

const useSearch = (characters) => {
  const [text, setText] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  useMemo(() => {
    const results = characters.filter(character => {
      return `${character.name}`
        .toLowerCase()
        .includes(text.toLocaleLowerCase());
    });
    setFilteredCharacters(results)
  }, [characters, text]);
  return {text, setText, filteredCharacters};
}

export default useSearch
