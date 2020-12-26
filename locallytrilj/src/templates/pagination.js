import React from "react"
import Layout from "../components/layout"
import Post from "../components/post"
import PaginationLinks from "../components/pagination-links"
import { graphql } from "gatsby"

const Pagination = props => {
  const posts = props.data.allMarkdownRemark.edges
  const { currentPage, numberOfPages } = props.pageContext
  console.group(posts)
  console.log(currentPage)
  return (
    <div>
      <Layout>
        <div className="all-posts">
          {posts.map(({ node }) => {
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
        <PaginationLinks
          currentPage={currentPage}
          numberOfPages={numberOfPages}
        />
      </Layout>
    </div>
  )
}

export const paginationQuery = graphql`
  query paginationQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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

export default Pagination
