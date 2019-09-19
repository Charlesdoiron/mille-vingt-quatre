import React from "react"
export const ImageGrid = props => {
  return (
    <div
      className="image__grid"
      style={{
        display: `flex`,
        flexWrap: `wrap`,
        listStyle: `none`,
        padding: `0`,
      }}
    >
      {props.data.grid &&
        props.data.grid.map((image, i) => {
          return (
            <div key={i}>
              <img
                src={image.fluid.src}
                alt=""
                style={{
                  width: `200px`,
                }}
              />
            </div>
          )
        })}
    </div>
  )
}
