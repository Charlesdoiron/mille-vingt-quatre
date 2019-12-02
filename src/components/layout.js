import React, { useState } from "react"
import styled from "styled-components"
import { Menu } from "./Menu/index.js"

export const Layout = props => {
  const [isOpen, setIsOpen] = useState(false)
  const StyledLayout = styled.div`
    height: 100%;
    width: 100vw;
    overflow: scroll;
    position: ${isOpen ? "fixed" : "relative"};
  `

  return (
    <StyledLayout>
      <Menu
        currentPage={props.currentPage}
        menuIsOpen={e => setIsOpen(e)}
        isOpen={isOpen}
      />
      <div className="children__container">{props.children}</div>
    </StyledLayout>
  )
}
