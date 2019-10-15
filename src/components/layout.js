import React from "react"
import Menu from "./menu"

const Layout = props => {
  console.log("plaf")
  return (
    <div className="layout">
      <Menu />
      {props.children}
    </div>
  )
}
export default Layout
