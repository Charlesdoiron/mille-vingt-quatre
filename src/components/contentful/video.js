import React from "react"

export const Video = props => {
  console.log("VIDEO", props)
  const video_id = props.video.video.replace("https://vimeo.com/", "")
  return (
    <iframe
      src={`https://player.vimeo.com/video/${video_id}?title=0&byline=0&portrait=0`}
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    ></iframe>
  )
}
