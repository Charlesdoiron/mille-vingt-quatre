import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"
import Img from "gatsby-image"
import { Capitalize } from "../typos"

import SliderSelected from "../sliderSelected"
import SliderSelectedMobile from "../sliderSelectedMobile"

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
    <div>
      {imageState && (
        <Img fluid={imageState} className="project__img--background" />
      )}
      {/* MOBILE */}
      {isTabletOrMobileDevice && (
        <>
          <div className="wrapper--m">
            <Capitalize>
              {props.projectSelected.titleProjectsSelected}
            </Capitalize>
            <SliderSelectedMobile
              projects={props.projectSelected.projectsSelected}
              handleImage={img => handleImage(img)}
            />
          </div>
        </>
      )}
      {/* DESKTOP */}
      {isDesktopOrLaptop && (
        <>
          <div className="wrapper--m">
            <div className="flex">
              <Capitalize style={{ marginRight: "100px", paddingTop: "50px" }}>
                {props.projectSelected.titleProjectsSelected}
              </Capitalize>

              <SliderSelected
                projects={props.projectSelected.projectsSelected}
                handleImage={img => handleImage(img)}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}
