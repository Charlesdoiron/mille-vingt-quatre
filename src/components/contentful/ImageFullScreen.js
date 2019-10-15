import React from "react"
import Img from "gatsby-image"
export const ImageFullScreen = props => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Img
        fluid={props.image.image.fluid}
        style={{ height: "80vh", width: "100%", position: "relative" }}
      />
    </div>
  )
}
