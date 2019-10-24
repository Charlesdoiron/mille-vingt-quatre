import React from "react"
import { styledh5, styledcapitalize } from "../typos"
import arrow_right from "./../../img/pictos/arrow_right.svg"
export const ContactForm = props => {
  return (
    <div className="wrapper--m">
      <div className="contact-form__container">
        <div>
          <styledcapitalize>
            {props.contact_form.contactFormTitle}
          </styledcapitalize>
          <a href={`mailto:${props.contact_form.mailTo}`}>
            <img src={arrow_right} alt="" />
            <styledh5>{props.contact_form.mailTo}</styledh5>
          </a>
        </div>
      </div>
    </div>
  )
}
