import React from "react"
import styled from "styled-components"
import { ImgBlur } from "../animations/image"
export const FocalImage = props => {
  const x = props.focalPoint.x

  const imgWidth = props.image.file.details.image.width

  const bkg = props.image.fluid.src

  const ImgResponsive = styled.div`
    div {
      height: 90vh;
      background-size: cover;
      background-repeat: no-repeat;
      opacity: 0.8;
      width: 100%;
      background-position: ${(x * 100) / imgWidth}% 0;
    }
  `

  return (
    <ImgResponsive>
      <ImgBlur
        style={{
          backgroundImage: `url(${props.image && bkg})`,
        }}
      ></ImgBlur>
    </ImgResponsive>
  )
}
