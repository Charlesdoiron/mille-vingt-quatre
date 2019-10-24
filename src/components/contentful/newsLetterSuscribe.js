import React from "react"

import news_letter_picto from "./../../img/pictos/news_letter.svg"
import small_arrow_right from "./../../img/pictos/small_arrow_right.svg"
import styled from "styled-components"
import { Styledcapitalize } from "./../typos"

export const NewsLetterSuscribe = props => {
  return (
    <div className="wrapper--m">
      <div className="news--letter--suscribe__container">
        <div>
          <img src={news_letter_picto} alt="" />

          <div>
            <Styledcapitalize>
              {props.news_letter.newsLetterSuscribeTitle}
            </Styledcapitalize>
            <div className="input__container">
              <input
                type="e-mail"
                placeholder={props.news_letter.placeholderNewsLetterSuscribe}
              />
              <div>
                <button type="submit">
                  <Styledcapitalize>
                    {props.news_letter.callToActionNewsLetterSuscribe}
                    <img src={small_arrow_right} alt="" />
                  </Styledcapitalize>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
