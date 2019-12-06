import React from "react"
import styled from "styled-components"
import _ from "lodash"
import classNames from "classnames"

export const ImageGrid3Or4Photos = props => {
  const checkClassName = className => {
    return _.includes(props.imageGrid.display, className)
  }

  return (
    <div
      className={classNames("grid__container", {
        marginBetween: checkClassName("Same-Margin-Between-Images"),
        marginAround: checkClassName("Images-Center-Margin-Outside"),
      })}
    >
      <Container>
        {props.imageGrid.grid.map((img, i) => {
          const imgStyle = {
            width: `calc(100%/${props.imageGrid.grid.length})`,
            height: "auto",
            padding: "0 10px",
          }
          return (
            <img style={imgStyle} src={img.fluid.src} key={i} alt="grid-img" />
          )
        })}
      </Container>

      {/* {props.imageGrid.text && (
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: props.imageGrid.text.text }}
        />
      )} */}
    </div>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 0 5%;
  margin: 0 auto;

  @media screen and (max-width: 678px) {
    padding: 0;
  }
`
