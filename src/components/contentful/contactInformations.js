import React from "react"

import { Styledcapitalize } from "../typos"

export const ContactInformations = props => {
  return (
    <div className="contact__informations__container">
      <div>
        <div className="content">
          <div>
            <Styledcapitalize>
              {props.informations.contactInformations.contact_page.company_name}
            </Styledcapitalize>
            <p>
              {
                props.informations.contactInformations.contact_page
                  .company_address
              }
              <br />
              {
                props.informations.contactInformations.contact_page
                  .company_country
              }
            </p>
          </div>
          {props.informations.contactInformations.ctas.map(cta => {
            return (
              <div key={cta.label}>
                <p>{cta.label}</p>
                <a href={`mailto:${cta.e_mail}`}>{cta.e_mail}</a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
