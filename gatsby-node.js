const path = require("path")

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })

//     // console.log("@@@@@@@@@@@@@@", slug)
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve("./src/templates/blog.js")

  const res = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          slug
          status
          title
        }
      }
    }
  `)

  res.data.allWpPost.nodes.forEach(nodes => {
    createPage({
      component: blogTemplate,
      path: `/blog/${nodes.slug}`,
      context: {
        slug: nodes.slug,
      },
    })
  })
}
