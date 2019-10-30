import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"
import Img from "gatsby-image"
import { Styledcapitalize } from "../typos"
import styled, { keyframes } from "styled-components"

import Slider from "../slider"

const blur = keyframes`
  0% {
    filter: blur(100px);
    opacity: 0.5;
  }

  100%{
    filter: blur(0);
    opacity: 1 !important;
  }
}
`
const ImgBck = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  animation: ${blur} 5s ease-in-out 0s;
`

export const ProjectsSelectedList = props => {
  const [imageState, setImageState] = useState("")

  const handleImage = img => {
    setImageState(img)
  }

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  })

  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-width: 1224px)",
  })

  return (
    <div className="project__selected__container">
      {imageState && (
        <ImgBck>
          <Img
            fluid={imageState}
            className="project__img--background--selected"
          />
        </ImgBck>
      )}
      <div className="wrapper--m">
        {/* MOBILE */}
        {isTabletOrMobileDevice && (
          <div className="project__selected__container__mobile">
            <Styledcapitalize>
              {props.projectSelected.titleProjectsSelected}
            </Styledcapitalize>
            <Slider
              projects={props.projectSelected.projectsSelected}
              handleImage={img => handleImage(img)}
            />
          </div>
        )}

        {/* DESKTOP */}
        {isDesktopOrLaptop && (
          <div className="projects__list">
            <Styledcapitalize
              style={{ marginRight: "100px", paddingTop: "50px" }}
            >
              {props.projectSelected.titleProjectsSelected}
            </Styledcapitalize>

            <Slider
              projects={props.projectSelected.projectsSelected}
              handleImage={img => handleImage(img)}
            />
          </div>
        )}
      </div>
    </div>
  )
}
