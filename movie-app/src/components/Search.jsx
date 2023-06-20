import React, { useContext } from "react";
import { AppContext } from "../context";

function Search() {
  const { query, setQuery,isError} = useContext(AppContext);

  return (
    <div> 
      <div className="flex justify-center m-10 items-center ">
    <form action="#" onSubmit={(e) => e.preventDefault()} className="w-72 relative ">
      <input
        className=" w-72 h-12 border-2 border-gray-400  rounded-lg p-4"
        type="text"
        placeholder="search movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <svg className="absolute w-8 h-8 mr-2 top-2 right-0 fill-zinc-500" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
  <g>
    <path d="M51.6,96.7c11,0,21-3.9,28.8-10.5l35,35c0.8,0.8,1.8,1.2,2.9,1.2s2.1-0.4,2.9-1.2c1.6-1.6,1.6-4.2,0-5.8l-35-35   c6.5-7.8,10.5-17.9,10.5-28.8c0-24.9-20.2-45.1-45.1-45.1C26.8,6.5,6.5,26.8,6.5,51.6C6.5,76.5,26.8,96.7,51.6,96.7z M51.6,14.7   c20.4,0,36.9,16.6,36.9,36.9C88.5,72,72,88.5,51.6,88.5c-20.4,0-36.9-16.6-36.9-36.9C14.7,31.3,31.3,14.7,51.6,14.7z"/>
  </g>
</svg>
      
    </form>
    
  </div>
  <div className="mt-24"><h1 className="font-medium text-xl text-red-700 text-center">{isError}</h1></div>
  </div>
   
  );
}

export default Search;
