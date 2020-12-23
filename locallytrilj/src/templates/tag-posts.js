import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql } from "gatsby"
import Post from "../components/post"
const TagsPost = ({ data, pageContext }) => {
  const { tag } = pageContext
  let upperCaseLet = tag.charAt(0).toUpperCase() + tag.slice(1)
  upperCaseLet = upperCaseLet.replace("-", " ")
  upperCaseLet = upperCaseLet.replace(/\b\w/g, l => l.toUpperCase())
  return (
    <Layout>
      <SEO title={tag} />
      <h1 className="page-title">{upperCaseLet}</h1>
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
    </Layout>
  )
}

export const filterQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { business: { in: [$tag] } } }
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
export default TagsPost
