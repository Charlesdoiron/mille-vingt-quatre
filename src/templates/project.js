import React from "react"
import { Link, graphql } from "gatsby"
import "./../style/index.scss"

import { StyledH1, Styledh4, Styledprojectdate } from "../components/typos"
import BackgroundImage from "gatsby-background-image"
import { ImageGrid } from "../components/contentful/imageGrid"
import { ProjectsSelectedList } from "../components/contentful/projectsSelectedList"

import { Video } from "../components/contentful/video"
import arrow_next_project from "./../img/pictos/arrow_next_project.svg"
import { BlogPostsSelected } from "../components/contentful/blogPostsSelected"

import { Image } from "../components/contentful/image"

import { NewsLetterSuscribe } from "../components/contentful/newsLetterSuscribe"
import { Socials } from "../components/contentful/socials"
import { ContactForm } from "../components/contentful/contactForm"
import Layout from "../components/layout"
import { RenderParagraphModule } from "./../components/contentful/renderParagraphModule"

class project extends React.Component {
  render() {
    const modules = this.props.data.contentfulProject.modulesUi
    const project = this.props.data.contentfulProject
    const { previous, next } = this.props.pageContext

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
            style={{ height: "600px" }}
            fadeIn="false"
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
                  right: "-20px",
                  position: "relative",
                }}
              >
                {previous && (
                  <Link to={`project/${previous.node.slug}`} rel="prev">
                    {previous.node.projectTitle}
                    <img
                      src={arrow_next_project}
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
                  transform: "rotate(90deg",
                  right: "-20px",
                  position: "relative",
                }}
              >
                {next && (
                  <Link to={`project/${next.node.slug}`} rel="next">
                    {next.node.projectTitle}
                    <img
                      src={arrow_next_project}
                      style={{
                        transform: "rotate(270deg)",
                        marginLeft: "10px",
                      }}
                    />
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
