// import React, { useState } from "react"
// import { graphql } from "gatsby"
// import Layout from "./../components/Layout"

// import { ImageGrid } from "./../components/contentful/ImageGrid"
// import { ProjectsSelected } from "./../components/contentful/ProjectsSelected"
// import { Hero } from "./../components/contentful/Hero"
// import { Video } from "./../components/contentful/Video"
// import { TwoSectionsWithImage } from "./../components/contentful/TwoSectionsWithImage"
// import { RichText } from "./../components/contentful/RichText"
// import { ProjectsPreview } from "../components/contentful/ProjectsPreview"

// const Page = props => {
//   const page = props.data.contentfulPages
//   const ui = props.data.contentfulPages.ui

//   console.log("page", page)

//   const formatModule = ui => {
//     return ui.map(t => {
//       return {
//         [(module = t.__typename)]: {
//           fields: t,
//         },
//       }
//     })
//   }

//   const formatData = type => formatModule(ui).filter(module => module[type])

//   return (
//     <Layout>
//       {page.ui.map(module => {
//         console.log("module", module)
//         switch (module.__typename) {
//           case "ContentfulImageGrid":
//             return <ImageGrid imageGrid={formatData("ContentfulImageGrid")} />

//           case "ContentfulProjectsSelected":
//             return (
//               <ProjectsSelected
//                 projectsSelected={formatData("ContentfulProjectsSelected")}
//               />
//             )

//           case "ContentfulHero":
//             return <Hero hero={formatData("ContentfulHero")} />

//           case "ContentfulVideo":
//             return <Video video={formatData("ContentfulVideo")} />

//           case "ContentfulRichText":
//             return <RichText richText={formatData("ContentfulRichText")} />

//           case "ContentfulTwoSectionsImageText":
//             return (
//               <TwoSectionsWithImage
//                 twoSectionsImageText={formatData(
//                   "ContentfulTwoSectionsImageText"
//                 )}
//               />
//             )

//           case "ContentfulProject":
//             return (
//               <ProjectsPreview projects={formatData("ContentfulProject")} />
//             )

//           default:
//             return
//         }
//       })}
//     </Layout>
//   )
// }

// export default Page

// export const pageQuery = graphql`
//   query ContentfulPageBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     contentfulPages(slug: { eq: $slug }) {
//       id
//       title
//       slug
//       ui {
//         ... on ContentfulHero {
//           hero {
//             fluid {
//               src
//             }
//           }
//           heroTitle
//         }
//         ... on ContentfulImageGrid {
//           title
//           grid {
//             title
//             fluid {
//               src
//             }
//           }
//         }
//         ... on ContentfulProjectsSelected {
//           title
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
//         ... on ContentfulRichText {
//           richText {
//             json
//           }
//         }
//         ... on ContentfulTwoSectionsImageText {
//           title
//           image {
//             fluid {
//               src
//             }
//           }
//           twoSectionsText {
//             twoSectionsText
//           }
//         }
//         ... on ContentfulVideo {
//           video
//         }
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
//     }
//   }
// `
