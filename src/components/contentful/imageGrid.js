import React from "react"

import _ from "lodash"
import classNames from "classnames"

export const ImageGrid = props => {
  const checkClassName = className => {
    return _.includes(props.imageGrid.display, className)
  }

  return (
    <div
      className={classNames("grid__container", {
        marginBetween: checkClassName("Same-Margin-Between-Images"),
        marginAround: checkClassName("Images-Center-Margin-Outside"),
        TwoThirdsOneThird: checkClassName("Two-Thirds-One-Third"),
        TextBottom: checkClassName("Text-Bottom"),
      })}
    >
      <div>
        {props.imageGrid.grid.map((img, i) => {
          const imgStyle = {
            width: "auto",
            height: "auto",
            padding: "0 10px",
          }
          return (
            <img style={imgStyle} src={img.fluid.src} key={i} alt="grid-img" />
          )
        })}
      </div>

      {props.imageGrid.text && (
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: props.imageGrid.text.text }}
        />
      )}
    </div>
  )
}
