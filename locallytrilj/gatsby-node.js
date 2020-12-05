const { slugify } = require("./src/util/utils")
const path = require("path")

//executes each time one node is created in graphql schema
//executes each time one node is created in graphql schema
exports.onCreateNode = ({ node, actions }) => {
  console.log(`Node created of type "${node.internal.type}"`)
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

  if (node.internal.type === "BusinessJson") {
    const slugFromName = slugify(node.name)
    createNodeField({
      node,
      name: "slug",
      value: slugFromName,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const templates = {
    singlePostTemplate: path.resolve("src/templates/single-post.js"),
    businessPostTemplate: path.resolve("src/templates/business-post.js"),
  }

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      allBusinessJson {
        edges {
          node {
            fields {
              slug
            }
            lat
            long
            name
            path
            tag
            type
            workTime
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)
    const posts = res.data.allMarkdownRemark.edges
    const business = res.data.allBusinessJson.edges

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

    business.forEach(({ node }) => {
      createPage({
        path: `${node.fields.slug}`,
        component: templates.businessPostTemplate,
        //preko contexa se prosljedi nesto komponenti, ovaj slug se koristi za grapgql upit
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
