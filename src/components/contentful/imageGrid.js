import React from "react"
import classNames from "classnames"
export const ImageGrid = props => {
  console.log("grid", props)
  const display = props.imageGrid.display[0]
  console.log(display)
  return (
    <div
      className={classNames("grid__container", {
        marginBetween: display === "Same-Margin-Between-Images",
        marginAround: display === "Images-Center-Margin-Outside",
      })}
    >
      {props.imageGrid.grid.map((img, i) => {
        return <img src={img.fluid.src} key={i} />
      })}
    </div>
  )
}
