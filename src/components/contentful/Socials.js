import React from "react"

export const Socials = props => {
  return (
    <div className="wrapper--m">
      <div className="socials__container">
        <h3>{props.social.socialsTitle}</h3>
        <div>
          <span> -></span>
          {props.social.socials.map(s => {
            return (
              <a href={s.socialLink} target="_blank">
                {s.socialTitle}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
