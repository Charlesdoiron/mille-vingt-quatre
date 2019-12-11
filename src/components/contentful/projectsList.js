import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { Categories } from "./categories"
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

export const ProjectsList = props => {
  const [categorieState, setCategorieState] = useState("All")
  const [imageState, setImageState] = useState("")
  const [projectsState, setProjectsState] = useState(props.projects)
  const [scrollPosition, setScrollPosition] = useState("")
  const listContainer = useRef(null)

  useEffect(() => {
    const element = listContainer.current
    element.addEventListener("scroll", () => {
      console.log(element.scrollTop)
    })
  })

  const handleCategorie = categorieClicked => {
    setCategorieState(categorieClicked)

    if (categorieClicked === "All") {
      setProjectsState(props.projects)
    } else {
      const resultsWithCategories = props.projects.filter(project => {
        return project.categories !== null
      })
      const projectsFiltered = resultsWithCategories.filter((project, i) => {
        const hadCategorie = project.categories.filter(
          categorie => categorie.slug === categorieClicked
        )
        if (hadCategorie.length > 0) {
          return resultsWithCategories[i]
        } else return null
      })
      setProjectsState(projectsFiltered)
    }
  }

  const changeImage = img => {
    document.querySelector(".project__img--background") &&
      document
        .querySelector(".project__img--background")
        .classList.toggle("isOut")
    console.log(scrollPosition, "myScroll")
    setTimeout(() => {
      setImageState(img)
    }, 300)
  }

  // const leaveImage = img => {
  //   setTimeout(() => {
  //     document.querySelector(".project__img--background") &&
  //       document
  //         .querySelector(".project__img--background")
  //         .classList.toggle("isOut")
  //   }, 500)
  // }

  const Project = ({ projectTitle, projectTitleDate, slug, image }) => (
    <Link
      to={`/project/${slug}`}
      onMouseEnter={e => changeImage(image.fluid)}
      className="project__title__link"
    >
      <TitleContainer className="project__slide">
        <Title>
          {projectTitle}
          <Styledprojectdate>{projectTitleDate}</Styledprojectdate>
        </Title>
      </TitleContainer>
    </Link>
  )

  const Projects = ({ projects }) => (
    <div className="projects__list" ref={listContainer}>
      {projects.map((project, i) => {
        return <Project key={project.slug + i} {...project} />
      })}
    </div>
  )

  return (
    // <div className="projects__container" onMouseLeave={e => leaveImage()}>
    <div className="projects__container">
      {imageState && (
        <Img fluid={imageState} className="project__img--background" />
      )}

      <div className="projects">
        {props.categories && (
          <Categories
            categories={props.categories}
            handleCategorie={handleCategorie}
          />
        )}
        <Projects projects={projectsState} />
      </div>
    </div>
  )
}

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
