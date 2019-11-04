import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Styledh2, Styledprojectdate } from "./typos"
import arrow_to_project from "./../img/pictos/arrow_to_project.svg"

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  }
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
            onMouseEnter={e => {
              project.cover && handleImage(project.cover.fluid)
            }}
            className="project__slide"
          >
            <Styledh2>
              {project.projectTitle}
              <Styledprojectdate>{project.projectTitleDate}</Styledprojectdate>
            </Styledh2>
            {this.props.showLinkToProject && (
              <Link
                to={`/project/${project.slug}`}
                className="link__to__project"
              >
                See the project{" "}
                <img alt="see the project" src={arrow_to_project} />
              </Link>
            )}
          </Title>
        ))}
      </ul>
    ) : (
      "NO PROJECT WITH THIS CATEGORY"
    )
  }
}
