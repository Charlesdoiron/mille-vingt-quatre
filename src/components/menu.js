import React, { useState } from "react"
import { Link, StaticQuery } from "gatsby"
import styled from "styled-components"
import { navigate } from "@reach/router"
import close from "./../img/pictos/close.svg"
import logo from "../images/1024_logo.png"
import instagram from "./../img/pictos/instagram.svg"
import facebook from "./../img/pictos/facebook.svg"
import vimeo from "./../img/pictos/vimeo.svg"
import { graphql } from "gatsby"
import { Location, Router } from "@reach/router"
const MenuContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  z-index: 100;
  width: 100%;
  position: fixed;
`

const MenuRight = styled.div`
  display: flex;
  justify-content: flex-end;

  a {
    margin: 0 20px;
  }
`

const Menu = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Location>
      {({ location }) => (
        <MenuContainer>
          <Link to={"/home"}>
            <img src={logo} className="logo" />
          </Link>
          {/* location.pathname.substring(0, 9)=> remove project after pathname */}
          {location.pathname.substring(0, 9) === "/project/" && (
            <div
              onClick={e => navigate(window.history.back())}
              className="close"
            >
              <img src={close} alt="close" />
              <p>Close</p>
            </div>
          )}

          <MenuRight className="menu-right__container">
            {isOpen && data.contentfulMenu && (
              <div className="menu__content">
                {data.contentfulMenu.menu.map(item => {
                  const { slug, title } = item
                  return (
                    <Link
                      to={`/${slug}`}
                      key={slug}
                      activeClassName="isActive"
                      className="menu_item"
                    >
                      {title}
                    </Link>
                  )
                })}
                <div className="socials">
                  <a
                    href="https://www.instagram.com/1024architecture/"
                    target="_blank"
                  >
                    <img src={instagram} />
                  </a>
                  <a
                    href="https://www.facebook.com/1024architecture/"
                    target="_blank"
                  >
                    <img src={facebook} />
                  </a>
                  <a href="https://vimeo.com/the1024" target="_blank">
                    <img src={vimeo} />
                  </a>
                </div>
              </div>
            )}
            <a onClick={e => setIsOpen(!isOpen)}>
              {!isOpen ? (
                <div className="burger">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              ) : (
                <div className="burger burgerIsClosed">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              )}
            </a>
          </MenuRight>
        </MenuContainer>
      )}
    </Location>
  )
}

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          contentfulMenu {
            menu {
              title
              slug
            }
          }
        }
      `}
      render={data => <Menu data={data} {...props} key={data.slug} />}
    />
  )
}
