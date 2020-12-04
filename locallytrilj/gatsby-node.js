const { slugify } = require("./src/util/utils")
const path = require("path")

//executes each time one node is created in graphql schema
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  //provjera tipa čvora
  if (node.internal.type === "MarkdownRemark") {
    const slugFromTitle = slugify(node.frontmatter.title)
    //kreira se fields za graphql upit
    createNodeField({
      node,
      name: "slug",
      value: slugFromTitle,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const templates = {
    singlePostTemplate: path.resolve("src/templates/single-post.js"),
  }

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)
    const posts = res.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.fields.slug}`,
        component: templates.singlePostTemplate,
        //preko contexa se prosljedi nesto komponenti, ovaj slug se koristi za grapgql upit
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
