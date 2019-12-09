import React from "react"

import { Styledh4 } from "./../typos"

export const RenderParagraphModule = props => {
  return (
    <div className="wrapper--m" key={module}>
      {Object.keys(props.module).map((key, i) => {
        switch (key) {
          case "quote":
            return (
              props.module.quote && (
                <div key={i} className="quote__container" data-aos="fade-up">
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
                <div
                  key={i}
                  className="quote_and_text__container"
                  data-aos="fade-up"
                >
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
                <div
                  key={i}
                  className="text_column__container"
                  data-aos="fade-up"
                >
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
