import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import { styledcapitalize } from "../typos"

const BlogPost = ({ data }) => {
  return (
    <div>
      <div className="blog-post__container">
        <div className="wrapper--m">
          <styledcapitalize>JOURNAL</styledcapitalize>
        </div>

        <div>
          {data.allContentfulBlogPost.edges.map(({ node }, i) => {
            return (
              <Link
                className="blog-post-selected__card"
                to={`/${node.slug}`}
                key={i}
                style={{ backgroundImage: `url(${node.hero.sizes.src})` }}
              >
                <h1>{node.title}</h1>
                <p>
                  <span className="line"></span> {node.subtitle}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogPost {
        allContentfulBlogPost {
          edges {
            node {
              id
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
        }
      }
    `}
    render={data => <BlogPost data={data} />}
  />
)
