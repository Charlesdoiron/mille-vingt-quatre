import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Styledh2, Styledprojectdate, Styledcapitalize } from "./../typos"

import styled, { keyframes } from "styled-components"

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled(Styledh2)`
  max-width: 550px;
  overflow-wrap: break-word;
`

export const ProjectsSelectedList = props => {
  const [imageState, setImageState] = useState("")

  // FOCUS ON FIRST PROJECT
  // function setDefaultImage() {
  //   setImageState(projects[0].cover.fluid)
  // }
  // async function setDefaultProject() {
  //   await setDefaultImage()
  //   const titles = document.querySelectorAll(".project__title__link")
  //   const firstTitle = titles[0]
  //   await firstTitle.classList.add("isActive")
  // }

  // useEffect(() => {
  //   setDefaultProject()
  // }, [])

  const changeImage = img => {
    document.querySelector(".project__img--background--selected") &&
      document
        .querySelector(".project__img--background--selected")
        .classList.toggle("isOut")
    setTimeout(() => {
      setImageState(img)
    }, 1000)
  }

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
      onMouseEnter={e => changeImage(cover.fluid)}
      className="project__title__link"
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
        <Img
          fluid={imageState}
          className="project__img--background--selected"
        />
      )}

      <div className="project__selected">
        <Styledcapitalize>{props.title}</Styledcapitalize>
        <Projects projects={projects} />
      </div>
    </div>
  )
}
