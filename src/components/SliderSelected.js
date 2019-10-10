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

export default class SliderSelected extends Component {
  render() {
    const handleImage = img => {
      this.props.handleImage(img)
    }

    return this.props.projects.length > 0 ? (
      <ul className="">
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
    ) : (
      "Pas de projets"
    )
  }
}
