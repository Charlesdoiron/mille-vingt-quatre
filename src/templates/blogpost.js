import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Styledpostblogfont, Styledcapitalize } from "../components/typos"
import arrow from "./../img/pictos/arrow_right.svg"

class blogpost extends React.Component {
  render() {
    const blogPost = this.props.data.contentfulBlogPost
    const { previous, next } = this.props.pageContext
    return (
      <Layout>
        <div className="blog__post__container">
          <div
            className="cover"
            style={{ backgroundImage: `url(${blogPost.hero.sizes.src})` }}
          >
            <div className="titles">
              <styledpostblogfont>{blogPost.title}</styledpostblogfont>
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
                    <Styledpostblogfont>
                      {previous.node.title}
                    </Styledpostblogfont>
                    <Styledcapitalize>
                      <img
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
                    <styledpostblogfont> {next.node.title}</styledpostblogfont>
                    <Styledcapitalize>
                      next article <img src={arrow} />
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
      hero {
        sizes(quality: 90, maxWidth: 1800) {
          src
        }
      }
    }
  }
`
