import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "./../../images/1024_logo.png"

export const Logo = () => {
  return (
    <StyledLogo>
      <Link to={"/home"}>
        <img alt="logo" src={logo} className="logo" />
      </Link>
    </StyledLogo>
  )
}

const StyledLogo = styled.div`
  width: calc(100% / 3);
  padding: 28px 0;
  @media screen and (max-width: 768px) {
    padding: 39px 0;
  }
`