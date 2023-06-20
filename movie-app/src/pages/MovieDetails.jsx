import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../components/useFetch";

const MovieDetails = () => {
    const { id } = useParams();
    const { myData,isLoading} = useFetch(`i=${id}`);
    if(isLoading){
      return(
    <div className="text-center justify-center">Loading...</div>)
  }
    return (
        <div className=" flex justify-center items-center mt-28 h-auto">
          <div className="flex w-1/2 h-96 border-2 border-gray-200 rounded-lg space-x-10 p-10 shadow-xl">
            <div>
            <img src={myData.Poster} alt="" className=" w-52 h-72" />
          </div>
          <div className="text-black space-y-2">
            <p>{id}</p>
            <p className="font-bold text-xl m-1"> Title:{myData.Title}</p>
            <p className="font-semibold text-xl m-1" >Released date:{myData.Released}</p>
            <p className="font-semibold text-xl " > Genre:{myData.Genre}</p>
            <p className="font-semibold text-xl m-1"> IMDB rating:{myData.imdbRating} / 10</p>
            <p className="font-semibold text-xl m-1">Country: {myData.Country}</p>
            <div className="mt-4"><Link to="/" className=" px-4 py-2 border-2 rounded bg-blue-500 text-white font-semibold">
              Go Back
            </Link></div>
            
          </div>
          </div> 
        </div>
    );
  };


export default MovieDetails;
