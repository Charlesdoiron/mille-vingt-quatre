import React from "react"
import classNames from "classnames"
import Img from "gatsby-image"
export const Image = props => {
  console.log(props.image.displayImage[0])
  const display = props.image.displayImage[0]
  return (
    <div
      className={classNames("image__container", {
        alignRight: display === "Align-Right",
      })}
    >
      <Img fluid={props.image.image.sizes} />
    </div>
  )
}
