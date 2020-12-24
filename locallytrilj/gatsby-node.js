const { slugify } = require("./src/util/utils")
const path = require("path")
const _ = require(`lodash`)

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
    tagPostsTemplate: path.resolve("src/templates/tag-posts.js"),
    postList: path.resolve("src/templates/pagination.js"),
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
              business
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

    let types = []
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.business")) {
        types = types.concat(edge.node.frontmatter.business)
      }
    })

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

    //Create tag posts page
    types.forEach(tag => {
      console.log(tag)
      createPage({
        path: `/tag/${slugify(tag)}`,
        component: templates.tagPostsTemplate,
        context: {
          tag: tag,
        },
      })
    })
    const postsPerPage = 6
    const numberOfPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numberOfPages }).forEach((_, index) => {
      // 0 je prva stranica, ako je to istina, onda smo na prvoj stranici
      const isFirstPage = index === 0
      const currentPage = index + 1

      if (isFirstPage) return
      createPage({
        path: `/blog/pages/${currentPage}`,
        component: templates.postList,
        context: {
          limit: postsPerPage,
          //sluzi da se zna od kojeg posta se treba izvrsit querry u templeteu
          skip: index * postsPerPage,
          currentPage,
          numberOfPages,
        },
      })
    })
  })
}
