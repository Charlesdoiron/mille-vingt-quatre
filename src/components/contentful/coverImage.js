import React, { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import { FocusedImage } from "image-focus"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
export const CoverImage = props => {
  const [active, setActive] = useState("All")

  useEffect(() => {
    setActive("All")
  }, [])

  const handleCategorie = e => {
    props.handleCategorie(e)
    setActive(e)
  }

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  })

  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-width: 1224px)",
  })
  const x =
    props.image.image.file.details.image.width /
    props.image.focalPoint.focalPoint.x

  return (
    <>
      <div style={{ width: "100%", position: "relative", height: "80vh" }}>
        <BackgroundImage
          className="cover"
          fluid={props.image.image.fluid}
          style={{ width: "100%", position: "relative", height: "80vh" }}
        ></BackgroundImage>
      </div>
      {/* {isDesktopOrLaptop && (
        <div style={{ width: "100%", position: "relative", height: "80vh" }}>
          <Img
            fluid={props.image.image.fluid}
            style={{ width: "100%", position: "relative", height: "80vh" }}
          />
        </div>
      )} */}
      {/* {isTabletOrMobileDevice && (
        <div
          style={{
            position: "relative",
            width: "100%",
          }}
        >
          <img
            className="focused-image"
            style={{
              backgroundImage: `url(${props.image.image.fluid.src})`,
              height: "80vh",
            }}
          />
        </div>
      )} */}
      {/* <div
            style={{ width: "100%", position: "relative", overFlow: "hidden" }}
          >
            <img
              src={props.image.image.fluid.src}
              style={{
                height: "80vh",
                width: "auto",

                position: "relative",
              }}
            />
          </div> */}
    </>
  )
}

//
