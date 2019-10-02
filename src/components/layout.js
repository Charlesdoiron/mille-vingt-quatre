import React from "react"

import { ThemeProvider } from "styled-components"
import PrimaryMenu from "./PrimaryMenu"

const theme = {
  black: "#00000",
  white: "#FFFFF",
}

const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      <div className="layout">
        <PrimaryMenu />
        {props.children}
      </div>
    </ThemeProvider>
  )
}

export default Layout
