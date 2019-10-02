// import React, { useState } from "react"
// import { graphql } from "gatsby"
// import Layout from "./../components/Layout"
// import _ from "lodash"
// import { ImageGrid } from "./../components/contentful/ImageGrid"
// import { ProjectsSelected } from "./../components/contentful/ProjectsSelected"
// import { Hero } from "./../components/contentful/Hero"
// import { Video } from "./../components/contentful/Video"
// import { TwoSectionsWithImage } from "./../components/contentful/TwoSectionsWithImage"
// import { RichText } from "./../components/contentful/RichText"
// import { ProjectsPreview } from "../components/contentful/ProjectsPreview"

// const Page = ({ data }) => {
//   const {
//     projects,
//     twoSectionsImageText,
//     richText,
//     video,
//     hero,
//     projectsSelected,
//     imageGrid,
//   } = data.contentfulPages
//   console.log("data", data)

//   const projectsLength = projects.filter(
//     module => module.__typename === "ContentfulProject"
//   ).length

//   const gridLength = imageGrid.filter(
//     module => module.__typename === "ContentfulImageGrid"
//   ).length

//   const projectsSelectedLength = projectsSelected.filter(
//     module => module.__typename === "ContentfulProjectsSelected"
//   ).length

//   const heroLength = hero.filter(
//     module => module.__typename === "ContentfulHero"
//   ).length

//   const videoLength = video.filter(
//     module => module.__typename === "ContentfulVideo"
//   ).length

//   const richTextLength = richText.filter(
//     module => module.__typename === "ContentfulRichText"
//   ).length

//   const twoSectionsImageTextLength = twoSectionsImageText.filter(
//     module => module.__typename === "ContentfulTwoSectionsImageText"
//   ).length
//   return (
//     <Layout>
//       {gridLength > 0 && <ImageGrid imageGrid={imageGrid} />}
//       {projectsSelectedLength > 0 && (
//         <ProjectsSelected projectsSelected={projectsSelected} />
//       )}
//       {heroLength > 0 && <Hero hero={hero} />}
//       {videoLength > 0 && <Video video={video} />}
//       {richTextLength > 0 && <RichText richText={richText} />}
//       {twoSectionsImageTextLength > 0 && (
//         <TwoSectionsWithImage twoSectionsImageText={twoSectionsImageText} />
//       )}
//       {projectsLength > 0 && <ProjectsPreview projects={projects} />}
//     </Layout>
//   )
// }

// export default Page

// export const pageQuery = graphql`
//   query ContentfulPagesBySlug($slug: String!) {
//     contentfulPages(slug: { eq: $slug }) {
//       imageGrid: ui {
//         ... on ContentfulImageGrid {
//           title
//           grid {
//             title
//             fluid {
//               src
//             }
//           }
//         }
//       }
//       projects: ui {
//         ... on ContentfulProject {
//           projectTitle
//           projectTitleDate
//           slug
//           cover {
//             fluid(maxWidth: 2768, quality: 100) {
//               src
//             }
//           }
//         }
//       }

//       projectsSelected: ui {
//         ... on ContentfulProjectsSelected {
//           projectsSelected {
//             ... on ContentfulProject {
//               slug
//               projectTitle
//               description {
//                 description
//               }
//               cover {
//                 fluid {
//                   src
//                 }
//               }
//             }
//           }
//         }
//       }
//       blogPosts: ui {
//         ... on ContentfulBlogPost {
//           id
//           title
//           slug
//           subtitle
//           hero {
//             fluid {
//               src
//             }
//           }
//         }
//       }

//       hero: ui {
//         ... on ContentfulHero {
//           hero {
//             fluid {
//               src
//             }
//           }
//           heroTitle
//         }
//       }
//       richText: ui {
//         ... on ContentfulRichText {
//           richText {
//             json
//           }
//         }
//       }
//       video: ui {
//         ... on ContentfulVideo {
//           video
//           title
//         }
//       }
//       twoSectionsImageText: ui {
//         ... on ContentfulTwoSectionsImageText {
//           id
//           title
//           twoSectionsText {
//             twoSectionsText
//           }
//           image {
//             fluid {
//               src
//             }
//             description
//           }
//         }
//       }
//     }
//   }
// `
