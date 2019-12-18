import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "./../../images/1024_logo.png"

export const Logo = props => {
  const closeMenu = e => {
    if (props.isOpen) {
      props.handleClick(e)
    }
  }
  return (
    <StyledLogo onClick={e => closeMenu()} className="logo__container">
      <Link to={"/home"}>
        <img alt="logo" src={logo} className="logo" />
      </Link>
    </StyledLogo>
  )
}

const StyledLogo = styled.div`
  width: calc(100% / 3);
`
