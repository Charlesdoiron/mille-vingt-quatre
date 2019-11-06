import React from "react"
import BackgroundImage from "gatsby-background-image"
export const CoverImage = props => {
  return (
    <div
      style={{ width: "100%", position: "relative", height: "80vh !important" }}
    >
      <BackgroundImage
        className="cover"
        fluid={props.image.image.fluid}
        style={{ width: "100%", position: "relative" }}
      ></BackgroundImage>
    </div>
  )
}
