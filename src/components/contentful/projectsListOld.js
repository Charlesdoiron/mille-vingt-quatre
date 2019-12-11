// import React, { useState, useEffect, useRef } from "react"
// import { Categories } from "./categories"
// import { useMediaQuery } from "react-responsive"
// import classNames from "classnames"
// import Slider from "../slider"

// import Img from "gatsby-image"

// export const ProjectsList = props => {
//   const [categorieState, setCategorieState] = useState("All")
//   const [imageState, setImageState] = useState("")
//   const [projectsState, setProjectsState] = useState(props.projects)

//   const containerRef = useRef(null)

//   const isTabletOrMobileDevice = useMediaQuery({
//     query: "(max-width: 1224px)",
//   })

//   const handleCategorie = categorieClicked => {
//     setCategorieState(categorieClicked)

//     if (categorieClicked === "All") {
//       setProjectsState(props.projects)
//     } else {
//       const resultsWithCategories = props.projects.filter(project => {
//         return project.categories !== null
//       })
//       const projectsFiltered = resultsWithCategories.filter((project, i) => {
//         const hadCategorie = project.categories.filter(
//           categorie => categorie.slug === categorieClicked
//         )
//         if (hadCategorie.length > 0) {
//           return resultsWithCategories[i]
//         } else return null
//       })
//       setProjectsState(projectsFiltered)
//     }
//   }

//   useEffect(() => {
//     if (categorieState === "All") {
//       handleCategorie("All")
//     }
//   })

//   const changeImage = img => {
//     document.querySelector(".project__img--background") &&
//       document
//         .querySelector(".project__img--background")
//         .classList.toggle("isOut")
//     setTimeout(() => {
//       setImageState(img)
//     }, 1000)
//   }

//   return (
//     <div ref={containerRef}>
//       {imageState && (
//         <Img fluid={imageState} className="project__img--background" />
//       )}
//       <div
//         className={classNames("project__section--two", {
//           isTabletOrMobileDevice: isTabletOrMobileDevice,
//         })}
//       >
//         {props.categories && (
//           <Categories
//             categories={props.categories}
//             handleCategorie={handleCategorie}
//           />
//         )}

//         <Slider
//           projects={projectsState}
//           handleImage={img => changeImage(img)}
//           containerRef={containerRef}
//           showLinkToProject={false}
//           forDesktop={!isTabletOrMobileDevice}
//         />
//       </div>
//     </div>
//   )
// }
