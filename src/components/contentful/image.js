import React, { useEffect, useState } from "react"
import classNames from "classnames"
import styled from "styled-components"

export const Image = props => {
  const [deviceWidth, setDeviceWidth] = useState("")

  function resizeListener() {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 800) {
        setDeviceWidth(window.innerWidth)
      }
    }
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", resizeListener)
      return () => window.removeEventListener("resize", resizeListener)
    }
  }, [])

  console.log(props)

  const x =
    props.focalPoint !== undefined || null
      ? props.image.focalPoint !== undefined || null
        ? props.image.focalPoint.focalPoint.x
        : props.focalPoint.focalPoint.x
      : ""

  const imgWidth =
    props.image.image !== undefined || null
      ? props.image.image.file !== undefined || null
        ? props.image.image.file.details.image.width
        : ""
      : ""

  const img =
    props.image.image !== undefined || null
      ? props.image.image.fluid.src !== undefined || null
        ? props.image.image.fluid.src
        : props.image.fluid.src
      : props.image.image.fluid.src

  const ImgResponsive = styled.div`
    div {
      height: 780px;
      background-size: cover;
      background-repeat: no-repeat;
      opacity: 0.8;
      @media screen and (max-width: 736px) {
        width: 100%;
        background-position-x: -${(x * deviceWidth) / imgWidth + deviceWidth}px;
      }
    }
  `
  console.log("x", x)
  console.log("deviceWidth", deviceWidth)
  console.log("imgWidth", imgWidth)
  console.log(
    "calcul 1",
    (x * deviceWidth) / imgWidth + deviceWidth + deviceWidth / 2
  )
  console.log("calcul", (x * deviceWidth) / imgWidth + deviceWidth / 2)
  console.log("deviceWidth / 2", deviceWidth / 2)
  return (
    <div
      className={classNames("image__container", {
        [props.image.display.map(d => d).join(" ")]: true,
      })}
    >
      {props.image.display.map(d => d).join(" ") === "Image-Is-Cover" ? (
        <ImgResponsive>
          <div
            className="img__bkg"
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>
        </ImgResponsive>
      ) : (
        <div data-aos="fade-up">
          <img src={props.image.image.fluid.src} data-aos="fade-up"></img>
          {props.image.text && (
            <div
              dangerouslySetInnerHTML={{ __html: props.image.text.text }}
              className="text__for__image "
              data-aos="fade-up"
            />
          )}
        </div>
      )}
    </div>
  )
}
