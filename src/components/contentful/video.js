import React, { useEffect, useState } from "react"
import classNames from "classnames"
import { Gradient } from "./../animations/image"
import ReactPlayer from "react-player"

export const Video = props => {
  const video_id =
    props.video.video && props.video.video.replace("https://vimeo.com/", "")
  const video_url = props.video.video && props.video.video
  const isGif = props.video.display && props.video.display[0] === "Is-Gif"
  const isCover = props.video.display && props.video.display[0] === "Is-Cover"
  const staticVideo =
    props.video.staticVideo && props.video.staticVideo.file.url

  const [isPlaying, setPlaying] = useState(false)
  const [isLooping, setLooping] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setPlaying(true)
    }, 100)
    setTimeout(() => {
      setLooping(true)
    }, 120)
  }, [])

  return (
    <div data-aos={isCover !== undefined ? "" : `fade-up`}>
      <div
        className={classNames(
          "video__container",
          {
            isCover: isCover,
          },
          { isStatic: staticVideo }
        )}
      >
        {video_id &&
          (isGif || isCover ? (
            <ReactPlayer
              style={{ width: "100%" }}
              url={video_url}
              controls={true}
              loop={true}
            />
          ) : (
            <ReactPlayer
              url={video_url}
              controls={true}
              loop={false}
              style={{ width: "100%" }}
            />
          ))}
        {staticVideo && (
          <div
            className={classNames("static--video__container", {
              isCover: isCover,
            })}
          >
            <ReactPlayer
              url={staticVideo}
              playing={isPlaying}
              loop={isLooping}
            />
          </div>
        )}

        {isCover && !staticVideo && <Gradient />}
      </div>
    </div>
  )
}
