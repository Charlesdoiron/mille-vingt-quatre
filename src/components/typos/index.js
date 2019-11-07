import styled, { css } from "styled-components"

const mobile = "768px"

// Titre du projet dans la page projet
export const StyledH1 = styled.h1`
  font-family: "gt_walsheim_prolight";
  font-size: 110px;
  text-align: left;
  vertical-align: top;

  span {
    bottom: 50px;
  }

  @media (max-width: ${mobile}) {
    font-size: 60px;
  }
`

const selectedCss = css`
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 0.1px;
  -webkit-text-stroke-color: transparent;
`

// Gros titre des projets
export const Styledh2 = styled.h2`
  font-family: "gt_walsheim_prolight";
  font-weight: 100;
  -webkit-font-smoothing: antialiased;
  font-size: 96px;
  text-align: left;
  vertical-align: top;
  letter-spacing: -1%;
  color: white;
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  z-index: 10;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  line-height: 120px;
  /* white-space: nowrap; */

  ${props => props.selected && selectedCss}

  &:hover {
    ${selectedCss}
  }
  @media (max-width: ${mobile}) {
    white-space: normal;
    font-size: 46px;
    line-height: 70px;
  }
`
//Date de projet (à droite des titres de projets)
export const Styledprojectdate = styled.span`
  font-family: "gt_walsheim_prolight";
  font-size: 13px;
  line-height: 19.5px;
  bottom: 40px;
  position: relative;
  color: $white;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 0.1px;
  -webkit-text-stroke-color: transparent;

  @media (max-width: ${mobile}) {
    bottom: 20px;
  }
`

// Sous-titre
export const Styledcapitalize = styled.p`
  font-weight: 100 !important;
  font-family: "gt_walsheim_prolight";
  font-size: 16px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  white-space: nowrap;
  z-index: 10;
  @media (max-width: ${mobile}) {
    font-size: 14px;
    letter-spacing: 14%;
  }
`

// Rebonds
export const Styledh3 = styled.h3`
  font-family: "gt_walsheim_prolight";
  font-size: 60px;
  letter-spacing: -1%;

  @media (max-width: ${mobile}) {
    font-size: 36px;
    line-height: 54px;
  }
`

// Quote sur la home
export const Styledh4 = styled.h4`
  min-width: 59%;
  padding-right: 5%;
  margin: 0;
  font-family: "gt_walsheim_prolight";
  font-size: 40px;
  line-height: 57px;
  p,
  a {
    font-family: "gt_walsheim_prolight";
    font-size: 40px;
    line-height: 57px;
    margin: 0;

    @media (max-width: ${mobile}) {
      font-size: 25px;
      line-height: 36px;
    }
  }

  @media (max-width: ${mobile}) {
    font-size: 25px;
    line-height: 36px;
  }
`
// Quote sur la page projet
export const Styledquoteprojects = styled.h4`
  min-width: 59%;
  padding-right: 5%;
  margin: 0;
  font-family: "gt_walsheim_prolight";
  font-size: 40px;
  line-height: 57px;
  text-align: left;
  font-family: "gt_walsheim_prolight";
  font-size: 50px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 80%;
  margin: 0 auto;

  @media (max-width: ${mobile}) {
    font-size: 25px;
    line-height: 36px;
  }
  p {
    text-align: left;
    font-family: "gt_walsheim_prolight";
    font-size: 50px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 80%;
    margin: 0 auto;

    @media (max-width: ${mobile}) {
      font-size: 25px;
      line-height: 36px;
    }
  }
`

// Gros texte
export const Styledh5 = styled.h5`
  text-align: left;
  font-family: "gt_walsheim_prolight";
  font-size: 40px;
  margin: 0;

  @media (max-width: ${mobile}) {
    font-size: 20px;
  }
`

// Gros texte dans le post de blog
export const Styledpostblogfont = styled.h5`
  text-align: left;
  font-family: "gt_walsheim_prolight";
  font-size: 40px;
  margin: 0;

  @media (max-width: ${mobile}) {
    font-size: 25px;
  }
`

export const Styledblogdate = styled.span`
  font-family: "gt_walsheim_prolight";
  font-size: 12px;
  text-align: left;

  @media (max-width: ${mobile}) {
    font-size: 10px;
  }
`
