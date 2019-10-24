import React from "react"
import { styledH5, styledCapitalize } from "../typos"
import arrow_right from "./../../img/pictos/arrow_right.svg"
export const ContactForm = props => {
  return (
    <div className="wrapper--m">
      <div className="contact-form__container">
        <div>
          <styledCapitalize>
            {props.contact_form.contactFormTitle}
          </styledCapitalize>
          <a href={`mailto:${props.contact_form.mailTo}`}>
            <img src={arrow_right} alt="" />
            <styledH5>{props.contact_form.mailTo}</styledH5>
          </a>
        </div>
      </div>
    </div>
  )
}
