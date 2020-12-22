import React from "react"

const SearchBar = ({ setSearch }) => {
  const BarStyling = {
    width: "17rem",
    background: "#FFFFFF",
    border: "none",
    padding: "0.4rem",
    borderRadius: "5px",
    marginBottom: "10px",
  }

  return (
    <input
      style={BarStyling}
      key="random1"
      placeholder={"Pronađi"}
      onChange={e => setSearch(e.target.value)}
    />
  )
}

export default SearchBar
