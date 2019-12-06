import React from "react"
import styled from "styled-components"
import { ImgBlur } from "./../animations/image"
export const CoverImage = props => {
  const ImgResponsive = styled.div`
    div {
      height: 780px;
      background-size: cover;
      background-repeat: no-repeat;

      @media screen and (max-width: 736px) {
        width: 100%;
        background-position-x: -${(props.image.focalPoint.focalPoint.x * 1800) / props.image.image.file.details.image.width / 1.8}px;
      }
    }
  `

  return (
    <ImgResponsive>
      <ImgBlur
        style={{
          backgroundImage: `url(${props.image && props.image.image.fluid.src})`,
        }}
      ></ImgBlur>
    </ImgResponsive>
  )
}
