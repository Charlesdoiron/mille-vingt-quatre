import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "./../../node_modules/slick-carousel/slick/slick.css"
import "./../../node_modules/slick-carousel/slick/slick-theme.css"

import { H2, ProjectDate } from "./typos"

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
              <H2>
                {project.projectTitle}
                <ProjectDate>{project.projectTitleDate}</ProjectDate>
              </H2>

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
