import React, { Component } from "react"
import styled from "styled-components"

import { Styledh2, Styledprojectdate } from "./typos"

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default class Slider extends Component {
  render() {
    const handleImage = img => {
      this.props.handleImage(img)
    }

    return this.props.projects.length > 0 ? (
      <ul className="project__list__container">
        {this.props.projects.map((project, i) => (
          <Title
            key={i}
            onClick={e => {
              project.cover && handleImage(project.cover.fluid)
            }}
            className="project__slide"
          >
            <Styledh2>
              {project.projectTitle}
              <Styledprojectdate>{project.projectTitleDate}</Styledprojectdate>
            </Styledh2>

            {/* <Link to={`/project/${project.slug}`}> See the project -></Link> */}
          </Title>
        ))}
      </ul>
    ) : (
      "Pas de projets"
    )
  }
}
