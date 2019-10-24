import React, { Component } from "react"
import styled from "styled-components"

import { styledH2, styledProjectDate } from "./typos"

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default class Slider extends Component {
  componentDidMount() {
    const firstSlide = document.getElementsByClassName("project__slide")[0]
    const listContainer = document.getElementsByClassName(
      "project__list__container"
    )[0]

    // firstSlide.style.border = "thick solid #0000FF"

    // const firstSlideOffsetTop = firstSlide.offsetTop

    window.addEventListener("scroll", function(e) {
      const listContainerPostion = listContainer.getBoundingClientRect().top
      console.log("listContainerPostion", listContainerPostion)
      if (listContainerPostion < 550) {
        listContainer.classList.add("isBluring")
        listContainer.classList.remove("isClear")
      } else if (listContainer.classList.contains("isBluring")) {
        listContainer.classList.add("isClear")
      }
    })
  }

  render() {
    console.log("props slider", this.props)
    const handleImage = img => {
      this.props.handleImage(img)
    }
    const onKeyPressed = e => {
      if (e.key == "ArrowDown") {
        this.slider.slickNext()
      } else if (e.key == "ArrowUp") {
        this.slider.slickPrev()
      } else {
        console.log("plaf")
      }
    }

    return this.props.projects.length > 0 ? (
      <div onKeyDown={e => onKeyPressed(e)}>
        <ul className="project__list__container">
          {this.props.projects.map((project, i) => (
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

              {/* <Link to={`/project/${project.slug}`}> See the project -></Link> */}
            </Title>
          ))}
        </ul>
      </div>
    ) : (
      "Pas de projets"
    )
  }
}
