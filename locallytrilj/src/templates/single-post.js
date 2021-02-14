import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { Card, Col, Row, Badge } from "reactstrap"
import Img from "gatsby-image"
import SinglePostSidebar from "../components/single-post-sidebar"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={post.title} />
      {console.log(post)}
      <Row>
        <Col md="9">
          <Card>
            <div className="container2" id="content">
              <Img
                className="card-image-top2"
                fluid={post.image.childImageSharp.fluid}
              ></Img>
              <div className="dateandphoto">
                <span className="date">{post.date}</span>
                <span className="photocredit">
                  <i>Photo by: Flicklr</i>
                </span>
              </div>
              <h2 className="posttitle">{post.title}</h2>
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              />
              <Badge color="dark" className="text-uppercase ">
                <Link to={`/blog`}>BLOG</Link>
              </Badge>

              <Badge color="info" className="text-uppercase float-right">
                <Link to={`/tag/${post.business}`}>
                  {post.business.replace("-", " ")}
                </Link>
              </Badge>
            </div>
          </Card>
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
