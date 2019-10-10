import React from "react"

export const Quote = props => {
  console.log("QUOTE", props)
  return (
    <div className="quote__container">
      <h1>{props.quote.quote.quote}</h1>
    </div>
  )
}
