import React from "react"
import Menu from "./menu"

const Layout = props => {
  return (
    <div className="layout">
      <Menu />
      <div className="children__container">{props.children}</div>
    </div>
  )
}
export default Layout
