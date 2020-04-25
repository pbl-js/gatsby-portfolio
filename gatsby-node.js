const path = require(`path`)
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projectTemplate = path.resolve(`src/genPages/Project/Project.js`)

  const result = await graphql(`
    query queryProjects {
      allDatoCmsProject {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)

  console.log(result)

  result.data.allDatoCmsProject.edges.forEach(post => {
    const slug = slugify(post.node.title, { lower: true })

    createPage({
      path: `/projects/${slug}`,
      component: projectTemplate,
      // Przekazujemy zmienna za pomocą  której będziemy odpytywać graphql w określonym poście
      context: {
        projectId: post.node.id,
      },
    })
  })
}
