import styled, { keyframes } from "styled-components"

const blur = keyframes`
  0% {
    filter: blur(100px);
    opacity: 0;
  }
   70% {
    filter: blur(20px);
    opacity: 0.2;
  }
  100%{
    filter: blur(0);
    opacity: 1 !important;
  }
}
`

export const ImgBlur = styled.div`
  animation: ${blur} 0.7s ease-in;
`

export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 300px;
  background: #000000;
  background: linear-gradient(0deg, #000000 0%, #ffffff00 100%);
  animation: ${blur} 0.1s ease-in;
`
