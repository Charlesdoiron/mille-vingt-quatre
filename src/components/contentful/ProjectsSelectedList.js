import React, { useState } from "react"

import Img from "gatsby-image"
import SliderSelected from "../SliderSelected"

export const ProjectsSelectedList = props => {
  const [imageState, setImageState] = useState("")

  const handleImage = img => {
    setImageState(img)
  }

  return (
    <div>
      {imageState && (
        // <Img fluid={imageState} className="project__img--background" />
        <Img fluid={imageState} />
      )}

      <SliderSelected
        projects={props.projects}
        handleImage={img => handleImage(img)}
      />
    </div>
  )
}
