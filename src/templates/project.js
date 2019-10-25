import React from "react"
import { Link, graphql } from "gatsby"
import "./../style/index.scss"
import { StyledH1, Styledh4, Styledprojectdate } from "../components/typos"
import BackgroundImage from "gatsby-background-image"
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

import { Image } from "../components/contentful/image"
import { QuoteAndText } from "../components/contentful/quoteAndText"
import { NewsLetterSuscribe } from "../components/contentful/newsLetterSuscribe"
import { Socials } from "../components/contentful/socials"
import { ContactForm } from "../components/contentful/contactForm"
import { ContactInformations } from "../components/contentful/contactInformations"

import Layout from "../components/layout"
class project extends React.Component {
  render() {
    const modules = this.props.data.contentfulProject.modulesUi
    const project = this.props.data.contentfulProject
    const { previous, next } = this.props.pageContext
    console.log("MODULE UI", modules)
    console.log("PROJECT", project)
    const renderModulesOnPages = modules => {
      return modules.map((module, i) => {
        switch (module.__typename) {
          case "ContentfulImageGrid":
            return <ImageGrid imageGrid={module} key={i} />
          case "ContentfulProjectsSelected":
            return <ProjectsSelectedList projectSelected={module} key={i} />
          case "ContentfulVideo":
            return <Video video={module} key={i} />
          case "ContentfulBlogPostSelected":
            return <BlogPostsSelected postSelected={module} key={i} />

          case "ContentfulImageImageAndText":
            return <Image image={module} key={i} />
          case "ContentfulParagraphModule":
            return (
              <div className="wrapper--m  ">
                {Object.keys(module).map(key => {
                  switch (key) {
                    case "quote":
                      return (
                        module.quote && (
                          <div className="quote__container">
                            <Styledh4
                              dangerouslySetInnerHTML={{
                                __html: module.quote.quote,
                              }}
                            ></Styledh4>
                          </div>
                        )
                      )

                    case "quoteForQuoteAndText":
                      return (
                        module.quoteForQuoteAndText && (
                          <div className="quote_and_text__container">
                            <Styledh4
                              dangerouslySetInnerHTML={{
                                __html:
                                  module.quoteForQuoteAndText
                                    .quoteForQuoteAndText,
                              }}
                            ></Styledh4>
                            {module.textForQuoteAndText && (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html:
                                    module.textForQuoteAndText
                                      .textForQuoteAndText,
                                }}
                              ></div>
                            )}
                          </div>
                        )
                      )
                    case "textOneColumn":
                      return (
                        module.textOneColumn && (
                          <div className="text_one_column__container">
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
                                  __html:
                                    module.textThreeColumns.textThreeColumns,
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

          case "ContentfulNewsLetterSuscribe":
            return <NewsLetterSuscribe news_letter={module} key={i} />
          case "ContentfulSocials":
            return <Socials social={module} key={i} />
          case "ContentfulContactForm":
            return <ContactForm contact_form={module} key={i} />
          default:
            return null
        }
      })
    }

    return (
      <Layout>
        <div className="project__container">
          {project.cover && (
            <BackgroundImage
              className="cover"
              fluid={project.cover.fluid}
              style={{ height: "600px" }}
            >
              <div className="wrapper--m">
                <div className="titles">
                  {project.projectTitle && (
                    <StyledH1>
                      {project.projectTitle}
                      <Styledprojectdate>
                        {project.projectTitleDate}
                      </Styledprojectdate>
                    </StyledH1>
                  )}
                  {project.projectSubtitle && <p>{project.projectSubtitle}</p>}
                </div>
              </div>

              <ul>
                <li>
                  {previous && (
                    <Link to={`project/${previous.node.slug}`} rel="prev">
                      {previous.node.projectTitle}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={`project/${next.node.slug}`} rel="next">
                      {next.node.projectTitle}
                    </Link>
                  )}
                </li>
              </ul>
            </BackgroundImage>
          )}
        </div>
        {modules && <div>{renderModulesOnPages(modules)}</div>}
      </Layout>
    )
  }
}

export default project

export const pagequeryproject = graphql`
  query contentfulprojectbyslug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      projectTitle
      projectSubtitle
      projectTitleDate
      tags {
        title
        slug
      }
      cover {
        fluid(quality: 90, maxWidth: 1800) {
          ...GatsbyContentfulFluid
        }
      }

      modulesUi {
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
        ... on ContentfulImageImageAndText {
          display
          text {
            text
          }
          image {
            fluid(quality: 90, maxWidth: 1800) {
              ...GatsbyContentfulFluid
            }
          }
        }

        ... on ContentfulImageGrid {
          display
          grid {
            title
            fluid {
              src
            }
          }
        }
        ... on ContentfulVideo {
          id
          video
        }
      }
      categories {
        title
      }
    }
  }
`
