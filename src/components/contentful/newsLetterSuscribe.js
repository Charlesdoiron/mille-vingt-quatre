import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import * as EmailValidator from "email-validator"

import news_letter_picto from "./../../img/pictos/news_letter.svg"
import small_arrow_right from "./../../img/pictos/small_arrow_right.svg"
import { Styledcapitalize } from "./../typos"

export const NewsLetterSuscribe = props => {
  const defaultStatus = () => props.news_letter.newsLetterSuscribeTitle
  const defaultPlaceholder = () =>
    props.news_letter.placeholderNewsLetterSuscribe
  const [email, setEmail] = useState("")
  const [placeholder, setPlaceholder] = useState(defaultPlaceholder)

  const [status, setStatus] = useState(defaultStatus)
  const [checkMail, setCheckMail] = useState(false)

  const succes = () =>
    "Votre inscription a bien été prise en compte, bienvenue dans la communauté 1024 !"

  const error = () => "Un problème est survenu, merci d'essayer de nouveau"
  function _handleSubmit(e) {
    e.preventDefault()

    const el = document.querySelector(".input__container")
    const form = document.getElementById("contact__form")
    addToMailchimp(email)
      .then(({ msg, result }) => {
        console.log("msg", `${result}: ${msg}`)

        if (result !== "success") {
          throw msg
        }
        el.style.opacity = "0"
        setStatus(succes())
        setTimeout(function() {
          form.reset()
          el.style.opacity = "1"
          setStatus(defaultStatus)
        }, 4000)
      })
      .catch(err => {
        console.log("err", err)
        el.style.opacity = "0"
        setStatus(error())
        setTimeout(function() {
          form.reset()
          el.style.opacity = "1"
          setStatus(defaultStatus)
        }, 4000)
      })
  }
  return (
    <div className="wrapper--m">
      <div className="news--letter--suscribe__container" data-aos="fade-up">
        <div>
          <img src={news_letter_picto} alt="picto" />
          <div style={{ width: "100%" }}>
            <Styledcapitalize>{status}</Styledcapitalize>
            <form onSubmit={_handleSubmit} id="contact__form">
              <div className="input__container">
                <input
                  onChange={e => setEmail(e.target.value)}
                  type="e-mail"
                  placeholder={placeholder}
                  onMouseLeave={e => setCheckMail(true)}
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
            </form>
          </div>
        </div>
        <div>
          {!EmailValidator.validate(email) && email !== "" && checkMail && (
            <span>Merci de rentrer une adresse e-mail valide</span>
          )}
        </div>
      </div>
    </div>
  )
}
