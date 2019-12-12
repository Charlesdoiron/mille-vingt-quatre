import React, { useState, useRef, useEffect, useLayoutEffect } from "react"
import { Link } from "gatsby"
import { Categories } from "./categories"
import Img from "gatsby-image"
import { Styledh2, Styledprojectdate } from "../typos"

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
  const listProjects = useRef(null)
  const projectTitleRef = useRef(null)
  const prevScrollY = useRef(0)
  const [goingUp, setGoingUp] = useState(false)

  const [scrollPosition, setscrollPosition] = useState(0)

  useEffect(() => {
    listProjects.current.addEventListener(
      "scroll",
      () => {
        const trigger = 145
        const list = listProjects.current
        const titles = list.children

        for (var i = 0; i < titles.length; i++) {
          const title = titles[i].children[0]
          const imgTitle = title.children[0].getAttribute("data-image")
          const link = title.children[0]

          // LE TITRE PASSE DANS LA ZONE ACTIVE
          if (titles[i].getBoundingClientRect().top < trigger) {
            link.classList.add("isFocus")
            changeImage(imgTitle)
            // LE TITRE EST ACTIF ET VA DISPARAITRE
            if (-20 > titles[i].getBoundingClientRect().top) {
              link.classList.add("isOut")
            } // LE TITRE EST ACTIF ET VA REAPARAITRE
            else {
              link.classList.remove("isOut")
            }
            // RESET
          } else {
            link.classList.remove("isFocus")
          }
        }
      },
      { passive: true }
    )
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

  const Project = ({ projectTitle, projectTitleDate, slug, image }) => {
    return (
      <Link
        to={`/project/${slug}`}
        onFocus={e => changeImage(image.fluid)}
        className="project__title__link"
      >
        <TitleContainer className="project__slide">
          <Title style={{ margin: "0 0 50px 0" }} data-image={image.fluid.src}>
            {projectTitle}
            <Styledprojectdate>{projectTitleDate}</Styledprojectdate>
          </Title>
        </TitleContainer>
      </Link>
    )
  }

  const Projects = ({ projects }) => (
    <div className="projects__list" ref={listProjects}>
      {projects.map((project, i) => {
        return <Project key={project.slug + i} {...project} />
      })}
    </div>
  )

  return (
    // <div className="projects__container" onMouseLeave={e => leaveImage()}>
    <div className="projects__container">
      {imageState && (
        <img src={imageState} className="project__img--background" />
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
