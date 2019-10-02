import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "./../components/Layout"

import { ImageGrid } from "./../components/contentful/ImageGrid"
import { ProjectsSelected } from "./../components/contentful/ProjectsSelected"
import { Hero } from "./../components/contentful/Hero"
import { Video } from "./../components/contentful/Video"
import { TwoSectionsWithImage } from "./../components/contentful/TwoSectionsWithImage"
import { RichText } from "./../components/contentful/RichText"
import { ProjectsPreview } from "../components/contentful/ProjectsPreview"

const Page = props => {
  const page = props.data.contentfulPages
  const ui = props.data.contentfulPages.ui

  console.log("page", page)

  const formatModule = ui => {
    return ui.map(t => {
      return {
        [(module = t.__typename)]: {
          fields: t,
        },
      }
    })
  }

  const formatData = type => formatModule(ui).filter(module => module[type])

  console.log(ui, "ui")

  const renderModule = ui => {
    return ui.map(module => {
      if (module.__typename === "ContentfulImageGrid") {
        return <ImageGrid imageGrid={formatData("ContentfulImageGrid")} />
      } else if (module.__typename === "ContentfulTwoSectionsImageText") {
        return (
          <TwoSectionsWithImage
            twoSectionsImageText={formatData("ContentfulTwoSectionsImageText")}
          />
        )
      } else if (module.__typename === "ContentfulProject") {
        return <ProjectsPreview projects={formatData("ContentfulProject")} />
      }
    })
  }
  console.log(renderModule(ui))
  return (
    <Layout>
      {renderModule(ui)}
      {/* <ImageGrid imageGrid={formatData("ContentfulImageGrid")} />
      <ProjectsSelected
        projectsSelected={formatData("ContentfulProjectsSelected")}
      />
      <Hero hero={formatData("ContentfulHero")} />
      <Video video={formatData("ContentfulVideo")} />
      <RichText richText={formatData("ContentfulRichText")} />
      <TwoSectionsWithImage
        twoSectionsImageText={formatData("ContentfulTwoSectionsImageText")}
      />
      <ProjectsPreview projects={formatData("ContentfulProject")} /> */}
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
      ui {
        ... on ContentfulHero {
          hero {
            fluid {
              src
            }
          }
          heroTitle
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
        ... on ContentfulProject {
          projectTitle
          projectTitleDate
          slug
          cover {
            fluid(maxWidth: 2768, quality: 100) {
              src
            }
          }
        }
      }
    }
  }
`
