import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "./../components/Layout"

import { ImageGrid } from "./../components/contentful/ImageGrid"
import { ProjectsSelected } from "./../components/contentful/ProjectsSelected"
import { Hero } from "./../components/contentful/Hero"
import { Video } from "./../components/contentful/Video"
import { TwoSectionsWithImage } from "./../components/contentful/TwoSectionsWithImage"
class Page extends React.Component {
  render() {
    const page = this.props.data.contentfulPages

    return (
      <Layout>
        <h1>{page.title}</h1>
        {page.ui.map((data, i) => {
          console.log(data)
          return (
            <div>
              {data.grid && <ImageGrid data={data} key={`ImageGrid-${i}`} />}
              {data.projects && (
                <ProjectsSelected data={data} key={`ProjectsSelected-${i}`} />
              )}
              {data.hero && <Hero data={data} key={`Hero-${i}`} />}
              {data.video && <Video data={data} key={`Video-${i}`} />}
              {data.twoSectionsText && (
                <TwoSectionsWithImage
                  data={data}
                  key={`TwoSectionsWithImage-${i}`}
                />
              )}
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
          title
          image {
            fixed {
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
