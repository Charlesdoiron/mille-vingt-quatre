import React from "react"
import Menu from "./menu"

const Layout = props => {
  console.log(props)
  return (
    <div className="layout">
      <Menu currentPage={props.currentPage} />
      <div className="children__container">{props.children}</div>
    </div>
  )
}
export default Layout
