import React from "react"
import styled from "styled-components"

export const Burger = props => {
  const MenuRight = styled.div`
    display: flex;
    justify-content: flex-end;
    top: 7px;
    position: relative;
    width: ${props.isOpen ? "44px" : "calc(100%/3)"};

    @media screen and (max-width: 768px) {
      position: relative;
      justify-content: flex-end;
      z-index: 2;
      top: 2px;
      margin-right: 15px;
    }

    button {
      padding: 30px;
      background-color: transparent;
      border: 0;

      @media screen and (max-width: 768px) {
        padding: 30px 0 30px 30px;
      }
    }
    a {
      margin: 0 20px;
    }
  `

  return (
    <MenuRight className="menu-right__container">
      <button onClick={() => props.handleClick()}>
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
      </button>
    </MenuRight>
  )
}
