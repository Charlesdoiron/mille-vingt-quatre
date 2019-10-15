import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

import { ImageGrid } from "../components/contentful/imageGrid"
import { ProjectsSelectedList } from "../components/contentful/projectsSelectedList"
import { Hero } from "../components/contentful/hero"
import { Video } from "../components/contentful/video"
import { TwoSectionsWithImage } from "../components/contentful/twoSectionsWithImage"
import { RichText } from "../components/contentful/richText"
import { Quote } from "../components/contentful/quote"
import BlogPosts from "../components/contentful/blogPosts"
import { BlogPostsSelected } from "../components/contentful/blogPostsSelected"
import { ProjectsList } from "../components/contentful/projectsList"
import { ImageFullScreen } from "../components/contentful/imageFullScreen"
import { QuoteAndText } from "../components/contentful/quoteAndText"
import { NewsLetterSuscribe } from "../components/contentful/newsLetterSuscribe"
import { Socials } from "../components/contentful/socials"
import { ContactForm } from "../components/contentful/contactForm"
import { contactInformations } from "../components/contentful/contactInformations"

const FullHeight = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`

const Page = props => {
  const posts = props.data.allContentfulBlogPost
  const page = props.data.contentfulPages
  const modules = props.data.contentfulPages.ui
  const projects = props.data.contentfulPages.allProjects
  const categories = props.data.contentfulPages.allCategories
  const currentPage = props.pageContext.slug

  console.log("PAGE", page)

  console.log("POSTS", posts)
  console.log("CURRENT", currentPage)

  const renderModulesOnPages = modules => {
    if (currentPage === "blog") {
      return <BlogPosts />
    }
    return modules.map((module, i) => {
      switch (module.__typename) {
        case "ContentfulHero":
          return <Hero hero={module} key={i} />
        case "ContentfulImageGrid":
          return <ImageGrid imageGrid={module} key={i} />
        case "ContentfulTwoSectionsImageText":
          return <TwoSectionsWithImage twoSectionsImageText={module} key={i} />
        case "ContentfulProjectsSelected":
          return <ProjectsSelectedList projectSelected={module} key={i} />
        case "ContentfulVideo":
          return <Video video={module} key={i} />
        case "ContentfulBlogPostSelected":
          return <BlogPostsSelected postSelected={module} key={i} />
        case "ContentfulRichText":
          return <RichText text={module} key={i} />
        case "ContentfulQuote":
          return <Quote quote={module} key={i} />
        case "ContentfulImageFullScreen":
          return <ImageFullScreen image={module} key={i} />
        case "ContentfulQuoteAndText":
          return <QuoteAndText quote_and_text={module} key={i} />
        case "ContentfulNewsLetterSuscribe":
          return <NewsLetterSuscribe news_letter={module} key={i} />
        case "ContentfulSocials":
          return <Socials social={module} key={i} />
        case "ContentfulContactForm":
          return <ContactForm contact_form={module} key={i} />
        case "ContentfulSettings":
          return <contactInformations informations={module} key={i} />
        default:
          return null
      }
    })
  }
  const renderProjectsPage = (projects, modules, categories) => {
    return (
      <React.Fragment>
        {modules.map((module, i) => (
          <Quote quote={module} key={i} />
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
        : renderProjectsPage(projects, modules, categories)}
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
            fluid(quality: 50, maxWidth: 1800) {
              ...GatsbyContentfulFluid
            }
          }
          heroTitle
        }
        ... on ContentfulSettings {
          contactInformations {
            contact_page {
              company_address
              company_country
              company_name
            }
            ctas {
              e_mail
              label
            }
          }
        }
        ... on ContentfulContactForm {
          contactFormTitle
          mailTo
        }
        ... on ContentfulBlogPostSelected {
          blogPostSelectedTitle
          blogPost {
            slug
            title
            subtitle
            hero {
              fluid {
                ...GatsbyContentfulFluid
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
              projectTitleDate
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
