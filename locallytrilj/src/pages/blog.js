import React from "react"
import Post from "../components/post"
import SEO from "../components/seo"

import { graphql, StaticQuery } from "gatsby"
import PaginationLinks from "../components/pagination-links"
import Layout from "../components/layout"

const Blog = () => {
  const postsPerPage = 6
  let numberOfPages

  return (
    <Layout>
      <div className="container" id="content">
        <h1 className="page-title">Novosti</h1>
        {/*render je anonymous function koja prima data (to smo dobili od queryja*/}

        <StaticQuery
          query={blogQuery}
          render={data => {
            numberOfPages = Math.ceil(
              data.allMarkdownRemark.totalCount / postsPerPage
            )

            return (
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
                <PaginationLinks
                  currentPage={1}
                  numberOfPages={numberOfPages}
                />
              </div>
            )
          }}
        ></StaticQuery>
      </div>
    </Layout>
  )
}

const blogQuery = graphql`
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
