import React from "react"
import { Link } from "gatsby"
import map from "./../../img/1024_map.png"
import map_mobile from "./../../img/1024_map_mobile.png"
import styled from "styled-components"
import { Styledcapitalize } from "../typos"
import { useMediaQuery } from "react-responsive"

export const ContactInformations = props => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  })

  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-width: 1224px)",
  })

  return (
    <div className="contact__informations__container">
      <div>
        <a
          target="_blank"
          href="https://www.google.com/maps/place/27+Passage+Courtois,+75011+Paris/@48.8573507,2.3860311,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66df522f34a0f:0xff5d4ce24e893133!8m2!3d48.8573507!4d2.3882198"
        >
          {isDesktopOrLaptop ? <img src={map} /> : ""}
          {isTabletOrMobileDevice ? <img src={map_mobile} /> : ""}
        </a>
      </div>
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
