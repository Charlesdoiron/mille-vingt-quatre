import React from "react"
// export const ImageGrid = props => {
//   console.log("IMAGE GRID", props.imageGrid)
//   props.imageGrid.map(m => <p>{m.title}</p>)
// }

export class ImageGrid extends React.Component {
  componentDidMount() {
    console.log("mount")
  }
  render() {
    console.log("IMAGE GRID", this.props.imageGrid)
    return (
      <div>
        <p>{this.props.imageGrid.title}</p>
        {this.props.imageGrid.grid.map(img => {
          return <img src={img.fluid.src} />
        })}
      </div>
    )
  }
}
