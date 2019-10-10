import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "./../components/Layout"
class ProjectContentfulTemplate extends React.Component {
  render() {
    const project = this.props.data.contentfulProject
    const { previous, next } = this.props.pageContext

    console.log("INSIDE PROJECT", project)
    console.log("CONTEXT PROJECT", this.props.pageContext)

    return (
      <Layout>
        <h1>{project.projectTitle}</h1>
        {project.description && <p>{project.description.description}</p>}

        {project.cover && <img src={project.cover.fluid.src} alt="" />}
        <ul>
          {project.categories && <p>Categories</p>}
          {project.categories &&
            project.categories.map(categorie => {
              return <li>{categorie.title}</li>
            })}
        </ul>

        <ul>
          {project.tags && <p>Tags</p>}
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
              <Link to={`project/${previous.node.slug}`} rel="prev">
                {previous.node.projectTitle}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`project/${next.node.slug}`} rel="next">
                {next.node.projectTitle}
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
