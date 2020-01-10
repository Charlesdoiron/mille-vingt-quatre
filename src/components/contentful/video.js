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
              volume={0}
              muted
              playing
              config={{
                file: {
                  attributes: {
                    autoPlay: true,
                    muted: true,
                  },
                },
              }}
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
              style={{ width: "100%" }}
              url={staticVideo}
              controls={false}
              loop={true}
              volume={0}
              playsinline
              onReady={() =>
                setTimeout(() => {
                  setPlaying(true)
                }, 100)
              }
              muted
              playing={isPlaying}
              config={{
                file: {
                  attributes: {
                    autoPlay: true,
                    muted: true,
                  },
                },
              }}
            />
          </div>
        )}

        {isCover && !staticVideo && <Gradient />}
      </div>
    </div>
  )
}
