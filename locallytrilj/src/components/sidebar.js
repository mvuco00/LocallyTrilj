import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  Card,
  Badge,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap"

const SideBar = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 2
      ) {
        edges {
          node {
            frontmatter {
              business
              type
              title
              tags
              path
              image {
                childImageSharp {
                  fluid(maxWidth: 700) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt(pruneLength: 80)
          }
        }
      }
    }
  `)
  return (
    <div>
      {data.allMarkdownRemark.edges.map(el => {
        console.log(el)
        return (
          <Card key={el.node.frontmatter.title}>
            <CardBody>
              <Link to={el.node.frontmatter.path}>
                <Img
                  className="card-image-top"
                  fluid={el.node.frontmatter.image.childImageSharp.fluid}
                />
              </Link>
              <Link to={el.node.frontmatter.path}>
                <CardTitle tag="h5">{el.node.frontmatter.title}</CardTitle>
              </Link>

              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>{el.node.excerpt}</CardText>
              <Link to={el.node.frontmatter.path}>
                <button className="btn btn-outline-primary float-right">
                  Pročitaj više
                </button>
              </Link>
            </CardBody>
          </Card>
        )
      })}
    </div>
  )
}

export default SideBar
