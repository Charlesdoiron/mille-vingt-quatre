import React from "react"
import { useMediaQuery } from "react-responsive"
import styled, { keyframes, css } from "styled-components"
import { useStateValue } from "./../../context/state"
import MenuItems from "./menuItems"
import { CloseProject } from "./closeProject"
import { Socials } from "./socials"
import { Logo } from "./logo"
import { Burger } from "./burger"

export const Menu = ({ data, menuIsOpen }, props) => {
  const [{ menu }, dispatch] = useStateValue()
  const { isOpen } = menu

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  })

  console.log("state globale", isOpen)

  const toggleMenu = e => {
    console.log(e)
    dispatch({
      type: "toggleMenu",
      menu: { isOpen: e },
    })
  }

  const appear = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1 !important;
  }
}`

  console.log("STATE", isOpen)

  const StyledBackground = styled.div`
    background-color: ${isOpen ? "black" : "transparent"};
    height: 100vh;
    width: 100%;
    z-index: 8000000;
    position: fixed;
    top: 0;
    bottom: 0;
    pointer-events: none;
    overflow: hidden;
    animation: ${isOpen
      ? css`
          ${appear} 200ms
        `
      : ""};
  `

  return !isMobile ? (
    <DesktopContainer>
      <Logo />
      {!isOpen && <CloseProject isOpen={isOpen} />}
      {isOpen && <MenuItems isOpen={isOpen} />}
      <Socials isOpen={isOpen} />
      <Burger handleClick={e => toggleMenu(!isOpen)} isOpen={isOpen} />
    </DesktopContainer>
  ) : (
    <div>
      <div>
        <StyledFixed>
          <Logo />
          {!isOpen && <CloseProject />}
          {isOpen && <MenuItems isOpen={isOpen} />}
          <Socials isOpen={isOpen} />
          <Burger handleClick={() => toggleMenu(!isOpen)} isOpen={isOpen} />
        </StyledFixed>
        <StyledBackground isOpen={isOpen} />
      </div>
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
  z-index: 100;
  width: 100%;
  position: fixed;
  transition: all 1024ms;
`
