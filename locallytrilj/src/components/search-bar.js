import React from "react"

const SearchBar = ({ setSearch }) => {
  return (
    <input
      key="random1"
      placeholder={"Pronađi"}
      onChange={e => setSearch(e.target.value)}
      className="searchbar"
    />
  )
}

export default SearchBar
