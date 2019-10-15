import React from "react"
import Menu from "./menu"

const Layout = props => {
  return (
    <div className="layout">
      <Menu />
      {props.children}
    </div>
  )
}
export default Layout
