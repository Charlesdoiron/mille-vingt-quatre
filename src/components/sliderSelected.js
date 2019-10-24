import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { styledh2, styledprojectdate } from "./typos"

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default class SliderSelected extends Component {
  render() {
    const handleImage = img => {
      this.props.handleImage(img)
    }

    return this.props.projects.length > 0 ? (
      <ul className="project__title">
        {this.props.projects.map((project, i) => (
          <Link to={`/project/${project.slug}`} key={i}>
            <Title
              onClick={e => {
                project.cover && handleImage(project.cover.fluid)
              }}
              className="project__slide"
            >
              <styledh2>
                {project.projectTitle}
                <styledprojectdate>
                  {project.projectTitleDate}
                </styledprojectdate>
              </styledh2>

              {/* <Link to={`/project/${project.slug}`}> See the project -></Link> */}
            </Title>
          </Link>
        ))}
      </ul>
    ) : (
      "Pas de projets"
    )
  }
}
