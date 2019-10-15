import React from "react"
import Img from "gatsby-image"

export const Hero = props => {
  console.log("HERO", props.hero)
  return (
    <div className="hero__container">
      <Img fluid={props.hero.hero.fluid} />
    </div>
  )
}
