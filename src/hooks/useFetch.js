import {useState, useEffect} from 'react';

const defaultEndPoint = "https://rickandmortyapi.com/api/character/";

const useFetch = () => {
  const [data, setData] = useState({characters: []});
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
 
  const fetchData = async(endPoint) => {

    const isLoadMore = endPoint.includes('page');
    console.log(isLoadMore)

    try {
      let res = await fetch(endPoint);
      let result = await res.json();
      setData(prev => ({
        ...prev,
        characters:
          isLoadMore
            ? [...prev.characters, ...result.results]
            : [...result.results],
        nextPage: result.info.next, 
        prevPage: result.info.prev, 
      }));
    } catch (error ){
      setError(error);
    }
    setLoading(false);
  }

  // Fetch popular movies initially on mount
  useEffect(() => { 
    fetchData(defaultEndPoint)
  },[])

  return[{data, loading, error}, fetchData ]
}

export default useFetch;
