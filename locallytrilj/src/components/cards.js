import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CardComponent from "./card"

const Cards = () => {
  const data = useStaticQuery(graphql`
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
  return (
    <div>
      {console.log(data)}
      {data.allBusinessJson.edges.map(businessObject => {
        return (
          <div key={businessObject.node.id}>
            <CardComponent business={businessObject} />
          </div>
        )
      })}
    </div>
  )
}

export default Cards
