import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = `https://www.omdbapi.com/?&apikey=4dbab240&`;

const useFetch = (query) => {
  const [myData, setMyData] = useState(null);
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovies = async (url) => {
      console.log(url);
      setIsLoading();
      try {
        const res = await axios.get(url);
        setMyData(res.data.Search || res.data )
      } catch (error) {
        setIsError(error.message);
      }
      setIsLoading(false);
    };
    
    const timeOut = setTimeout(() => {
      getMovies(`${API_URL}${query}`)
    }, 800);
    return () => {
      clearTimeout(timeOut);
    };

  }, [query]
  
  );

  console.log(myData);
  
  return {myData,isLoading,isError};
};

export default useFetch;
