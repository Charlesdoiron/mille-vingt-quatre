import React from "react"
import styled from "styled-components"
import classNames from "classnames"
export const ImageGrid = props => {
  const display = props.imageGrid.display && props.imageGrid.display[0]

  return (
    <div
      className={classNames("grid__container", {
        marginBetween: display === "Same-Margin-Between-Images",
        marginAround: display === "Images-Center-Margin-Outside",
        TwoThirdsOneThird: display === "Two-Thirds-One-Third",
      })}
    >
      {props.imageGrid.grid.map((img, i) => {
        const imgStyle = {
          width: `calc(100% / ${props.imageGrid.grid.length})`,
          padding: "0 10px",
        }
        return (
          <img style={imgStyle} src={img.fluid.src} key={i} alt="grid-img" />
        )
      })}
    </div>
  )
}
