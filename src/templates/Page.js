import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"

import { ImageGrid } from "../components/contentful/ImageGrid"
import { ProjectsSelected } from "../components/contentful/ProjectsSelected"
import { Hero } from "../components/contentful/Hero"
import { Video } from "../components/contentful/Video"
import { TwoSectionsWithImage } from "../components/contentful/TwoSectionsWithImage"
import { RichText } from "../components/contentful/RichText"
import { Quote } from "../components/contentful/Quote"
import { BlogPostsSelected } from "../components/contentful/BlogPostsSelected"
import { BlogPosts } from "../components/contentful/BlogPosts"
import { ProjectsList } from "../components/contentful/ProjectsList"
import { ImageFullScreen } from "../components/contentful/ImageFullScreen"
import { QuoteAndText } from "../components/contentful/QuoteAndText"
import { NewsLetterSuscribe } from "../components/contentful/NewsLetterSuscribe"
import { Socials } from "../components/contentful/Socials"
import { ContactForm } from "../components/contentful/ContactForm"
const FullHeight = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`

const Page = props => {
  const page = props.data.contentfulPages
  const modules = props.data.contentfulPages.ui
  const projects = props.data.contentfulPages.allProjects
  const categories = props.data.contentfulPages.allCategories
  const currentPage = props.pageContext.slug

  console.log("PAGE", page)
  console.log("CURRENT PAGE", currentPage)
  console.log("MODULES", modules)
  console.log("PROJECTS IN PAGE", projects)
  console.log("PROJECTS CATEGORIES IN PAGE", categories)

  const renderModulesOnPages = modules => {
    return modules.map(module => {
      if (module.__typename === "ContentfulHero") {
        return <Hero hero={module} />
      } else if (module.__typename === "ContentfulImageGrid") {
        return <ImageGrid imageGrid={module} />
      } else if (module.__typename === "ContentfulTwoSectionsImageText") {
        return <TwoSectionsWithImage twoSectionsImageText={module} />
      } else if (module.__typename === "ContentfulProjectsSelected") {
        return <ProjectsSelected projectSelected={module} />
      } else if (module.__typename === "ContentfulVideo") {
        return <Video video={module} />
      } else if (module.__typename === "ContentfulBlogPostSelected") {
        return <BlogPostsSelected postSelected={module} />
      } else if (module.__typename === "ContentfulRichText") {
        return <RichText text={module} />
      } else if (module.__typename === "ContentfulBlogPost") {
        return <BlogPosts post={module} />
      } else if (module.__typename === "ContentfulQuote") {
        return <Quote quote={module} />
      } else if (module.__typename === "ContentfulImageFullScreen") {
        return <ImageFullScreen image={module} />
      } else if (module.__typename === "ContentfulQuoteAndText") {
        return <QuoteAndText quote_and_text={module} />
      } else if (module.__typename === "ContentfulNewsLetterSuscribe") {
        return <NewsLetterSuscribe news_letter={module} />
      } else if (module.__typename === "ContentfulSocials") {
        return <Socials social={module} />
      } else if (module.__typename === "ContentfulContactForm") {
        return <ContactForm contact_form={module} />
      }
    })
  }
  const renderProjects = (projects, modules, categories) => {
    return (
      <React.Fragment>
        {modules.map(module => (
          <Quote quote={module} />
        ))}
        <FullHeight>
          <ProjectsList projects={projects} categories={categories} />
        </FullHeight>
      </React.Fragment>
    )
  }
  return (
    <Layout currentPage={currentPage}>
      {currentPage !== "projects"
        ? renderModulesOnPages(modules)
        : renderProjects(projects, modules, categories)}
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
      allProjects: projects {
        projectTitle
        projectTitleDate
        slug
        cover {
          fluid(quality: 50, maxWidth: 1800) {
            ...GatsbyContentfulFluid
          }
        }
        categories {
          title
          slug
        }
      }
      allCategories: projectsCategories {
        title
        slug
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
        ... on ContentfulContactForm {
          contactFormTitle
          mailTo
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
        ... on ContentfulSocials {
          socialsTitle
          socials {
            socialTitle
            socialLink
          }
        }
        ... on ContentfulNewsLetterSuscribe {
          newsLetterSuscribeTitle
          placeholderNewsLetterSuscribe
          callToActionNewsLetterSuscribe
        }
        ... on ContentfulQuote {
          quote {
            quote
          }
        }
        ... on ContentfulBlogPost {
          slug
          title
          subtitle
          hero {
            fluid {
              src
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
        ... on ContentfulImageFullScreen {
          id
          image {
            fluid(quality: 50, maxWidth: 1800) {
              ...GatsbyContentfulFluid
            }
          }
        }
        ... on ContentfulQuoteAndText {
          id
          text {
            text
          }
          quote {
            quote
          }
        }
        ... on ContentfulProjectsSelected {
          titleProjectsSelected
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
      }
    }
  }
`
