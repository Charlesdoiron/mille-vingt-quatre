import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
// export const indexPageQuery = graphql`
//   query IndexPageQuery {
//     allContentfulProject {
//       edges {
//         node {
//           title
//           description {
//             description
//           }
//         }
//       }
//     }
//   }
// `

export default class IndexPage extends React.Component {
  render() {
  

    return (
      <div>
        <p>plad</p>
        {/* <ul>
          {projects.map((project, index) => {
            return (
              <div>
                <h1 key={index}>{project.title}</h1>
                <p>{project.description.description}</p>
                <div>
                  <Img
                    fixed={project.posterImage && project.posterImage.fixed.src}
                  />
                  <img
                    src={project.posterImage && project.posterImage.fixed.src}
                    alt=""
                  />
                </div>
              </div>
            )
          })}
        </ul> */}
      </div>
    )
  }
}
