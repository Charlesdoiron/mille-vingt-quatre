import React from "react"

import { H4 } from "./../typos"
export const QuoteAndText = props => {
  return (
    <div className="wrapper--m">
      <div className="quote_and_text__container">
        <H4>{props.quote_and_text.quote.quote}</H4>
        <div>
          <p>{props.quote_and_text.text.text}</p>
        </div>
      </div>
    </div>
  )
}
