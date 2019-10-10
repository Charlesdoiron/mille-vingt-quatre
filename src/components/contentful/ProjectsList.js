import React, { useState, useEffect } from "react"
import { Categories } from "./Categories"

import Slider from "./../Slider"
import Img from "gatsby-image"

export const ProjectsList = props => {
  console.log(props, "projects")
  const [categorieState, setCategorieState] = useState("All")
  const [imageState, setImageState] = useState("")
  const [projectsState, setProjectsState] = useState(props.projects)

  const handleImage = img => {
    setImageState(img)
  }
  const handleCategorie = categorieClicked => {
    setCategorieState(categorieClicked)
    // document
    //   .getElementsByClassName("project__list__container")[0]
    //   .getElementsByTagName("ul")
    //   .classList.add("isBluring")

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
        } else return
      })

      setProjectsState(projectsFiltered)
    }
  }

  useEffect(() => {
    if (categorieState === "All") {
      console.log("useEffect is All ")
      handleCategorie("All")
    }
  }, [categorieState])

  console.log("STATE PROJECTS ", projectsState)

  return (
    <div>
      {imageState && (
        <Img fluid={imageState} className="project__img--background" />
      )}
      <div className="project__section--two">
        {props.categories && (
          <Categories
            categories={props.categories}
            handleCategorie={categorie => handleCategorie(categorie)}
          />
        )}

        <Slider
          projects={projectsState}
          handleImage={img => handleImage(img)}
        />
      </div>
    </div>
  )
}
