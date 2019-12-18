import React from "react"
import styled, { keyframes } from "styled-components"
import { Link, StaticQuery } from "gatsby"
import { graphql } from "gatsby"

const MenuItems = ({ data, isOpen }) => {
  return (
    <StyledMenuItems>
      {data.contentfulMenu.menu.map((item, i) => {
        const { slug, title } = item

        return (
          isOpen && (
            <Link
              to={`/${slug}`}
              key={slug}
              activeClassName="isActive"
              className="menu_item"
            >
              {title}
            </Link>
          )
        )
      })}
    </StyledMenuItems>
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
      render={data => <MenuItems data={data} {...props} key={data.slug} />}
    />
  )
}

const appear = keyframes`
  0% {
    opacity: 0;
  }
    opacity: 1 !important;
  }
}`

const StyledMenuItems = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  border: 0;
  align-items: center;
  padding-bottom: 10px !important;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    top: 140px;
    justify-content: center;
    position: absolute;
    left: 50px;
    z-index: 2;
    align-items: flex-start;
  }

  a {
    margin-right: 76px;

    &.isActive {
      border-bottom: 1px solid white;
      @media screen and (max-width: 768px) {
        opacity: 0.7;
        cursor: default;
        pointer-events: none;
      }
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 32px;
      animation: ${appear} 100ms;
      &:nth-child(1) {
        animation: ${appear} 2500ms;
      }
      &:nth-child(2) {
        animation: ${appear} 3000ms;
      }
      &:nth-child(3) {
        animation: ${appear} 3500ms;
      }
      &:nth-child(4) {
        animation: ${appear} 4000ms;
      }
    }
    &:last-child {
      margin-right: 44px;
    }
  }
`
