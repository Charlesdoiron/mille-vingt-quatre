import React, { useEffect } from "react"
import baffle from "baffle"

import { Styledquoteprojects } from "../typos"

export const Quote = props => {
  useEffect(() => {
    baffle(".quote__text", {
      characters: "1024 ‥ …",
      speed: 75,
    }).reveal(4096)
  })

  return (
    <div className="quote__container">
      <Styledquoteprojects className="quote__text">
        {props.quote.quote.quote}
      </Styledquoteprojects>
      <div className="gradient"></div>
    </div>
  )
}
