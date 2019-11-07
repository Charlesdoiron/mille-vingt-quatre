import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Styledh2, Styledprojectdate, Styledcapitalize } from "./../typos"

import styled, { keyframes } from "styled-components"

const blur = keyframes`
  0% {
    filter: blur(100px);
    opacity: 0.5;
  }
  100%{
    filter: blur(0);
    opacity: 1 !important;
  }
}
`
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled(Styledh2)`
  max-width: 550px;
  overflow-wrap: break-word;
`

const ImgBck = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  animation: ${blur} 5s ease-in-out 0s;
`

export const ProjectsSelectedList = props => {
  const [imageState, setImageState] = useState("")

  const Project = ({
    isCurrentProject,
    projectTitle,
    projectTitleDate,
    slug,
    cover,
    projectNumber,
  }) => (
    <Link
      to={`/project/${slug}`}
      onMouseEnter={e => setImageState(cover.fluid)}
    >
      <TitleContainer className="project__slide" projectNumber={projectNumber}>
        <Title selected={isCurrentProject}>
          {projectTitle}
          <Styledprojectdate>{projectTitleDate}</Styledprojectdate>
        </Title>
      </TitleContainer>
    </Link>
  )

  const Projects = ({ projects, currentProjectIndex }) => (
    <div className="project__selected__list">
      {projects.map((project, i) => {
        return (
          <Project
            key={project.slug + i}
            projectNumber={i}
            isCurrentProject={currentProjectIndex === i}
            {...project}
          />
        )
      })}
    </div>
  )

  const projects = props.projectSelected.projectsSelected

  return (
    <div className="project__selected__container">
      {imageState && (
        <ImgBck>
          <Img
            fluid={imageState}
            className="project__img--background--selected"
          />
        </ImgBck>
      )}

      <div className="project__selected">
        <Styledcapitalize>{props.title}</Styledcapitalize>
        <Projects projects={projects} />
      </div>
    </div>
  )
}
