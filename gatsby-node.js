const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

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
          component: path.resolve(`./src/templates/Page.js`),
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
        const next = i === 0 ? null : blogPosts[i + 1]

        createPage({
          path: blogPost.node.slug,
          component: path.resolve(`./src/templates/BlogPost.js`),
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

  // PROJECTS

  const loadProjects = new Promise((resolve, reject) => {
    graphql(
      `
        {
          allContentfulProject {
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
      const projects = result.data.allContentfulProject.edges
      projects.forEach((project, i) => {
        const previous = i === 0 ? null : project[i - 1]
        const next = i === 0 ? null : project[i + 1]

        createPage({
          path: `project/${project.node.slug}`,
          component: path.resolve(`./src/templates/Project.js`),
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

  // TAGS
  // const loadTags = new Promise((resolve, reject) => {
  //   graphql(`
  //     {
  //       allContentfulTag {
  //         edges {
  //           node {
  //             slug
  //             blog_post {
  //               title
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `).then(result => {
  //     const tags = result.data.allContentfulTag.edges

  //     tags.forEach((tag, i) => {
  //       createPage({
  //         path: tag.node.slug,
  //         component: path.resolve(`./src/templates/Tag.js`),
  //         context: {
  //           slug: tag.node.slug,
  //         },
  //       })
  //     })
  //     resolve()
  //   })
  // })
  return Promise.all([loadBlogPosts, loadTags, loadPages, loadProjects])
}
