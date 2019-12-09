import React from "react"

export const Credits = props => {
  return (
    <div className="credits" data-aos="fade-up">
      <p className="title">{props.credit.title}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.credit.text.text }}
        className="content"
      ></div>
    </div>
  )
}
