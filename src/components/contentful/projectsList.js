import React, { useState, useRef, useEffect } from "react"
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
  // const scrollRef = useRef(listProjects.current.scrollTop)

  useEffect(() => {
    listProjects.current.addEventListener("scroll", () => {
      // console.log(
      //   "Nombre de pixel scrollés dans la liste",
      //   listProjects.current.scrollTop
      // )
      // console.log(scrollRef)
      const trigger = listProjects.current.getBoundingClientRect().top + 100
      const list = listProjects.current

      console.log(list.scrollTop, "page")
      console.log("TRIGGER (en px par rapport au haut de la page", trigger)
      console.log("LIST", list)
      const titles = list.children
      for (var i = 0; i < titles.length; i++) {
        console.log(titles[i].getBoundingClientRect().top)
        if (titles[i].getBoundingClientRect().top < trigger) {
          const title = titles[i].children[0]
          const imgTitle = title.children[0].getAttribute("data-image")
          title.style.textFillColor = "white"
          // changeImage(imgTitle)
        } else {
          const title = titles[i].children[0]
          title.style.opacity = "1"
        }
      }
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
          <Title
            style={{ border: "1px solid blue", margin: "0 0 50px 0" }}
            data-image={image.fluid.src}
          >
            {projectTitle}
            <Styledprojectdate>{projectTitleDate}</Styledprojectdate>
          </Title>
        </TitleContainer>
      </Link>
    )
  }

  const Projects = ({ projects }) => (
    <div
      className="projects__list"
      ref={listProjects}
      style={{ border: "1px solid red" }}
    >
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
