import React from "react"
import { Menu } from "./Menu/index.js"

export const Layout = props => {
  return (
    <div className="layout">
      <Menu currentPage={props.currentPage} />
      <div className="children__container">{props.children}</div>
    </div>
  )
}
