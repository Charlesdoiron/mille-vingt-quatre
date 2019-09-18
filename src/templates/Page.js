import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "./../components/Layout"
import { Tag } from "./../components/contentful/Tag"
import { ImageGrid } from "./../components/contentful/ImageGrid"
import { ProjectsSelected } from "./../components/contentful/ProjectsSelected"
class Page extends React.Component {
  render() {
    const page = this.props.data.contentfulPages

    return (
      <Layout>
        <h1>{page.title}</h1>
        {page.ui.map((module, i) => {
          console.log(module)
          return (
            <div>
              <ImageGrid data={module.grid} key={i} />
              <ProjectsSelected data={module.projects} key={i} />
            </div>
          )
        })}
      </Layout>
    )
  }
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
          id
          title
          projects {
            slug
            title
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
        ... on ContentfulRichText {
          richText {
            richText
          }
        }
        ... on ContentfulTwoSectionsImageText {
          text
          image {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
