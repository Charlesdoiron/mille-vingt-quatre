import React from "react"
import { Link, graphql } from "gatsby"

import { H1, ProjectDate } from "../components/typos"

import Layout from "../components/layout"
class project extends React.Component {
  render() {
    const project = this.props.data.contentfulProject
    const { previous, next } = this.props.pageContext

    console.log(this.props)
    return (
      <Layout>
        <div className="project__container">
          {project.cover && (
            <div
              className="cover"
              style={{ backgroundImage: `url(${project.cover.fluid.src})` }}
            >
              <div className="wrapper--m">
                <H1>
                  {project.projectTitle}
                  <ProjectDate>{project.projectTitleDate}</ProjectDate>
                </H1>
                <p>{project.projectSubTitle}</p>
              </div>
              <ul>
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
          )}
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
