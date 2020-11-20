import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Post from "../components/post"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"

const Blog = () => (
  <div className="container" id="content">
    <Header siteTitle="LocallyTrilj">
      <SEO title="Novosti" />
    </Header>
    <h1 className="page-title">Novosti</h1>
    {/*render je anonymous function koja prima data (to smo dobili od queryja*/}

    <StaticQuery
      query={blogQuery}
      render={data => {
        return (
          <div>
            {/*node je destrukturiran, a to je naš post*/}
            {data.allMarkdownRemark.edges.map(({ node }) => {
              return (
                <Post
                  key={node.id}
                  title={node.frontmatter.title}
                  business={node.frontmatter.business}
                  type={node.frontmatter.type}
                  path={node.frontmatter.path}
                  date={node.frontmatter.date}
                  body={node.excerpt}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />
              )
            })}
          </div>
        )
      }}
    ></StaticQuery>
  </div>
)

const blogQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MM YYYY")
            path
            type
            business
            image {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

export default Blog
