import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Title = styled.h1`
  font-size: 70px;
  z-index: 100;
  position: relative;
  cursor: pointer;
  text-align: center;
  color: white;
  -webkit-text-fill-color: black; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  transition: all 3s ease-in;

  &:hover {
    transition: all 3s ease-in;
    color: white;
    -webkit-text-fill-color: white; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: transparent;

    a,
    span {
      transition: all 2s ease-in-out;
      opacity: 1;
      -webkit-text-fill-color: white;
      -webkit-text-stroke-color: transparent;
    }
    a {
      transition: all 0.3s ease-in-out;
      left: 30px;
    }
  }

  span {
    font-size: 13px;
    position: relative;
    bottom: 40px;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-color: transparent;
    &:hover {
      color: white;
      -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 0;
      -webkit-text-stroke-color: transparent;
    }
  }
  a {
    transition: all 1s ease-in-out;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-color: transparent;
    opacity: 0;
    font-size: 12px;
    left: 28px;
    position: relative;
  }
`

const Container = styled.div`
  height: 550px;
  overflow: scroll;
  width: 100%;
  margin: 0 auto;
  position: relative;
`

export const Projects = props => {
  const [isImage, setIsImage] = useState("")

  function handleImage(img) {
    props.handleImage(img)
  }

  const { projects } = props

  return (
    <div>
      <Container>
        {projects.map(project => {
          return (
            project.projectTitle && (
              <Title
                onClick={e => {
                  project.cover && handleImage(project.cover.fluid.src)
                }}
              >
                {project.projectTitle}
                <span>{project.projectTitleDate}</span>
                {
                  <Link to={`/project/${project.slug}`}>
                    {" "}
                    See the projet ->
                  </Link>
                }
              </Title>
            )
          )
        })}
      </Container>
    </div>
  )
}
