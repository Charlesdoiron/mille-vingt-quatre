import styled from "styled-components"

const mobile = "768px"
const desktop = "992px"
const tablet = `(min-width: ${mobile}) and (max-width: ${desktop} )`

// Titre du projet dans la page projet
export const H1 = styled.h1`
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
// Gros titre des projets
export const H2 = styled.h2`
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
  z-index: 100;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0 0 40px 0;
  white-space: nowrap;

  &:hover {
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: transparent;
  }
  @media (max-width: ${mobile}) {
    white-space: normal;
  }
  @media (max-width: ${mobile}) {
    font-size: 46px;
  }
`
//Date de projet (à droite des titres de projets)
export const ProjectDate = styled.span`
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
export const Capitalize = styled.p`
  font-weight: 100 !important;
  font-family: "gt_walsheim_prolight";
  font-size: 16px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  white-space: nowrap;
  @media (max-width: ${mobile}) {
    font-size: 14px;
    letter-spacing: 14%;
  }
`

// Rebonds
export const H3 = styled.h3`
  font-family: "gt_walsheim_prolight";
  font-size: 60px;
  letter-spacing: -1%;

  @media (max-width: ${mobile}) {
    font-size: 36px;
    line-height: 54px;
  }
`

// Quote sur la home
export const H4 = styled.h4`
  font-family: "gt_walsheim_prolight";
  font-size: 40px;

  @media (max-width: ${mobile}) {
    font-size: 25px;
    line-height: 36px;
  }
`
// Quote sur la page projet
export const QuoteProjects = styled.h4`
  text-align: left;
  font-family: "gt_walsheim_prolight";
  font-size: 50px;
  position: relative;
  top: 50%; /* poussé de la moitié de hauteur du référent */
  transform: translateY(-50%); /* tiré de la moitié de sa propre hauteur */
  width: 80%;
  margin: 0 auto;

  @media (max-width: ${mobile}) {
    font-size: 25px;
    line-height: 36px;
  }
`

// Gros texte
export const H5 = styled.h5`
  text-align: left;
  font-family: "gt_walsheim_prolight";
  font-size: 40px;
  margin: 0;

  @media (max-width: ${mobile}) {
    font-size: 20px;
  }
`

// Gros texte dans le post de blog
export const PostBlogFont = styled.h5`
  text-align: left;
  font-family: "gt_walsheim_prolight";
  font-size: 40px;
  margin: 0;

  @media (max-width: ${mobile}) {
    font-size: 30px;
  }
`

export const BlogDate = styled.span`
  font-family: "gt_walsheim_prolight";
  font-size: 12px;
  text-align: left;
`
