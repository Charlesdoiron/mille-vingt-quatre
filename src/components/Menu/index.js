import React, { useState, useEffect, useRef } from "react"
import { useMediaQuery } from "react-responsive"
import styled, { keyframes, css } from "styled-components"
import { useStateValue } from "./../../context/state"
import MenuItems from "./menuItems"
import { CloseProject } from "./closeProject"
import { Socials } from "./socials"
import { Logo } from "./logo"
import { Burger } from "./burger"

export const Menu = ({ data, menuIsOpen, currentPage }) => {
  const [{ menu }, dispatch] = useStateValue()
  const [isSticky, setSticky] = useState(false)
  const { isOpen } = menu
  const menuRef = useRef(null)

  useEffect(() => {
    const menuHeight = menuRef.current && menuRef.current.offsetHeight
    const transitionMenu = () => {
      if (window.pageYOffset > menuHeight) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }
    if (typeof window !== undefined) {
      window.addEventListener("scroll", transitionMenu, { passive: true })
      return () =>
        window.removeEventListener("scroll", transitionMenu, { passive: true })
    }
  })

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  })
  const isTablet = useMediaQuery({
    query: "(max-width: 992px)",
  })

  const toggleMenu = e => {
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

  const StyledBackground = styled.div`
    background-color: ${isOpen ? "black" : "transparent"};
    height: 100vh;
    width: 100%;
    z-index: 8000000;
    position: fixed;
    top: 0;
    left: 0 !important;
    bottom: 0;
    pointer-events: none;
    overflow: hidden;
    animation: ${isOpen
      ? css`
          ${appear} 200ms
        `
      : ""};
  `

  const MobileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    z-index: 9000000;
    background-color: ${isSticky || currentPage === "projects"
      ? "black"
      : "transparent"};
    background-size: 30px;
    left: 0 !important;
    top: 0 !important;
    width: 100%;
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
        <MobileContainer ref={menuRef} data-aos={!isOpen && "fade-down"}>
          <Logo isOpen={isOpen} handleClick={e => toggleMenu(false)} />
          {!isOpen && <CloseProject />}
          {isOpen && <MenuItems isOpen={isOpen} />}
          <Socials isOpen={isOpen} />
          <Burger handleClick={() => toggleMenu(!isOpen)} isOpen={isOpen} />
        </MobileContainer>

        <StyledBackground isOpen={isOpen} />
      </div>
    </div>
  )
}
