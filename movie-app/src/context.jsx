import React, { useState } from "react";
import useFetch from "./components/useFetch";

const AppContext = React.createContext();
function AppProvider({ children }) {
  const [query, setQuery] = useState("Titanic");
  const { myData, isLoading, isError } = useFetch(`s=${query}`);

  return (
    <AppContext.Provider
      value={{
        query,
        myData,
        setQuery,
        isLoading,
        isError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export { AppContext, AppProvider };
