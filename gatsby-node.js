const path = require(`path`)
//const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin")
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/home`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/`,
  })

  // PAGES

  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPages {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const pages = result.data.allContentfulPages.edges
      pages.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component:
            node.slug === "home"
              ? path.resolve(`./src/pages/index.js`)
              : path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  // BLOG POST

  const loadBlogPosts = new Promise((resolve, reject) => {
    graphql(
      `
        {
          allContentfulBlogPost {
            edges {
              node {
                slug
                title
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        throw result.errors
      }
      const blogPosts = result.data.allContentfulBlogPost.edges
      blogPosts.forEach((blogPost, i) => {
        const previous = i === 0 ? null : blogPosts[i - 1]
        const next = i === blogPosts.length ? null : blogPosts[i + 1]

        createPage({
          path: blogPost.node.slug,
          component: path.resolve(`./src/templates/blogpost.js`),
          context: {
            slug: blogPost.node.slug,
            previous,
            next,
          },
        })
      })
      resolve()
    })
  })

  //PROJECTS

  const loadProjects = new Promise((resolve, reject) => {
    graphql(
      `
        {
          allContentfulProject {
            edges {
              node {
                slug
                projectTitle
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        throw result.errors
      }
      const projects = result.data.allContentfulProject.edges
      projects.forEach((project, i) => {
        console.log(project.length)
        const previous = i === 0 ? null : projects[i - 1]
        const next = i === projects.length ? null : projects[i + 1]

        createPage({
          path: `project/${project.node.slug}`,
          component: path.resolve(`./src/templates/project.js`),
          context: {
            slug: project.node.slug,
            previous,
            next,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([loadBlogPosts, loadPages, loadProjects])
}

// exports.onCreateWebpackConfig = ({
//   stage,
//   rules,
//   loaders,
//   plugins,
//   actions,
// }) => {
//   actions.setWebpackConfig({
//     plugins: [new CaseSensitivePathsPlugin({ debug: true })],
//   })
// }
