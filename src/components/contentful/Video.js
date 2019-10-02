import React from "react"

export const Video = props => {
  console.log("video props", props)
  const { video } = props
  return video.map(module => {
    return (
      module.ContentfulVideo.fields.video !== undefined && (
        <iframe
          title={module.ContentfulVideo.fields.video}
          src={`https://player.vimeo.com/video/${module.ContentfulVideo.fields.video.replace(
            "https://vimeo.com/",
            ""
          )}?title=0&byline=0&portrait=0`}
          style={{
            position: `relative`,
            top: `0`,
            left: `0`,
            width: `100%`,
            height: `100%`,
          }}
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      )
    )
  })
}
