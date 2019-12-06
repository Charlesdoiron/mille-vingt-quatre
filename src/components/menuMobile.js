import React, { useEffect } from "react"
import { Link, StaticQuery } from "gatsby"
import styled from "styled-components"
import instagram from "./../img/pictos/instagram.svg"
import facebook from "./../img/pictos/facebook.svg"
import vimeo from "./../img/pictos/vimeo.svg"
import { graphql } from "gatsby"

const MenuMobile = ({ data }) => {
  return (
    <>
      {data.contentfulMenu.menu.map(item => {
        const { slug, title } = item
        return (
          <Link
            to={`/${slug}`}
            activeClassName="isActive"
            key={slug}
            className="menu__item"
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
      <div className="bkg"></div>
    </>
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
      render={data => <MenuMobile data={data} {...props} key={data.slug} />}
    />
  )
}
