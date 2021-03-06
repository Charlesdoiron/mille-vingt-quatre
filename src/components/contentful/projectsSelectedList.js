import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Styledh2, Styledprojectdate, Styledcapitalize } from "../typos"

import styled from "styled-components"

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
  const projectTitleLink = useRef(null)

  useEffect(() => {
    // FOCUS ON FIRST PROJECT
    function setDefaultImage() {
      setImageState(projects[0].image.fluid)
    }
    async function setDefaultProject() {
      setDefaultImage()
      const titles = projectTitleLink.current
      const firstTitle = titles && titles[0]
      if (firstTitle) {
        await firstTitle.classList.add("isActive")
      }
    }
    setDefaultProject()
  }, [])

  const changeImage = img => {
    if (imageState !== img) {
      document.querySelector(".project__img--background--selected") &&
        document
          .querySelector(".project__img--background--selected")
          .classList.toggle("isOut")

      setImageState(img)
    }
  }

  const leaveImage = img => {
    setTimeout(() => {
      document.querySelector(".project__img--background--selected") &&
        document
          .querySelector(".project__img--background--selected")
          .classList.toggle("isOut")
    }, 500)
  }

  const Project = ({
    isCurrentProject,
    projectTitle,
    projectTitleDate,
    slug,
    image,
    projectNumber,
  }) => (
    <Link
      to={`/project/${slug}`}
      className="project__title__link"
      ref={projectTitleLink}
    >
      <TitleContainer className="project__slide" projectNumber={projectNumber}>
        <Title
          selected={isCurrentProject}
          onMouseEnter={e => changeImage(image.fluid)}
        >
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
    <div
      role="button"
      tabIndex="0"
      className="project__selected__container"
      data-aos="fade-up"
      onMouseLeave={e => leaveImage()}
    >
      {imageState && (
        <Img
          fluid={imageState}
          className="project__img--background--selected"
          style={{ opacity: "0.8" }}
        />
      )}

      <div className="project__selected">
        <Styledcapitalize>{props.title}</Styledcapitalize>
        <Projects projects={projects} />
      </div>
    </div>
  )
}
