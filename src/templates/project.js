import React from "react"
import { Link, graphql } from "gatsby"
import { animateScroll as scroll } from "react-scroll"

import "./../style/index.scss"
import arrow_next_project from "./../img/pictos/arrow_next_project.svg"

import { StyledH1, Styledh3, Styledprojectdate } from "../components/typos"
import { ImgBlur, Gradient } from "../components/animations/image"
import { Layout } from "../components/newLayout"
import { ImageGrid2Photos } from "../components/contentful/imageGrid2Photos"
import { ImageGrid3Or4Photos } from "../components/contentful/imageGrid3Or4Photos"
import { Credits } from "../components/contentful/credits"
import { ProjectsRelatedList } from "../components/contentful/projectsRelatedList"
import { Video } from "../components/contentful/video"
import { BlogPostsSelected } from "../components/contentful/blogPostsSelected"
import { Image } from "../components/contentful/image"
import { NewsLetterSuscribe } from "../components/contentful/newsLetterSuscribe"
import { Socials } from "../components/contentful/socials"
import { ContactForm } from "../components/contentful/contactForm"
import { RenderParagraphModule } from "./../components/contentful/renderParagraphModule"
import { BehindTheScene } from "./../components/contentful/behindTheScene"
import { CustomSlider as Slider } from "./../components/contentful/slider"
import { CoverImage } from "./../components/contentful/coverImage"

class project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      behindTheSceneIsOpen: false,
    }
  }

  componentDidMount() {
    scroll.scrollToTop({
      duration: 0,
      delay: 0,
      // smooth: "easeInOutQuart",
    })

    let lastScrollTop = 0

    window.addEventListener(
      "scroll",
      function() {
        let st = window.pageYOffset || document.documentElement.scrollTop
        let next = document.querySelector(".next")
        let previous = document.querySelector(".previous")
        if (st < lastScrollTop) {
          if (next) {
            next.style.opacity = "1"
          }
          if (previous) {
            previous.style.opacity = "1"
          }
        } else {
          if (next) {
            next.style.opacity = "0"
          }
          if (previous) {
            previous.style.opacity = "0"
          }
        }
        lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
      },
      false
    )
  }

  componentWillUnmount() {
    var lastScrollTop = 0
    window.removeEventListener(
      "scroll",
      function() {
        var st = window.pageYOffset || document.documentElement.scrollTop
        if (st <= lastScrollTop) {
          document.querySelector(".previous").style.opacity = "1"
          document.querySelector(".next").style.opacity = "1"
        } else {
          document.querySelector(".previous").style.opacity = "0"
          document.querySelector(".next").style.opacity = "0"
        }
        lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
      },
      false
    )
  }

  render() {
    const modules = this.props.data.contentfulProject.modulesUi
    const project = this.props.data.contentfulProject
    const { previous, next } = this.props.pageContext
    console.log(modules, "modules")
    const renderModulesOnPages = modules => {
      return modules.map((module, i) => {
        switch (module.__typename) {
          case "ContentfulImageGrid2Photos":
            return <ImageGrid2Photos imageGrid={module} key={i} />
          case "ContentfulImageGrid3Or4Photos":
            return <ImageGrid3Or4Photos imageGrid={module} key={i} />
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
          <div>
            <CoverImage image={project.image} focalPoint={project.focalPoint} />

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

            <ul className="project__navigation">
              <li
                className="previous"
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
                    <button>
                      {previous.node.projectTitle}
                      <img
                        src={arrow_next_project}
                        alt="previous"
                        style={{
                          transform: "rotate(270deg)",
                          marginLeft: "10px",
                        }}
                      />
                    </button>
                  </Link>
                )}
              </li>
              <li
                className="next"
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
                    <button>
                      <img
                        alt="next"
                        src={arrow_next_project}
                        style={{
                          transform: "rotate(270deg)",
                          marginRight: "10px",
                        }}
                      />
                      {next.node.projectTitle}
                    </button>
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
            <Gradient />
          </div>
        </div>
        {modules && <div>{renderModulesOnPages(modules)}</div>}

        <div className="wrapper--m">
          <div className="credits__titles" data-aos="fade">
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
                  <ProjectsRelatedList
                    projectRelated={module}
                    title="related project"
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
      image {
        file {
          details {
            image {
              width
            }
          }
        }
        fluid(quality: 100, maxWidth: 1980) {
          ...GatsbyContentfulFluid
        }
      }
      focalPoint {
        focalPoint {
          x
          y
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
      tags {
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
        __typename
        ... on ContentfulSlider {
          images {
            fluid(maxWidth: 2500, quality: 100) {
              src
            }
          }
        }
        ... on ContentfulImageGrid2Photos {
          grid {
            fluid {
              src
            }
          }
          text {
            text
          }
          display
        }
        ... on ContentfulImageGrid3Or4Photos {
          grid {
            fluid {
              src
            }
          }
          display
        }
        ... on ContentfulProjectsSelected {
          titleProjectsSelected
          projectsSelected {
            ... on ContentfulProject {
              slug
              projectTitle
              projectTitleDate
              image {
                file {
                  details {
                    image {
                      width
                    }
                  }
                }
                fluid(quality: 100, maxWidth: 2000) {
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
