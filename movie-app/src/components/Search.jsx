import React, { useContext } from "react";
import { AppContext } from "../context";

function Search() {
  const { query, setQuery,isError} = useContext(AppContext);
  return (
    <div> 
      <div className="flex justify-center m-10">
    <form action="#" onSubmit={(e) => e.preventDefault()}>
      <input
        className=" w-72 h-12 border-2 border-gray-400  rounded-lg p-4"
        type="text"
        placeholder="search movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  </div>
  <div className="mt-24"><h1 className="font-medium text-xl text-red-700 text-center">{isError}</h1></div></div>
   
  );
}

export default Search;
