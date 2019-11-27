import styled, { keyframes } from "styled-components"

const mobile = "768px"

const blur = keyframes`
  0% {
    filter: blur(100px);
    opacity: 0.5;
  }

  100%{
    filter: blur(0);
    opacity: 1 !important;

  }
}
`

export const ImgBlur = styled.div`
  animation: ${blur} 1024ms ease-in;
`

export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 300px;
  background: linear-gradient(0deg, #000000 0%, #00000000 100%);
  animation: ${blur} 0.1s ease-in;

  @media (max-width: ${mobile}) {
    background: linear-gradient(0deg, #000000 0%, #00000000 100%);
    height: 100px;

    bottom: 0px;
  }
`
