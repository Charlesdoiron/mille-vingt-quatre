import React from "react"

import { Styledh4 } from "./../typos"

export const RenderParagraphModule = props => {
  return (
    <div className="wrapper--m" key={module}>
      {Object.keys(props.module).map(key => {
        switch (key) {
          case "quote":
            return (
              props.module.quote && (
                <div className="quote__container">
                  <Styledh4
                    dangerouslySetInnerHTML={{
                      __html: props.module.quote.quote,
                    }}
                  ></Styledh4>
                </div>
              )
            )

          case "quoteForQuoteAndText":
            return (
              props.module.quoteForQuoteAndText && (
                <div className="quote_and_text__container">
                  <Styledh4
                    dangerouslySetInnerHTML={{
                      __html:
                        props.module.quoteForQuoteAndText.quoteForQuoteAndText,
                    }}
                  ></Styledh4>
                  {props.module.textForQuoteAndText && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          props.module.textForQuoteAndText.textForQuoteAndText,
                      }}
                    ></div>
                  )}
                </div>
              )
            )
          case "textOneColumn":
            return (
              props.module.textOneColumn && (
                <div className="text_one_column__container">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: props.module.textOneColumn.textOneColumn,
                    }}
                  ></div>

                  {props.module.textTwoColumns && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: props.module.textTwoColumns.textTwoColumns,
                      }}
                    ></div>
                  )}
                  {props.module.textThreeColumns && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: props.module.textThreeColumns.textThreeColumns,
                      }}
                    ></div>
                  )}
                </div>
              )
            )

          default:
            return null
        }
      })}
    </div>
  )
}
