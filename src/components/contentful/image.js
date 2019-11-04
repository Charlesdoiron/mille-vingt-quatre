import React from "react"
import classNames from "classnames"
import Img from "gatsby-image"

export const Image = props => {
  return (
    <div className="wrapper--m">
      <div
        className={classNames("image__container", {
          [props.image.display.map(d => d).join(" ")]: true,
        })}
      >
        <div>
          <Img fluid={props.image.image.fluid} />
          {props.image.text && (
            <div
              dangerouslySetInnerHTML={{ __html: props.image.text.text }}
              className="text__for__image"
            />
          )}
        </div>
      </div>
    </div>
  )
}
