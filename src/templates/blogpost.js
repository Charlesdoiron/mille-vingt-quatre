import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "./../style/index.scss"
import { Styledpostblogfont, Styledcapitalize } from "../components/typos"

import { ImageGrid } from "../components/contentful/imageGrid"
import { Credits } from "../components/contentful/credits"
import { ProjectsSelectedList } from "../components/contentful/projectsSelectedList"
import { Video } from "../components/contentful/video"
import { BlogPostsSelected } from "../components/contentful/blogPostsSelected"
import { Image } from "../components/contentful/image"
import { NewsLetterSuscribe } from "../components/contentful/newsLetterSuscribe"
import { Socials } from "../components/contentful/socials"
import { ContactForm } from "../components/contentful/contactForm"

import { RenderParagraphModule } from "./../components/contentful/renderParagraphModule"

import arrow from "./../img/pictos/arrow_right.svg"

class blogpost extends React.Component {
  render() {
    const modules = this.props.data.contentfulBlogPost.modulesUi
    const blogPost = this.props.data.contentfulBlogPost
    const { previous, next } = this.props.pageContext

    console.log("this.props.pageContext", this.props.pageContext)
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
        <div className="blog__post__container">
          <div
            className="cover"
            style={{ backgroundImage: `url(${blogPost.hero.sizes.src})` }}
          >
            <div className="titles">
              <Styledpostblogfont>{blogPost.title}</Styledpostblogfont>
              <p>
                <span className="line"></span>
                {blogPost.subtitle}
              </p>
            </div>
          </div>
          <div className="wrapper--m">
            <div className="blogpost__content">
              {blogPost.contentRich && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: blogPost.contentRich.contentRich,
                  }}
                ></div>
              )}
            </div>
            {modules && <div>{renderModulesOnPages(modules)}</div>}
            <hr />
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: `0`,
              }}
            >
              <li className="previous__blog__container">
                {previous && (
                  <Link to={previous.node.slug} rel="prev">
                    <Styledpostblogfont>
                      {previous.node.title}
                    </Styledpostblogfont>
                    <Styledcapitalize>
                      <img
                        alt="previous"
                        src={arrow}
                        style={{
                          transform: "rotate(180deg)",
                          margin: "0 20px 0 0",
                        }}
                      />
                      previous article
                    </Styledcapitalize>
                  </Link>
                )}
              </li>
              <li className="next__blog__container">
                {next && (
                  <Link to={next.node.slug} rel="next">
                    <Styledpostblogfont> {next.node.title}</Styledpostblogfont>
                    <Styledcapitalize>
                      next article <img alt="next" src={arrow} />
                    </Styledcapitalize>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default blogpost

export const pagequeryblogpost = graphql`
  query contentfulblogpostbyslug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      subtitle
      contentRich {
        contentRich
      }
      hero {
        sizes(quality: 90, maxWidth: 1800) {
          src
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
    }
  }
`
