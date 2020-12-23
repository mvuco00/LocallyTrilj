import React from "react"
import Header from "../components/header"
import Post from "../components/post"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { graphql, StaticQuery } from "gatsby"

const Blog = () => (
  <div>
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
          )
        }}
      ></StaticQuery>
    </div>
    <Footer />
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
