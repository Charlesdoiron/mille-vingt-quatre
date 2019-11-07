// import React, { useState, useRef } from "react"
// import { useMediaQuery } from "react-responsive"
// import { Link } from "gatsby"
// import Img from "gatsby-image"
// import { Styledcapitalize } from "../typos"
// import styled, { keyframes } from "styled-components"
// import eye from "./../../img/pictos/eye.svg"
// import Slider from "../slider"

// const blur = keyframes`
//   0% {
//     filter: blur(100px);
//     opacity: 0.5;
//   }
//   100%{
//     filter: blur(0);
//     opacity: 1 !important;
//   }
// }
// `

// const ImgBck = styled.div`
//   width: 100%;
//   height: 100vh;
//   position: absolute;
//   animation: ${blur} 5s ease-in-out 0s;
// `

// export const ProjectsSelectedList = props => {
//   const [imageState, setImageState] = useState("")

//   const containerRef = useRef(null)

//   const isDesktopOrLaptop = useMediaQuery({
//     query: "(min-width: 1224px)",
//   })

//   const isTabletOrMobileDevice = useMediaQuery({
//     query: "(max-width: 1224px)",
//   })

//   const projects = props.projectSelected.projectsSelected
//   const title = props.title || props.projectSelected.titleProjectsSelected

//   return (
//     <div className="project__selected__container" ref={containerRef}>
//       {imageState && (
//         <ImgBck>
//           <Img
//             fluid={imageState}
//             className="project__img--background--selected"
//           />
//         </ImgBck>
//       )}
//       <div className="wrapper--m">
//         {/* MOBILE */}
//         {isTabletOrMobileDevice && (
//           <div className="project__selected__container__mobile">
//             <Slider
//               title={title}
//               projects={projects}
//               handleImage={setImageState}
//               containerRef={containerRef}
//             />
//           </div>
//         )}

//         {/* DESKTOP */}
//         {isDesktopOrLaptop && (
//           <div className="project__selected__container__desktop">
//             <Slider
//               title={title}
//               projects={projects}
//               handleImage={setImageState}
//               forDesktop
//               containerRef={containerRef}
//             />
//           </div>
//         )}
//       </div>

//       {props.showAllProjectsLink && (
//         <div className="see__all__projects">
//           <Link to="/projects">
//             <img src={eye} alt="eye" />
//             <span>See all projects</span>
//           </Link>
//         </div>
//       )}
//     </div>
//   )
// }
