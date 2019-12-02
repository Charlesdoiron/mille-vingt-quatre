import React from "react"
import styled from "styled-components"

export const Burger = props => {
  return (
    <MenuRight className="menu-right__container">
      <span onClick={() => props.handleClick()}>
        {!props.isOpen ? (
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
  )
}

const MenuRight = styled.div`
  display: flex;
  justify-content: flex-end;
  top: 7px;
  position: relative;
  margin-right: 30px;
  position: relative;
  width: ${props => (props.isOpen ? "10px" : "calc(100% / 3)")};

  @media screen and (max-width: 768px) {
    position: relative;
    justify-content: flex-end;
    z-index: 2;
    top: 2px;
    position: relative;
    margin-right: 15px;
  }
  a {
    margin: 0 20px;
  }
`
