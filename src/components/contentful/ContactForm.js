import React from "react"
import { H5, Capitalize } from "./../typos"
import arrow_right from "./../../img/pictos/arrow_right.svg"
export const ContactForm = props => {
  return (
    <div className="wrapper--m">
      <div className="contact-form__container">
        <div>
          <Capitalize>{props.contact_form.contactFormTitle}</Capitalize>
          <a href={`mailto:${props.contact_form.mailTo}`}>
            <img src={arrow_right} alt="" />
            <H5>{props.contact_form.mailTo}</H5>
          </a>
        </div>
      </div>
    </div>
  )
}
