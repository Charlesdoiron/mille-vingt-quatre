import React from "react"
import { Link, graphql } from "gatsby"
import "./../style/index.scss"
import Layout from "./../components/layout"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const blogPosts = data.allContentfulBlogPost.edges
    return (
      <Layout>
        {blogPosts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <div key={node.slug}>
              <h3>
                <Link to={node.slug}>{title}</Link>
              </h3>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
