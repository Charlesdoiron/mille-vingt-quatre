import React, { useState } from "react"
import styled from "styled-components"
import { keyframes } from "styled-components"

const Title = styled.h1`
  font-size: 70px;
  z-index: 100;
  position: relative;
  cursor: pointer;
  text-align: center;
  span {
    font-size: 13px;
    position: relative;
    bottom: 40px;
  }
`
const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 90;
  top: 0;
`
const Container = styled.div`
  /* height: 550px; */
  overflow: scroll;
  width: 100%;
  margin: 0 auto;
  position: relative;
`

export const Projects = props => {
  const [isImage, setIsImage] = useState("")

  function handleImage(img) {
    setIsImage(img)
  }

  const { projects } = props
  console.log("projects", projects)
  return (
    <div>
      <Img src={isImage} alt={isImage} />
      <Container>
        <Title
          onClick={e =>
            props.projects.cover && handleImage(props.projects.cover.fluid.src)
          }
        >
          {props.projects.projectTitle}
          <span>{props.projects.projectTitleDate}</span>
        </Title>
      </Container>
    </div>
  )
}
