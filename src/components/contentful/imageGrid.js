import React from "react"

export class ImageGrid extends React.Component {
  render() {
    console.log("IMAGE GRID", this.props.imageGrid)
    return (
      <div className="wrapper--m">
        <p>{this.props.imageGrid.title}</p>
        {this.props.imageGrid.grid.map(img => {
          return <img src={img.fluid.src} />
        })}
      </div>
    )
  }
}
