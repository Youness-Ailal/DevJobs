import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

function FiltersProvider({ children }) {
  const [isFullTime, setIsFullTime] = useState(false);
  const [serachTitle, setSearchTitle] = useState("");
  const [searchCountry, setSearchCountry] = useState("");

  function toggleFullTime(value) {
    setIsFullTime(value);
  }
  function updateTitle(value) {
    setSearchTitle(value);
  }
  function updateCountry(value) {
    setSearchCountry(value);
  }
  function reset() {
    setIsFullTime(false);
    setSearchTitle("");
    setSearchCountry("");
  }
  return (
    <FilterContext.Provider
      value={{
        toggleFullTime,
        updateTitle,
        updateCountry,
        isFullTime,
        serachTitle,
        searchCountry,
        reset,
      }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FilterContext);
  if (context === undefined)
    throw new Error("filters context cannot be used outside filters Provider");
  return context;
}
export default FiltersProvider;
