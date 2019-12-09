import React from "react"
import styled from "styled-components"
import { ImgBlur } from "./../animations/image"
export const CoverImage = props => {
  console.log(props)
  const x =
    props.focalPoint === undefined
      ? props.image.focalPoint.focalPoint.x
      : props.focalPoint.focalPoint.x

  const width =
    props.image.image === undefined
      ? props.image.file.details.image.width
      : props.image.image.file.details.image.width

  const bkg =
    props.image.image === undefined
      ? props.image.fluid.src
      : props.image.image.fluid.src

  const ImgResponsive = styled.div`
    div {
      height: 780px;
      background-size: cover;
      background-repeat: no-repeat;
      opacity: 0.8;
      @media screen and (max-width: 736px) {
        width: 100%;
        background-position-x: -${(x * 1800) / width / 2.6}px;
      }
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
