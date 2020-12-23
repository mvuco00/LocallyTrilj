import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const SinglePostSidebar = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(limit: 5) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  return (
    <ul>
      {data.allMarkdownRemark.edges.map(node => {
        return (
          <li key={node.node.fields.slug} className="sidebar-links">
            {
              <Link to={node.node.fields.slug}>
                {node.node.frontmatter.title}
              </Link>
            }
          </li>
        )
      })}
    </ul>
  )
}
export default SinglePostSidebar
