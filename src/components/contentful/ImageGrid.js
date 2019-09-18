import React from "react"
export const ImageGrid = props => {
  return (
    <div>
      {props.data &&
        props.data.map((image, i) => {
          return (
            <div className="image__grid" key={i}>
              <p>{image.title}</p>
              <img src={image.fluid.src} alt="" />
            </div>
          )
        })}
    </div>
  )
}
