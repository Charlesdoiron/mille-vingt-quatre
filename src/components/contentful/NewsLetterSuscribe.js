import React from "react"

export const NewsLetterSuscribe = props => {
  console.log("QUOTE", props)
  return (
    <div className="wrapper--m">
      <div className="news--letter--suscribe__container">
        <div>
          <img src="http://placehold.it/60x60" alt="" />
          <div>
            <h1>{props.news_letter.newsLetterSuscribeTitle}</h1>
            <input
              type="e-mail"
              placeholder={props.news_letter.placeholderNewsLetterSuscribe}
            />
            <button type="submit">
              {props.news_letter.callToActionNewsLetterSuscribe}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
