import React from "react"
import Menu from "./menu"

const LayoutHome = props => {
  return (
    <div className="layout">
      <Menu currentPage={props.currentPage} />
      <div className="children__container_in-home">{props.children}</div>
    </div>
  )
}

export default LayoutHome
