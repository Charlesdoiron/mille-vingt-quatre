import React, { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"
import styled, { keyframes, css } from "styled-components"

import MenuItems from "./menuItems"
import { CloseProject } from "./closeProject"
import { Socials } from "./socials"
import { Logo } from "./logo"
import { Burger } from "./burger"

export const Menu = ({ data }, props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [willClose, setWillClose] = useState(false)

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  })

  const appear = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1 !important;
    visibility:visible;
  }
}`

  const StyledBackground = styled.div`
    background-color: ${props => (props.isOpen ? "black" : "transparent")};
    height: 100vh;
    width: 100%;
    z-index: 8000000;
    position: fixed;
    top: 0;
    bottom: 0;
    pointer-events: none;

    overflow: hidden;
    animation: ${props =>
      props.isOpen
        ? css`
            ${appear} 500ms
          `
        : ""};
  `

  return !isMobile ? (
    <DesktopContainer>
      <Logo isOpen={isOpen} />
      {!isOpen && <CloseProject isOpen={isOpen} />}
      {isOpen && <MenuItems isOpen={isOpen} />}
      <Socials isOpen={isOpen} />
      <Burger handleClick={e => setIsOpen(!isOpen)} isOpen={isOpen} />
    </DesktopContainer>
  ) : (
    <div>
      <MobileContainer>
        <StyledFixed>
          <Logo isOpen={isOpen} />
          {!isOpen && <CloseProject isOpen={isOpen} />}
          {isOpen && <MenuItems isOpen={isOpen} />}
          <Socials isOpen={isOpen} willClose={willClose} />
          <Burger handleClick={e => setIsOpen(!isOpen)} isOpen={isOpen} />
        </StyledFixed>
        <StyledBackground isOpen={isOpen} className={isOpen ? "isOpen" : {}} />
      </MobileContainer>
    </div>
  )
}

const StyledFixed = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 9000000;
`

const DesktopContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 28px 0;
  z-index: 100;
  width: 100%;
  position: fixed;
  transition: all 1024ms;
`
const MobileContainer = styled.div`
  padding: 39px 0;
  margin: 0 auto;
  width: 100%;
  position: fixed;
  z-index: 999999;
  transition: all 2s;
`
