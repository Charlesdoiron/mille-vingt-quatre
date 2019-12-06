import React from "react"

import { styledh4 } from "../typos"
export const QuoteAndText = props => {
  return (
    <div className="wrapper--m">
      <div className="quote_and_text__container">
        <styledh4>{props.quote_and_text.quote.quote}</styledh4>
        <div>
          <p>{props.quote_and_text.text.text}</p>
        </div>
      </div>
    </div>
  )
}
