import React from "react"

const SearchBar = ({ setSearch, setSearched }) => {
  const BarStyling = {
    width: "17rem",
    background: "#FFFFFF",
    border: "none",
    padding: "0.4rem",
    borderRadius: "5px",
    marginBottom: "10px",
  }
  const searchFun = e => {
    setSearch(e.target.value)
  }
  return (
    <input
      style={BarStyling}
      key="random1"
      placeholder={"Pronađi"}
      onChange={e => searchFun(e)}
    />
  )
}

export default SearchBar
