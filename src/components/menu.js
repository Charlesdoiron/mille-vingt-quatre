import React, { useState } from "react"
import { Link, StaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import logo from "../images/1024_logo.png"
import { graphql } from "gatsby"

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
    <MenuContainer>
      <Link to={"/home"}>
        <img
          src={logo}
          style={{ width: "65px", height: "15px", marginLeft: "20px" }}
        />
      </Link>

      <MenuRight>
        {isOpen &&
          data.contentfulMenu &&
          data.contentfulMenu.menu.map(item => {
            const { slug, title } = item
            return (
              <Link
                to={`/${slug}`}
                key={slug}
                activeStyle={{ textDecoration: "underline" }}
              >
                {title}
              </Link>
            )
          })}
        <a onMouseOver={e => setIsOpen(!isOpen)}>{isOpen ? "--" : "="}</a>
      </MenuRight>
    </MenuContainer>
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
