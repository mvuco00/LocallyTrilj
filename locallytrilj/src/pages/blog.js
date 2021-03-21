import React from "react"
import Post from "../components/post"
import { graphql } from "gatsby"
import PaginationLinks from "../components/pagination-links"
import Layout from "../components/layout"

const Blog = ({ data }) => {
  const postsPerPage = 6
  let numberOfPages = Math.ceil(
    data.allMarkdownRemark.totalCount / postsPerPage
  )

  return (
    <Layout>
      <div className="container" id="content">
        <h1 className="page-title">Novosti</h1>
        {/*render je anonymous function koja prima data (to smo dobili od queryja*/}

        <div className="all-posts">
          {/*node je destrukturiran, a to je naš post*/}
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <Post
                key={node.id}
                title={node.frontmatter.title}
                business={node.frontmatter.business}
                type={node.frontmatter.type}
                path={node.fields.slug}
                date={node.frontmatter.date}
                body={node.excerpt}
                fluid={node.frontmatter.image.childImageSharp.fluid}
                tags={node.frontmatter.tags}
              />
            )
          })}
        </div>
      </div>
      <PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 6
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MM YYYY")
            type
            business
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Blog
