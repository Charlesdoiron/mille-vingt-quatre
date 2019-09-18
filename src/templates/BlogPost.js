import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "./../components/Layout"
class BlogPostContentfulTemplate extends React.Component {
  render() {
    const blogPost = this.props.data.contentfulBlogPost
    const { previous, next } = this.props.pageContext
    return (
      <Layout>
        <h1>{blogPost.title}</h1>
        <p>{blogPost.subtitle}</p>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: `0`,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.node.slug} rel="prev">
                Back {previous.node.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.node.slug} rel="next">
                Next {next.node.title}
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      subtitle
    }
  }
`
