import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"
import CardComponent from "./card"

const Cards = () => {
  const data = useStaticQuery(graphql`
    {
      allSite {
        edges {
          node {
            siteMetadata {
              businessObject {
                address
                facebook
                instagram
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
      }
    }
  `)
  return (
    <div>
      {console.log(data)}
      {data.allSite.edges[0].node.siteMetadata.businessObject.map(
        businessObject => {
          return (
            <div key={businessObject.name}>
              {console.log(businessObject)}
              <CardComponent business={businessObject} />
            </div>
          )
        }
      )}
    </div>
  )
}

export default Cards
