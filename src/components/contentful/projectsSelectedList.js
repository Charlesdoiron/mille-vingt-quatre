import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Styledcapitalize } from "../typos"
import styled, { keyframes } from "styled-components"
import eye from "./../../img/pictos/eye.svg"
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

  // const [listHeight, setListHeight] = useState("")
  // function getCoords(elem) {
  //   // crossbrowser version
  //   var box = elem.getBoundingClientRect()

  //   var body = document.body
  //   var docEl = document.documentElement

  //   var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
  //   var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft

  //   var clientTop = docEl.clientTop || body.clientTop || 0
  //   var clientLeft = docEl.clientLeft || body.clientLeft || 0

  //   var top = box.top + scrollTop - clientTop
  //   var left = box.left + scrollLeft - clientLeft

  //   return { top: Math.round(top), left: Math.round(left) }
  // }
  // useEffect(() => {
  //   const list = document.querySelector(".project__list__container")
  //   const project = document.querySelector(".project__slide")
  // }, [])

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
              {props.title || props.projectSelected.titleProjectsSelected}
            </Styledcapitalize>
            <div className="overflow">
              <Slider
                projects={props.projectSelected.projectsSelected}
                handleImage={img => handleImage(img)}
              />
            </div>
          </div>
        )}

        {/* DESKTOP */}
        {isDesktopOrLaptop && (
          <div className="project__selected__container__desktop">
            <Styledcapitalize
              style={{ marginRight: "100px", paddingTop: "50px" }}
            >
              {props.title || props.projectSelected.titleProjectsSelected}
            </Styledcapitalize>
            <div className="overflow">
              <Slider
                projects={props.projectSelected.projectsSelected}
                handleImage={img => handleImage(img)}
                showLinkToProject
              />
            </div>
          </div>
        )}
      </div>

      {props.showAllProjectsLink && (
        <div className="see__all__projects">
          <Link to="/projects">
            <img src={eye} alt="eye" />
            <span>See all projects</span>
          </Link>
        </div>
      )}
    </div>
  )
}
