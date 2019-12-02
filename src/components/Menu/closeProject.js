import React from "react"
import { Location, navigate } from "@reach/router"
import styled from "styled-components"
import close from "./../../img/pictos/close.svg"
export const CloseProject = () => {
  return (
    <StyledClose>
      <Location>
        {({ location }) =>
          location.pathname.substring(0, 9) === "/project/" && (
            <div
              onClick={e => navigate(window.history.back())}
              className="close"
            >
              <img src={close} alt="close" />
              <p>Close</p>
            </div>
          )
        }
      </Location>
    </StyledClose>
  )
}

const StyledClose = styled.div`
  width: calc(100% / 3);
  margin: 0 auto;
  padding-top: 28px;
  @media screen and (max-width: 768px) {
    padding-top: 0;
  }
`
