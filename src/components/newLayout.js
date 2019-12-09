import React, { useEffect } from "react"
import styled from "styled-components"
import AOS from "aos"
import "../../node_modules/aos/dist/aos.css"
import { StateProvider } from "../context/state"

import { Menu } from "./Menu/index.js"

export const Layout = props => {
  useEffect(() => {
    AOS.init({
      duration: 1024,
    })
  }, [])

  const StyledLayout = styled.div`
    height: 100%;
    width: 100vw;
    overflow: scroll;
    position: relative;
  `

  const initialState = {
    menu: { isOpen: false },
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "toggleMenu":
        return {
          ...state,
          menu: action.menu,
        }
      default:
        return state
    }
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <StyledLayout className="layout">
        <Menu currentPage={props.currentPage} />
        <div className="children__container">{props.children}</div>
      </StyledLayout>
    </StateProvider>
  )
}
