import React from "react"

export const Hero = props => {
  console.log("HERO", props.hero)
  return (
    <div>
      <h2>{props.hero.heroTitle}</h2>
      <img src={props.hero.hero.fluid.src} />
    </div>
  )
}
