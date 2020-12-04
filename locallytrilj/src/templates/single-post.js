import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import {
  Card,
  Badge,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
} from "reactstrap"
import Img from "gatsby-image"
import slugify from "../util/utils"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={post.title} />
      <h1>{post.title}</h1>
      <div className="container" id="content">
        <Card>
          <Img
            className="card-image-top"
            fluid={post.image.childImageSharp.fluid}
          ></Img>
          <CardTitle>{post.title}</CardTitle>
          <CardBody>
            <CardSubtitle className="text-info">{post.date}</CardSubtitle>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
          </CardBody>
        </Card>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        business
        type
        title
        tags
        date(formatString: "DD MM YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default SinglePost
