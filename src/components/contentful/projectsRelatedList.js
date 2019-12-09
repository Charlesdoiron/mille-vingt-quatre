import React, { useState } from "react"
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

const ImgBck = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
`

export const ProjectsRelatedList = props => {
  const [imageState, setImageState] = useState("")

  const changeImage = img => {
    document.querySelector(".project__img--background--related") &&
      document
        .querySelector(".project__img--background--related")
        .classList.toggle("isOut")
    setTimeout(() => {
      setImageState(img)
    }, 300)
  }

  const leaveImage = img => {
    setTimeout(() => {
      document.querySelector(".project__img--background--related") &&
        document
          .querySelector(".project__img--background--related")
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
      onMouseEnter={e => changeImage(image.fluid)}
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
    <div className="project__related__list">
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

  const projects = props.projectRelated.projectsSelected

  return (
    <div
      className="project__related__container"
      data-aos="fade-up"
      onMouseLeave={e => leaveImage()}
    >
      <Styledcapitalize>{props.title}</Styledcapitalize>
      {imageState && (
        <ImgBck>
          <Img
            fluid={imageState}
            className="project__img--background--related"
          />
        </ImgBck>
      )}

      <div className="project__related">
        <Projects projects={projects} />
      </div>
    </div>
  )
}

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

// useEffect(() => {
//   const titles = document.querySelectorAll(".project__title__link")
//   const firstTitle = titles[0]
//   firstTitle.classList.remove("isActive")
// }, [imageState])
