import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

import { ImageGrid } from "../components/contentful/imageGrid"
import { ProjectsSelectedList } from "../components/contentful/projectsSelectedList"
import { Hero } from "../components/contentful/hero"
import { Video } from "../components/contentful/video"
import { TwoSectionsWithImage } from "../components/contentful/twoSectionsWithImage"
import BlogPosts from "../components/contentful/blogPosts"
import { BlogPostsSelected } from "../components/contentful/blogPostsSelected"
import { ProjectsList } from "../components/contentful/projectsList"
import { ImageFullScreen } from "../components/contentful/imageFullScreen"
import { NewsLetterSuscribe } from "../components/contentful/newsLetterSuscribe"
import { Socials } from "../components/contentful/socials"
import { ContactForm } from "../components/contentful/contactForm"
import { ContactInformations } from "../components/contentful/contactInformations"

import { styledH4 } from "../components/typos"

import "./../style/index.scss"

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
  console.log("MODULES", modules)

  const renderParagraphModules = module => {
    return (
      <div className="wrapper--m">
        {Object.keys(module).map(key => {
          switch (key) {
            case "quote":
              return (
                module.quote && (
                  <div className="quote__container">
                    <styledH4
                      dangerouslySetInnerHTML={{
                        __html: module.quote.quote,
                      }}
                    ></styledH4>
                  </div>
                )
              )

            case "quoteForQuoteAndText":
              return (
                module.quoteForQuoteAndText && (
                  <div className="quote_and_text__container">
                    <styledH4
                      dangerouslySetInnerHTML={{
                        __html:
                          module.quoteForQuoteAndText.quoteForQuoteAndText,
                      }}
                    ></styledH4>

                    {module.textForQuoteAndText && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            module.textForQuoteAndText.textForQuoteAndText,
                        }}
                      ></div>
                    )}
                  </div>
                )
              )
            case "textOneColumn":
              return (
                module.textOneColumn && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      padding: "50px 0",
                    }}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: module.textOneColumn.textOneColumn,
                      }}
                    ></div>

                    {module.textTwoColumns && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: module.textTwoColumns.textTwoColumns,
                        }}
                      ></div>
                    )}
                    {module.textThreeColumns && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: module.textThreeColumns.textThreeColumns,
                        }}
                      ></div>
                    )}
                  </div>
                )
              )

            default:
              return null
          }
        })}
      </div>
    )
  }

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
        case "ContentfulParagraphModule":
          return renderParagraphModules(module)
        case "ContentfulImageFullScreen":
          return <ImageFullScreen image={module} key={i} />

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

  const renderProjectsPage = (modules, projects, categories) => {
    return (
      <React.Fragment>
        {modules.map(module => renderParagraphModules(module))}
        <ProjectsList projects={projects} categories={categories} />
      </React.Fragment>
    )
  }
  return (
    <Layout currentPage={currentPage}>
      {currentPage !== "projects"
        ? renderModulesOnPages(modules)
        : renderProjectsPage(modules, projects, categories)}
    </Layout>
  )
}

export default Page

export const pagequerypagebyslug = graphql`
  query contentfulpagebyslug($slug: String!) {
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

        ... on ContentfulProjectsSelected {
          titleProjectsSelected
          projectsSelected {
            ... on ContentfulProject {
              slug
              projectTitle
              projectTitleDate
              cover {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
