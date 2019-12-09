import React from "react"
import classNames from "classnames"

import { ImgBlur, Gradient } from "./../animations/image"
export const Video = props => {
  const video_id =
    props.video.video && props.video.video.replace("https://vimeo.com/", "")
  const isGif = props.video.display && props.video.display[0] === "Is-Gif"
  const isCover = props.video.display && props.video.display[0] === "Is-Cover"

  return (
    <ImgBlur
      className={classNames("video__container", { isCover: isCover })}
      data-aos="fade"
    >
      <iframe
        // src={`https://player.vimeo.com/video/${video_id}?title=0&byline=0&portrait=0&controls=0&autoplay=1&loop=1&autopause=1&autopause=0`}
        src={
          isGif || isCover
            ? `https://player.vimeo.com/video/${video_id}?title=0&byline=0&portrait=0&controls=0&autoplay=1&loop=1&autopause=1&autopause=0&background=1`
            : `https://player.vimeo.com/video/${video_id}?title=0&byline=0&portrait=0&controls=1`
        }
        frameBorder="0"
        allow="autoplay; fullscreen"
        autoplay
        loop
        allowFullScreen
        title="video"
      ></iframe>
      {isCover && <Gradient />}
    </ImgBlur>
  )
}
