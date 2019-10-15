import React from "react"
import styled from "styled-components"

import { ThemeProvider } from "styled-components"
import PrimaryMenu from "./PrimaryMenu"

const theme = {
  black: "#00000",
  white: "#FFFFF",
}

const Layout = props => {
  const { currentPage } = props
  const Content = styled.div`
    margin-top: ${currentPage === "projects" ||
    currentPage === "home" ||
    currentPage === "about"
      ? "0px"
      : "70px"};
  `

  return (
    <ThemeProvider theme={theme}>
      <PrimaryMenu />
      <Content className="content">{props.children}</Content>
    </ThemeProvider>
  )
}

export default Layout
