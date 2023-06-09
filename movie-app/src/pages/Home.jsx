import React from "react";
import Movies from "./Movies";
import Search from "../components/Search";

function Home() {
  return (
    <div>
      <Search />
      <Movies />
    </div>
  );
}

export default Home;
