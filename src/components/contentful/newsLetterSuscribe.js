import React from "react"
import { Capitalize } from "../typos"
import news_letter_picto from "./../../img/pictos/news_letter.svg"
import small_arrow_right from "./../../img/pictos/small_arrow_right.svg"

export const NewsLetterSuscribe = props => {
  return (
    <div className="wrapper--m">
      <div className="news--letter--suscribe__container">
        <div>
          <img src={news_letter_picto} alt="" />

          <div>
            <Capitalize>{props.news_letter.newsLetterSuscribeTitle}</Capitalize>
            <div className="input__container">
              <input
                type="e-mail"
                placeholder={props.news_letter.placeholderNewsLetterSuscribe}
              />
              <div>
                <button type="submit">
                  <Capitalize>
                    {props.news_letter.callToActionNewsLetterSuscribe}
                    <img src={small_arrow_right} alt="" />
                  </Capitalize>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}