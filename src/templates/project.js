import React from "react"
import { Link, graphql } from "gatsby"

import BackgroundImage from "gatsby-background-image"

import "./../style/index.scss"
import arrow_next_project from "./../img/pictos/arrow_next_project.svg"

import { StyledH1, Styledh3, Styledprojectdate } from "../components/typos"

import { ImageGrid } from "../components/contentful/imageGrid"
import { Credits } from "../components/contentful/credits"
import { ProjectsSelectedList } from "../components/contentful/projectsSelectedList"
import { Video } from "../components/contentful/video"
import { BlogPostsSelected } from "../components/contentful/blogPostsSelected"
import { Image } from "../components/contentful/image"
import { NewsLetterSuscribe } from "../components/contentful/newsLetterSuscribe"
import { Socials } from "../components/contentful/socials"
import { ContactForm } from "../components/contentful/contactForm"
import Layout from "../components/layout"
import { RenderParagraphModule } from "./../components/contentful/renderParagraphModule"
import { BehindTheScene } from "./../components/contentful/behindTheScene"
import { CustomSlider as Slider } from "./../components/contentful/slider"

class project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      behindTheSceneIsOpen: false,
    }
  }

  render() {
    const modules = this.props.data.contentfulProject.modulesUi
    const project = this.props.data.contentfulProject
    const { previous, next } = this.props.pageContext
    console.log(modules, "modules")
    const renderModulesOnPages = modules => {
      return modules.map((module, i) => {
        switch (module.__typename) {
          case "ContentfulImageGrid":
            return <ImageGrid imageGrid={module} key={i} />
          case "ContentfulVideo":
            return <Video video={module} key={i} />
          case "ContentfulBlogPostSelected":
            return <BlogPostsSelected postSelected={module} key={i} />
          case "ContentfulImageImageAndText":
            return (
              <div className="wrapper--m">
                <Image image={module} key={i} />
              </div>
            )
          case "ContentfulSlider":
            return <Slider images={module} key={i} />
          case "ContentfulParagraphModule":
            return <RenderParagraphModule module={module} key={i} />
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
          <BackgroundImage
            className="cover"
            fluid={project.cover && project.cover.fluid}
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
              <li
                style={{
                  transform: "rotate(270deg",
                  position: "relative",
                }}
              >
                {previous && (
                  <Link
                    to={`project/${previous.node.slug}`}
                    rel="prev"
                    style={{
                      position: "absolute",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {previous.node.projectTitle}
                    <img
                      src={arrow_next_project}
                      alt="previous"
                      style={{
                        transform: "rotate(270deg)",
                        marginLeft: "10px",
                      }}
                    />
                  </Link>
                )}
              </li>
              <li
                style={{
                  transform: "rotate(90deg)",
                  position: "relative",
                }}
              >
                {next && (
                  <Link
                    to={`project/${next.node.slug}`}
                    rel="next"
                    style={{
                      whiteSpace: "nowrap",
                      position: "absolute",
                    }}
                  >
                    <img
                      alt="next"
                      src={arrow_next_project}
                      style={{
                        transform: "rotate(270deg)",
                        marginRight: "10px",
                      }}
                    />
                    {next.node.projectTitle}
                  </Link>
                )}
              </li>
            </ul>

            {project.legend && (
              <div
                dangerouslySetInnerHTML={{
                  __html: project.legend.legend,
                }}
                className="legend"
              ></div>
            )}
            <div className="gradient"></div>
          </BackgroundImage>
        </div>
        {modules && <div>{renderModulesOnPages(modules)}</div>}

        <div className="wrapper--m">
          <div className="credits__titles">
            <Styledh3>
              {project.projectTitle}
              <Styledprojectdate>{project.projectTitleDate}</Styledprojectdate>
            </Styledh3>
            {project.creditSubtitle && (
              <div
                className="credits__subtitle"
                dangerouslySetInnerHTML={{
                  __html: project.creditSubtitle.creditSubtitle,
                }}
              ></div>
            )}
          </div>

          {project.credits && (
            <div className="credits__container">
              {project.credits.map(credit => {
                return <Credits credit={credit} />
              })}
            </div>
          )}
          <BehindTheScene project={project} />
        </div>
        <div className="related__project__container">
          {modules.map(module => {
            switch (module.__typename) {
              case "ContentfulProjectsSelected":
                return (
                  <ProjectsSelectedList
                    projectSelected={module}
                    title="related project"
                    showAllProjectsLink
                  />
                )
              default:
                return null
            }
          })}
        </div>
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
      legend {
        legend
      }
      tags {
        title
        slug
      }
      cover {
        fluid(quality: 100, maxWidth: 1850) {
          ...GatsbyContentfulFluid
        }
      }
      creditSubtitle {
        creditSubtitle
      }
      credits {
        title
        text {
          text
        }
      }
      categories {
        slug
        blog_post {
          createdAt(formatString: "DD.MM.Y")
          title
          slug
          hero {
            fluid(quality: 90, maxWidth: 1800) {
              ...GatsbyContentfulFluid
            }
          }
          excerpt {
            excerpt
          }
        }
      }

      modulesUi {
        ... on ContentfulSlider {
          images {
            fluid {
              src
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
                fluid(quality: 90, maxWidth: 1800) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
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
          text {
            text
          }
          grid {
            fluid {
              src
            }
          }
        }
        ... on ContentfulVideo {
          video
        }
      }
      categories {
        title
      }
    }
  }
`
