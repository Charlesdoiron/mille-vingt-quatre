import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "./../components/Layout"
class ProjectContentfulTemplate extends React.Component {
  render() {
    const project = this.props.data.contentfulProject

    const { previous, next } = this.props.pageContext
    console.log(this.props.pageContext)
    return (
      <Layout>
        <h1>{project.projectTitle}</h1>
        <h1>{project.description.description}</h1>
        <img src={project.cover.fluid.src} alt="" />
        <ul>
          <p>Categories</p>
          {project.categories &&
            project.categories.map(categorie => {
              return <li>{categorie.title}</li>
            })}
        </ul>

        <ul>
          <p>Tags</p>
          {project.tags &&
            project.tags.map(tag => {
              return <li>{tag.title}</li>
            })}
        </ul>

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
              <Link to={`project/${previous.node.title}`} rel="prev">
                Back {previous.node.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`project/${next.node.title}`} rel="next">
                Next {next.node.title}
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default ProjectContentfulTemplate

export const pageQuery = graphql`
  query ContentfulProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulProject(slug: { eq: $slug }) {
      projectTitle
      tags {
        title
        slug
      }
      cover {
        fluid {
          src
        }
      }
      description {
        description
      }
      categories {
        title
      }
    }
  }
`
