import React, { useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Layout } from "../components/layout"
import "./../style/index.scss"

import SEO from "../components/seo"

import { ImageGrid } from "../components/contentful/imageGrid"
import { ImageGrid2Photos } from "../components/contentful/imageGrid2Photos"
import { ImageGrid3Or4Photos } from "../components/contentful/imageGrid3Or4Photos"

import { Hero } from "../components/contentful/hero"
import { Video } from "../components/contentful/video"
import { TwoSectionsWithImage } from "../components/contentful/twoSectionsWithImage"
import BlogPosts from "../components/contentful/blogPosts"
import { BlogPostsSelected } from "../components/contentful/blogPostsSelected"
import { ProjectsList } from "../components/contentful/projectsList"
import { ProjectsSelected } from "../components/contentful/projectsSelected"

import { NewsLetterSuscribe } from "../components/contentful/newsLetterSuscribe"
import { Socials } from "../components/contentful/socials"
import { ContactForm } from "../components/contentful/contactForm"
import { ContactInformations } from "../components/contentful/contactInformations"
import { RenderParagraphModule } from "./../components/contentful/renderParagraphModule"
import { Image } from "../components/contentful/image"

const FullHeight = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;

  h4 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`

const Page = props => {
  const page = props.data.contentfulPages
  const modules = props.data.contentfulPages.ui
  const currentPage = props.pageContext.slug

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const renderModulesOnPages = modules => {
    return modules.map((module, i) => {
      switch (module.__typename) {
        case "ContentfulHero":
          return <Hero hero={module} key={i} />
        case "ContentfulImageGrid":
          return <ImageGrid imageGrid={module} key={i} />
        case "ContentfulTwoSectionsImageText":
          return <TwoSectionsWithImage twoSectionsImageText={module} key={i} />
        case "ContentfulProjectsSelected":
          return (
            <ProjectsSelected
              projectSelected={module}
              key={i}
              title="selected projects"
            />
          )
        case "ContentfulImageImageAndText":
          return (
            <div className="wrapper--m">
              <Image image={module} key={i} />
            </div>
          )
        case "ContentfulVideo":
          return <Video video={module} key={i} />
        case "ContentfulBlogPostSelected":
          return <BlogPostsSelected postSelected={module} key={i} />
        case "ContentfulParagraphModule":
          return <RenderParagraphModule module={module} key={i} />
        case "ContentfulImageGrid2Photos":
          return <ImageGrid2Photos imageGrid={module} key={i} />
        case "ContentfulImageGrid3Or4Photos":
          return <ImageGrid3Or4Photos imageGrid={module} key={i} />
        case "ContentfulNewsLetterSuscribe":
          return <NewsLetterSuscribe news_letter={module} key={i} />
        case "ContentfulSocials":
          return <Socials social={module} key={i} />
        case "ContentfulContactForm":
          return <ContactForm contact_form={module} key={i} />
        case "ContentfulSettings":
          return <ContactInformations informations={module} key={i} />
        default:
          return null
      }
    })
  }

  return (
    <Layout currentPage={currentPage}>
      <>
        <SEO description={page.descriptionMetadatas} />
        {renderModulesOnPages(modules)}
      </>
    </Layout>
  )
}

export default Page

export const pagequerypagebyslug = graphql`
  query contentfulpagebyslug {
    site {
      siteMetadata {
        title
        author
      }
    }

    contentfulPages(slug: { eq: "home" }) {
      title
      slug
      descriptionMetadatas
      allProjects: projects {
        projectTitle
        projectTitleDate
        projectSubtitle
        slug
        image {
          file {
            details {
              image {
                width
              }
            }
          }
          fluid(quality: 90, maxWidth: 1800) {
            ...GatsbyContentfulFluid
          }
        }
        focalPoint {
          focalPoint {
            x
            y
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
        __typename
        ... on ContentfulImageGrid3Or4Photos {
          grid {
            fluid {
              src
            }
          }
          display
        }
        ... on ContentfulParagraphModule {
          quote {
            quote
          }
          quoteForQuoteAndText {
            quoteForQuoteAndText
          }
          textForQuoteAndText {
            textForQuoteAndText
          }
          textOneColumn {
            textOneColumn
          }
          textTwoColumns {
            textTwoColumns
          }
          textThreeColumns {
            textThreeColumns
          }
          titleParagraph
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
              sizes(quality: 90, maxWidth: 1800) {
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
        ... on ContentfulVideo {
          video
          display
          staticVideo {
            file {
              url
            }
          }
        }

        ... on ContentfulProjectsSelected {
          titleProjectsSelected
          projectsSelected {
            ... on ContentfulProject {
              slug
              projectTitle
              projectTitleDate
              projectSubtitle
              image {
                file {
                  details {
                    image {
                      width
                    }
                  }
                }
                fluid(quality: 90, maxWidth: 1800) {
                  ...GatsbyContentfulFluid
                }
              }
              focalPoint {
                focalPoint {
                  x
                  y
                }
              }
            }
          }
        }
      }
    }
  }
`
