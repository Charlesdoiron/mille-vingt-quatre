import React from "react"

export class ImageGrid extends React.Component {
  render() {
    return (
      <div className="grid__container">
        {this.props.imageGrid.grid.map((img, i) => {
          return <img src={img.fluid.src} key={i} />
        })}
      </div>
    )
  }
}
