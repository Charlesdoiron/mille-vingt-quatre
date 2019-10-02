import React from "react"

export const Hero = props => {
  return props.hero.map(hero => {
    return (
      <div>
        <p>{hero.heroTitle}</p>
        {hero.fluid && <img src={hero.fluid.src} />}
      </div>
    )
  })
}
