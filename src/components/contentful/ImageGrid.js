import React from "react"
export const ImageGrid = props => {
  console.log("image grid props", props)
  return (
    <ul>
      {props.imageGrid.map(module => {
        return (
          <li>
            {module.ContentfulImageGrid.fields.grid.map(g => {
              return (
                <div>
                  <h2>{g.title}</h2>
                  <img src={g.fluid.src} />
                </div>
              )
            })}
          </li>
        )
      })}
    </ul>
  )
}
