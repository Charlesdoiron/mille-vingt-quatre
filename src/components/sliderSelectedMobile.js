import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { styledH2, styledProjectDate } from "./typos"

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default class SliderSelected extends Component {
  render() {
    const handleImage = img => {
      console.log("clique !")
      this.props.handleImage(img)
    }

    return this.props.projects.length > 0 ? (
      <ul className="">
        {this.props.projects.map((project, i) => (
          <Link to={`/project/${project.slug}`}>
            <Title
              key={i}
              onClick={e => {
                project.cover && handleImage(project.cover.fluid)
              }}
              className="project__slide"
            >
              <styledH2>
                {project.projectTitle}
                <styledProjectDate>
                  {project.projectTitleDate}
                </styledProjectDate>
              </styledH2>
            </Title>
          </Link>
        ))}
      </ul>
    ) : (
      "NO PROJET"
    )
  }
}
