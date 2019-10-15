import React from "react"
import { Link, graphql } from "gatsby"

import { H1 } from "../components/typos"

import layout from "../components/layout"
class ProjectContentfulTemplate extends React.Component {
  render() {
    const project = this.props.data.contentfulProject
    const { previous, next } = this.props.pageContext

    return (
      <layout>
        <div className="project__container">
          <H1>{project.projectTitle}</H1>

          <div className="cover">
            {project.cover && <img src={project.cover.fluid.src} alt="" />}
          </div>

          <div className="wrapper--m">
            {project.description && <p>{project.description.description}</p>}
          </div>
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
        </div>
      </layout>
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