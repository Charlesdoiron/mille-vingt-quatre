import React from "react"

export const ContactForm = props => {
  return (
    <div className="wrapper--m">
      <div className="contact-form__container">
        <div>
          <h3>{props.contact_form.contactFormTitle}</h3>
          <a href={`mailto:${props.contact_form.mailTo}`}>
            ->{props.contact_form.mailTo}
          </a>
        </div>
      </div>
    </div>
  )
}
