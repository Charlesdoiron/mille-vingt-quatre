import React from "react"
import { Link, graphql } from "gatsby"
import layout from "../components/layout"
import { styledPostBlogFont, styledCapitalize } from "../components/typos"
import arrow from "./../img/pictos/arrow_right.svg"

class blogpost extends React.Component {
  render() {
    const blogPost = this.props.data.contentfulBlogPost
    const { previous, next } = this.props.pageContext
    return (
      <layout>
        <div className="blog__post__container">
          <div
            className="cover"
            style={{ backgroundImage: `url(${blogPost.hero.sizes.src})` }}
          >
            <div className="titles">
              <styledPostBlogFont>{blogPost.title}</styledPostBlogFont>
              <p>
                <span className="line"></span>
                {blogPost.subtitle}
              </p>
            </div>
          </div>
          <div className="wrapper--m">
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
                    <styledPostBlogFont>
                      {" "}
                      {previous.node.title}
                    </styledPostBlogFont>
                    <styledCapitalize>
                      <img
                        src={arrow}
                        style={{
                          transform: "rotate(180deg)",
                          margin: "0 20px 0 0",
                        }}
                      />
                      previous article
                    </styledCapitalize>
                  </Link>
                )}
              </li>
              <li className="next__blog__container">
                {next && (
                  <Link to={next.node.slug} rel="next">
                    <styledPostBlogFont> {next.node.title}</styledPostBlogFont>
                    <styledCapitalize>
                      next article <img src={arrow} />
                    </styledCapitalize>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </layout>
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
      hero {
        sizes(quality: 90, maxWidth: 1800) {
          src
        }
      }
    }
  }
`
