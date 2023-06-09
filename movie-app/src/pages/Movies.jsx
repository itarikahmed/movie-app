import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context";

function Movies() {
  const { myData,isLoading } = useContext(AppContext);
  if(isLoading){
    return(
  <div className="text-center justify-center">Loading...</div>)
}
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-4 justify-items-center ">
        {myData?myData.map((data) => {
          const { imdbID, Title, Poster } = data;
          const movieName = Title.substring(0, 20);
          return (
            <Link to={`movie/${imdbID}`} key={imdbID}>
              <div className=" w-72 h-82 border-2 rounded m-8 bg-slate-100 hover:bg-blue-600 transition 
              ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                <img
                  className="mx-auto mt-4  w-64 h-80"
                  src={Poster}
                  alt={imdbID}
                />
                <h1 className="font- font-medium text-lg p-4">
                  {movieName.length >= 20 ? `${movieName}...` : movieName}
                </h1>
              </div>
            </Link>
          );
        }): ""}
      </div>
    </div>
  );
}

export default Movies;
