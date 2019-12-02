import React from "react"
import styled, { keyframes } from "styled-components"

import instagram from "./../../img/pictos/instagram.svg"
import facebook from "./../../img/pictos/facebook.svg"
import vimeo from "./../../img/pictos/vimeo.svg"

export const Socials = ({ isOpen }) => {
  return (
    isOpen && (
      <StyledSocials>
        <a
          href="https://www.instagram.com/1024architecture/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagram" />
        </a>
        <a
          href="https://www.facebook.com/1024architecture/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="facebook" />
        </a>
        <a
          href="https://vimeo.com/the1024"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={vimeo} alt="vimeo" />
        </a>
      </StyledSocials>
    )
  )
}

const appear = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1 !important;

  }
}`

const StyledSocials = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 30px;
  top: 76px;

  @media screen and (max-width: 768px) {
    animation: ${appear} 4500ms;
    top: unset;
    flex-direction: row;
    bottom: 92px;
    width: 60%;
    margin: 0 auto;
    justify-content: space-around;
    position: fixed;
    z-index: 2;
    left: 0;
    right: 0;
  }
  img {
    width: 17px;
    height: 17px;
    margin-bottom: 18px;
    @media screen and (max-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`
