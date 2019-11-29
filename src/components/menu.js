import React, { useState, useEffect } from "react"
import { Link, StaticQuery } from "gatsby"
import { useMediaQuery } from "react-responsive"
import styled from "styled-components"
import { navigate } from "@reach/router"
import close from "./../img/pictos/close.svg"
import logo from "../images/1024_logo.png"
import instagram from "./../img/pictos/instagram.svg"
import facebook from "./../img/pictos/facebook.svg"
import vimeo from "./../img/pictos/vimeo.svg"
import { graphql } from "gatsby"
import { Location } from "@reach/router"
import MenuMobile from "./menuMobile"
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
  @media screen and (max-width: 990px) {
    display: block;
  }
  a {
    margin: 0 20px;
  }
`

const Menu = ({ data }, props) => {
  const [isOpen, setIsOpen] = useState(false)

  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-width: 990px)",
  })

  useEffect(() => {
    if (isOpen) {
      props.isOpen(isOpen)
    }
  })

  return (
    <Location>
      {({ location }) => (
        <MenuContainer>
          <Link to={"/home"}>
            <img alt="logo" src={logo} className="logo" />
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
          {/* MOBILE */}

          {isTabletOrMobileDevice && isOpen && data.contentfulMenu && (
            <div className="menu__content__mobile">
              <MenuMobile />
            </div>
          )}

          <MenuRight className="menu-right__container">
            {/* DESKTOP */}
            {!isTabletOrMobileDevice && isOpen && data.contentfulMenu && (
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
                    rel="noopener noreferrer"
                  >
                    <img src={instagram} alt="instagram" />
                  </a>
                  <a
                    href="https://www.facebook.com/1024architecture/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={facebook} alt="facebook" />
                  </a>
                  <a
                    href="https://vimeo.com/the1024"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={vimeo} alt="vimeo" />
                  </a>
                </div>
              </div>
            )}
            <span onClick={e => setIsOpen(!isOpen)}>
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
            </span>
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
