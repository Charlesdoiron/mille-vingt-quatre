import React from "react"

export const Video = props => {
  const video_id = props.video.video.replace("https://vimeo.com/", "")
  return (
    <div className="video__container">
      <iframe
        // src={`https://player.vimeo.com/video/${video_id}?title=0&byline=0&portrait=0&controls=0&autoplay=1&loop=1&autopause=1&autopause=0`}
        src={`https://player.vimeo.com/video/${video_id}?title=0&byline=0&portrait=0&controls=1`}
        frameBorder="0"
        allow="autoplay; fullscreen"
        autoplay
        loop
        allowFullScreen
        title="video"
      ></iframe>
    </div>
  )
}
