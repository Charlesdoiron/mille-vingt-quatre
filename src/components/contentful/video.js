import React, { useEffect, useState } from "react"
import classNames from "classnames"
import { ImgBlur, Gradient } from "./../animations/image"
import ReactPlayer from "react-player"
import styled from "styled-components"

export const Video = props => {
  const video_id =
    props.video.video && props.video.video.replace("https://vimeo.com/", "")
  const isGif = props.video.display && props.video.display[0] === "Is-Gif"
  const isCover = props.video.display && props.video.display[0] === "Is-Cover"
  const staticVideo =
    props.video.staticVideo && props.video.staticVideo.file.url
  const { isPlaying, setPlaying } = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setPlaying(true)
    }, 200)
  })
  return (
    <div data-aos={isCover !== undefined ? "" : `fade-up`}>
      <ImgBlur
        className={classNames("video__container", { isCover: isCover })}
        style={{ padding: "0" }}
      >
        {video_id && (
          <iframe
            // src={`https://player.vimeo.com/video/${video_id}?title=0&byline=0&portrait=0&controls=0&autoplay=1&loop=1&autopause=1&autopause=0`}
            src={
              isGif || isCover
                ? `https://player.vimeo.com/video/${video_id}?title=0&byline=0&portrait=0&controls=0&autoplay=1&loop=1&autopause=1&autopause=0&background=1`
                : `https://player.vimeo.com/video/${video_id}?title=0&byline=0&portrait=0&controls=1`
            }
            frameBorder="0"
            allow="autoplay; fullscreen"
            autoPlay
            loop
            allowFullScreen
            title="video"
          ></iframe>
        )}
        {staticVideo && (
          <div
            className={classNames("static--video__container", {
              isCover: isCover,
            })}
          >
            <ReactPlayer
              url={staticVideo}
              playing={isPlaying}
              controls={false}
              loop={true}
            />
          </div>
        )}

        {isCover && !staticVideo && <Gradient />}
      </ImgBlur>
    </div>
  )
}

// width: 500%;
//     height: 90vh;
//     margin: 0 auto;
//     text-align: center;
//     margin-left: -200%;
