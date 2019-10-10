import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "./../../node_modules/slick-carousel/slick/slick.css"
import "./../../node_modules/slick-carousel/slick/slick-theme.css"

const Title = styled.div`
  font-size: 70px;
  z-index: 100;
  position: relative;
  cursor: pointer;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;

  color: white;
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;

  &:hover {
    color: white;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: transparent;

    a,
    span {
      opacity: 1;
      -webkit-text-fill-color: white;
      -webkit-text-stroke-color: transparent;
    }
    a {
      left: 30px;
    }
  }

  h2 {
    font-size: 80px;
    margin: 20px 0;
  }

  span {
    font-size: 13px;
    position: relative;
    bottom: 40px;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-color: transparent;

    &:hover {
      color: white;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 0;
      -webkit-text-stroke-color: transparent;
    }
  }
  a {
    -webkit-text-fill-color: white;
    -webkit-text-stroke-color: transparent;
    opacity: 0;
    font-size: 12px;
    left: 28px;
    position: relative;
  }
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
              <h2>
                {project.projectTitle}
                <span>{project.projectTitleDate}</span>
              </h2>

              <Link to={`/project/${project.slug}`}> See the project -></Link>
            </Title>
          ))}
        </ul>
      </div>
    ) : (
      "Pas de projets"
    )
  }
}
