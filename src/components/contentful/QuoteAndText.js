import React from "react"

export const QuoteAndText = props => {
  console.log("QUOTE AND TEXT", props)
  return (
    <div className="wrapper--m">
      <div className="quote_and_text__container">
        <h1>{props.quote_and_text.quote.quote}</h1>
        <div>
          <p>{props.quote_and_text.text.text}</p>
        </div>
      </div>
    </div>
  )
}
