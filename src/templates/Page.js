import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "./../components/Layout"

import { ImageGrid } from "./../components/contentful/ImageGrid"
import { ProjectsSelected } from "./../components/contentful/ProjectsSelected"
import { Hero } from "./../components/contentful/Hero"
import { Video } from "./../components/contentful/Video"
import { TwoSectionsWithImage } from "./../components/contentful/TwoSectionsWithImage"
import { RichText } from "./../components/contentful/RichText"
import { Projects } from "../components/contentful/Projects"
import { BlogPostsSelected } from "../components/contentful/BlogPostsSelected"

const Page = props => {
  const page = props.data.contentfulPages
  const modules = props.data.contentfulPages.ui
  const projects = props.data.contentfulPages.projects
  const currentPage = props.pageContext.slug

  console.log("PAGE", page)
  console.log("CURRENT PAGE", currentPage)
  console.log("MODULES", modules)
  console.log("PROJECTS", projects)

  const renderModulesOnPages = modules => {
    return modules.map(module => {
      if (module.__typename === "ContentfulImageGrid") {
        return <ImageGrid imageGrid={module} />
      } else if (module.__typename === "ContentfulTwoSectionsImageText") {
        return <TwoSectionsWithImage twoSectionsImageText={module} />
      } else if (module.__typename === "ContentfulProjectsSelected") {
        return <ProjectsSelected projectsSelected={module} />
      } else if (module.__typename === "ContentfulVideo") {
        return <Video video={module} />
      } else if (module.__typename === "ContentfulBlogPostSelected") {
        return <BlogPostsSelected posts={module} />
      } else if (module.__typename === "ContentfulRichText") {
        return <RichText text={module} />
      } else if (module.__typename === "ContentfulHero") {
        return <Hero hero={module} />
      }
    })
  }
  const renderProjects = projects => {
    return projects.map(project => {
      return <Projects projects={project} />
    })
  }

  return (
    <Layout>
      {currentPage !== "projects"
        ? renderModulesOnPages(modules)
        : renderProjects(projects)}
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query ContentfulPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulPages(slug: { eq: $slug }) {
      id
      title
      slug
      projects {
        projectTitle
        projectTitleDate
        slug
        cover {
          fluid {
            src
          }
        }
      }
      ui {
        ... on ContentfulHero {
          hero {
            fluid {
              src
            }
          }
          heroTitle
        }
        ... on ContentfulBlogPostSelected {
          blogPost {
            slug
            title
            subtitle
            hero {
              fluid {
                src
              }
            }
          }
        }
        ... on ContentfulImageGrid {
          title
          grid {
            title
            fluid {
              src
            }
          }
        }
        ... on ContentfulProjectsSelected {
          title
          projectsSelected {
            ... on ContentfulProject {
              slug
              projectTitle
              description {
                description
              }
              cover {
                fluid {
                  src
                }
              }
            }
          }
        }
        ... on ContentfulRichText {
          richText {
            json
          }
        }
        ... on ContentfulTwoSectionsImageText {
          title
          image {
            fluid {
              src
            }
          }
          twoSectionsText {
            twoSectionsText
          }
        }
        ... on ContentfulVideo {
          video
        }
      }
    }
  }
`
