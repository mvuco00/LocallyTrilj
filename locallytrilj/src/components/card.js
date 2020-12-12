import React from "react"
import { Link } from "gatsby"
import { Card, Badge, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import { slugify } from "../util/utils"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Carpe from "../images/carpediem.jpg"

const CardComponent = props => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { absolutePath: { regex: "//content/images/logos/" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Card>
        <div className="card-flex">
          <img
            src={props.business.node.path}
            alt="business-logo"
            className="business-logo"
          />
          <CardBody>
            <Link to={slugify(props.business.node.name)} className="card-link">
              {" "}
              <CardTitle tag="h5">{props.business.node.name}</CardTitle>{" "}
            </Link>

            <CardSubtitle tag="h6" className="mb-2 text-muted">
              <span className="text-info">{props.business.node.address}</span>{" "}
            </CardSubtitle>
            <Badge color="info" className="text-uppercase">
              <Link to={`/tag/${slugify(props.business.node.type)}`}>
                {props.business.node.type}
              </Link>
            </Badge>
          </CardBody>
        </div>
      </Card>
    </div>
  )
}

export default CardComponent
