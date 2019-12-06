import React from "react"
import { Location, navigate } from "@reach/router"
import styled from "styled-components"
import close from "./../../img/pictos/close.svg"
export const CloseProject = () => {
  const handleClick = e => {
    e.preventDefault()
    navigate(window.history.back())
  }
  return (
    <StyledClose>
      <Location>
        {({ location }) =>
          location.pathname.substring(0, 9) === "/project/" && (
            <button
              type="button"
              onClick={e => handleClick(e)}
              className="close"
            >
              <img src={close} alt="close" />
              <p>Close</p>
            </button>
          )
        }
      </Location>
    </StyledClose>
  )
}

const StyledClose = styled.div`
  width: calc(100% / 3);
  margin: 0 auto;
  display: flex;
  justify-content: center;

  button {
    background-color: transparent;
    border: none;
    color: white;
  }
  @media screen and (max-width: 768px) {
    padding-top: 0;
  }
`
