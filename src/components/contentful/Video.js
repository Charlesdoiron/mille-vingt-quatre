import React from "react"

export const Video = props => {
  const video_id = props.data.video.replace("https://vimeo.com/", "")
  return (
    <div style={{ padding: `56.25% 0 0 0`, position: `relative` }}>
      <iframe
        src={`https://player.vimeo.com/video/${video_id}?title=0&byline=0&portrait=0`}
        style={{
          position: `absolute`,
          top: `0`,
          left: `0`,
          width: `100%`,
          height: `100%`,
        }}
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </div>
  )
}
