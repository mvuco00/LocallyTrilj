import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import CardComponent from "./card"
import SearchBar from "./search-bar"
import CheckBox from "./checkbox"

const Cards = props => {
  // graphql se koristi s hookovima
  //varijabili search se postavlja vrijesnot "", a za kasnije mijenjanje vrijednosti zove se SetSearch
  const [search, setSearch] = useState("")

  const [filtered, setFiltered] = useState(false)
  const [tag, setTag] = useState()
  //filteredData se koristi za spremanje filtriranih podataka, ona je na početku undefined (dok se ne pokrene search)
  const [filteredData, setFilteredData] = useState()
  // dohvaćaju se podaci preko graphql upita
  const [data, setData] = useState(
    useStaticQuery(graphql`
      {
        allBusinessJson {
          edges {
            node {
              address
              facebook
              instagram
              id
              lat
              long
              name
              path
              tag
              type
              workTime
            }
          }
        }
      }
    `)
  )

  //useEffect služi da se nešto napravi nakon renderiranja stranice i nakon svakog update-a
  //preko njega pristupa se state-u
  useEffect(() => {
    setFilteredData(
      data.allBusinessJson.edges.filter(dat =>
        dat.node.name.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, data])
  let tags = []
  //objekti koji se prikaze na pocetku, dok se jos ne koristi search

  let businessObj = (
    <div>
      {data.allBusinessJson.edges.map(businessObject => {
        return (
          <div key={businessObject.node.id}>
            {tags.includes(businessObject.node.type)
              ? null
              : tags.push(businessObject.node.type)}
            <CardComponent business={businessObject} />
          </div>
        )
      })}
    </div>
  )
  console.log(tag)
  const tagClicked = e => {
    setTag(e.target.value)
  }

  let filteredObject = (
    <div>
      {data.allBusinessJson.edges.map(businessObject => {
        return (
          <div key={businessObject.node.id}>
            {businessObject.node.type === tag ? (
              <CardComponent business={businessObject} />
            ) : tag === "clean" ? (
              <CardComponent business={businessObject} />
            ) : null}
          </div>
        )
      })}
    </div>
  )

  return (
    <div>
      <div className="searchandfilter">
        <SearchBar setSearch={setSearch} />
        <CheckBox
          tags={tags}
          setFilter={tagClicked}
          setFiltered={setFiltered}
        />
      </div>

      {filtered
        ? filteredObject
        : filteredData !== undefined
        ? (businessObj = (
            <div>
              {filteredData.map(businessObject => {
                return (
                  <div key={businessObject.node.id}>
                    <CardComponent business={businessObject} />
                  </div>
                )
              })}
            </div>
          ))
        : businessObj}
    </div>
  )
}

export default Cards
