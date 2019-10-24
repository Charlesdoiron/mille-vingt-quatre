import React from "react"

export const Video = props => {
  const video_id = props.video.video.replace("https://vimeo.com/", "")
  return (
    <div className="video__container">
      <iframe
        src={`https://player.vimeo.com/video/${video_id}?title=0&byline=0&portrait=0`}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  )
}
