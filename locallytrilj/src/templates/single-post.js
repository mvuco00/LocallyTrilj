import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { CardTitle, Col, Row } from "reactstrap"
import Img from "gatsby-image"
import SinglePostSidebar from "../components/single-post-sidebar"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={post.title} />
      <Row>
        <Col md="9">
          <h1>{post.title}</h1>
          <div className="container2" id="content">
            <Img
              className="card-image-top"
              fluid={post.image.childImageSharp.fluid}
            ></Img>
            <CardTitle>{post.title}</CardTitle>

            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
          </div>
        </Col>
        <Col md="3">
          <h1>Najnovije</h1>
          <SinglePostSidebar />
        </Col>
      </Row>
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
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default SinglePost
