import React from "react"

export const Hero = props => {
  return (
    <div className="hero">
      <h2>{props.data.heroTitle}</h2>
      <img src={props.data.hero.fluid.src} alt="" />
    </div>
  )
}
