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
  const [data2, setData2] = useState([])
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
              business
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
    filtered
      ? setFilteredData(
          data2.filter(dat2 =>
            dat2.node.name.toLowerCase().includes(search.toLowerCase())
          )
        )
      : setFilteredData(
          data.allBusinessJson.edges.filter(dat =>
            dat.node.name.toLowerCase().includes(search.toLowerCase())
          )
        )
  }, [search, data, data2, filtered])

  useEffect(() => {
    filtered
      ? setData2(
          data.allBusinessJson.edges.filter(el => el.node.type.includes(tag))
        )
      : setData2(data.allBusinessJson.edges.map(el => el))
  }, [data.allBusinessJson.edges, data, tag, filtered])

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

  const tagClicked = e => {
    setTag(e.target.value)
  }

  let filteredObject = (
    <div>
      {filteredData === undefined
        ? data2.map(businessObject => {
            return (
              <div key={businessObject.node.id}>
                {businessObject.node.type === tag ? (
                  <CardComponent business={businessObject} />
                ) : tag === "clean" ? (
                  window.location.reload()
                ) : null}
              </div>
            )
          })
        : filteredData.map(businessObject => {
            return (
              <div key={businessObject.node.id}>
                {businessObject.node.type === tag ? (
                  <CardComponent business={businessObject} />
                ) : tag === "clean" ? (
                  window.location.reload()
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
