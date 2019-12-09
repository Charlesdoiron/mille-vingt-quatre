import React from "react"
import { Styledh5, Styledcapitalize } from "../typos"
import arrow_right from "./../../img/pictos/arrow_right.svg"
export const ContactForm = props => {
  return (
    <div className="wrapper--m">
      <div className="contact-form__container" data-aos="fade-up">
        <div>
          <Styledcapitalize>
            {props.contact_form.contactFormTitle}
          </Styledcapitalize>
          <a href={`mailto:${props.contact_form.mailTo}`}>
            <img src={arrow_right} alt="" />
            <Styledh5>{props.contact_form.mailTo}</Styledh5>
          </a>
        </div>
      </div>
    </div>
  )
}
