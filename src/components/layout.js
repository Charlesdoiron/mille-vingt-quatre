import React, { useEffect } from "react"
import styled from "styled-components"
import AOS from "aos"
import "../../node_modules/aos/dist/aos.css"
import { StateProvider } from "../context/state"
import Helmet from "react-helmet"
import { Menu } from "./Menu/index.js"

export const Layout = props => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
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
        <Helmet>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="static/images/apple-touch-icon.png?v=wAdLbE92nY"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="static/images/favicon-32x32.png?v=wAdLbE92nY"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="static/images/favicon-16x16.png?v=wAdLbE92nY"
          />
          <link
            rel="manifest"
            href="static/images/site.webmanifest?v=wAdLbE92nY"
          />
          <link
            rel="mask-icon"
            href="static/images/safari-pinned-tab.svg?v=wAdLbE92nY"
            color="#1a1a1a"
          />
          <link
            rel="shortcut icon"
            href="static/images/favicon.ico?v=wAdLbE92nY"
          />
          <meta name="apple-mobile-web-app-title" content="1024 Architecture" />
          <meta name="application-name" content="1024 Architecture" />
          <meta name="msapplication-TileColor" content="#1a1a1a" />
          <meta
            name="msapplication-config"
            content="static/images/browserconfig.xml?v=wAdLbE92nY"
          />
          <meta name="theme-color" content="#1a1a1a" />
        </Helmet>
        <Menu currentPage={props.currentPage} />
        <div className="children__container">{props.children}</div>
      </StyledLayout>
    </StateProvider>
  )
}
