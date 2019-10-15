import React from "react"
import { Capitalize, H5 } from "../typos"
import arrow_right from "./../../img/pictos/arrow_right.svg"
export const Socials = props => {
  return (
    <div className="wrapper--m">
      <div className="socials__container">
        <div>
          <Capitalize>{props.social.socialsTitle}</Capitalize>
          <div>
            <img src={arrow_right} alt="arrow" className="arrow-desktop" />
            {props.social.socials.map((s, i) => {
              return (
                <div key={i}>
                  <a href={s.socialLink} target="_blank">
                    <img
                      src={arrow_right}
                      alt="arrow"
                      className="arrow-mobile"
                    />{" "}
                    <H5>{s.socialTitle}</H5>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
