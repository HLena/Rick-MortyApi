import React from 'react';
// import useFilter from '../hooks/useFilter';

// import Navbar from '../components/Navbar'
import Card from '../components/Card'
import NavigationBar from '../components/NavigationBar'
// import Sidebar from '../components/Sidebar'

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
      nextPage, prevPage
    },
    bar : {
      showBarSearch,
      text,
      setText
    }
  } = props;
  // const [showBarSearch, setShowBarSearch] = useState(false);
  // const [showMenu, setShowMenu] = useState(false);
  // const [genderOption, setGenderOption] = useState('all');
  // const [statusOption, setStatusOption] = useState('all');
  // const [specieOption, setSpecieOption] = useState('all');
  // const {text, setText, filteredData} = useFilter(props.data); 

  // const handleOptionChange = ({target}) => {
  //   const option = target.id.includes('unknown') ? 'unknown' : target.id;
  //   console.log(target);
  //   switch(target.name) {
  //     case 'gender':
  //       setGenderOption(option)
  //       // console.log(`gender - ${option}`);
  //       break;
  //     case 'status':
  //       setStatusOption(option)
  //       // console.log(`status - ${option}`);
  //       break;
  //     case 'specie':
  //       setSpecieOption(option)
  //       // console.log(`specie - ${option}`);
  //       break;
  //     default:
  //       //nothing
  //   }

  // }


  return (
    <>
      {/* <Navbar title="Characters" 
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
      /> */}
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
        {prevPage !== null && <button onClick={loadingMore}>Go Previous</button>}
        {nextPage !== null && <button onClick={loadingMore}>Load More</button>}
      </main>
    </>
  )
}

export default CharactersList
