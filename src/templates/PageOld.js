// import React, { useState } from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/Layout"
// import styled from "styled-components"

// import { ImageGrid } from "../components/contentful/ImageGrid"
// import { ProjectsSelectedList } from "../components/contentful/ProjectsSelectedList"
// import { Hero } from "../components/contentful/Hero"
// import { Video } from "../components/contentful/Video"
// import { TwoSectionsWithImage } from "../components/contentful/TwoSectionsWithImage"
// import { RichText } from "../components/contentful/RichText"
// import { Quote } from "../components/contentful/Quote"
// import { BlogPosts } from "../components/contentful/BlogPosts"
// import { BlogPostsSelected } from "../components/contentful/BlogPostsSelected"
// import { ProjectsList } from "../components/contentful/ProjectsList"
// import { ImageFullScreen } from "../components/contentful/ImageFullScreen"
// import { QuoteAndText } from "../components/contentful/QuoteAndText"
// import { NewsLetterSuscribe } from "../components/contentful/NewsLetterSuscribe"
// import { Socials } from "../components/contentful/Socials"
// import { ContactForm } from "../components/contentful/ContactForm"
// import { ContactInformations } from "../components/contentful/contactInformations"

// const FullHeight = styled.div`
//   height: 100vh;
//   width: 100%;
//   position: relative;
// `

// const Page = props => {
//   const posts = props.data.allContentfulBlogPost
//   const page = props.data.contentfulPages
//   const modules = props.data.contentfulPages.ui
//   const projects = props.data.contentfulPages.allProjects
//   const categories = props.data.contentfulPages.allCategories
//   const currentPage = props.pageContext.slug

//   console.log("PAGE", page)

//   console.log("POSTS", posts)

//   const renderModulesOnPages = modules => {
//     return modules.map((module, i) => {
//       // if (module.__typename === "ContentfulHero") {
//       //   return <Hero hero={module} key={i} />
//       // } else if (module.__typename === "ContentfulImageGrid") {
//       //   return <ImageGrid imageGrid={module} key={i} />
//       // } else if (module.__typename === "ContentfulTwoSectionsImageText") {
//       //   return <TwoSectionsWithImage twoSectionsImageText={module} key={i} />
//       // } else if (module.__typename === "ContentfulProjectsSelected") {
//       //   return <ProjectsSelectedList projectSelected={module} key={i} />
//       // } else if (module.__typename === "ContentfulVideo") {
//       //   return <Video video={module} key={i} />
//       // } else if (module.__typename === "ContentfulBlogPostSelected") {
//       //   return <BlogPostsSelected postSelected={module} key={i} />
//       // } else if (module.__typename === "ContentfulRichText") {
//       //   return <RichText text={module} key={i} />
//       // } else if (module.__typename === "ContentfulQuote") {
//       //   return <Quote quote={module} key={i} />
//       // } else if (module.__typename === "ContentfulImageFullScreen") {
//       //   return <ImageFullScreen image={module} key={i} />
//       // } else if (module.__typename === "ContentfulQuoteAndText") {
//       //   return <QuoteAndText quote_and_text={module} key={i} />
//       // } else if (module.__typename === "ContentfulNewsLetterSuscribe") {
//       //   return <NewsLetterSuscribe news_letter={module} key={i} />
//       // } else if (module.__typename === "ContentfulSocials") {
//       //   return <Socials social={module} key={i} />
//       // } else if (module.__typename === "ContentfulContactForm") {
//       //   return <ContactForm contact_form={module} key={i} />
//       // } else if (module.__typename === "ContentfulSettings") {
//       //   return <ContactInformations informations={module} key={i} />
//       // }
//     })
//   }
//   const renderProjectsPage = (projects, modules, categories) => {
//     return (
//       <React.Fragment>
//         {modules.map((module, i) => (
//           <Quote quote={module} key={i} />
//         ))}
//         <FullHeight>
//           <ProjectsList projects={projects} categories={categories} />
//         </FullHeight>
//       </React.Fragment>
//     )
//   }
//   return (
//     <Layout currentPage={currentPage}>
//       {currentPage !== "projects"
//         ? renderModulesOnPages(modules)
//         : renderProjectsPage(projects, modules, categories)}
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
//       title
//       slug
//       allProjects: projects {
//         projectTitle
//         projectTitleDate
//         slug
//         cover {
//           fluid(quality: 50, maxWidth: 1800) {
//             ...GatsbyContentfulFluid
//           }
//         }
//         categories {
//           title
//           slug
//         }
//       }
//       allCategories: projectsCategories {
//         title
//         slug
//       }
//       ui {
//         ... on ContentfulHero {
//           hero {
//             fluid(quality: 50, maxWidth: 1800) {
//               ...GatsbyContentfulFluid
//             }
//           }
//           heroTitle
//         }
//         ... on ContentfulSettings {
//           contactInformations {
//             contact_page {
//               company_address
//               company_country
//               company_name
//             }
//             ctas {
//               e_mail
//               label
//             }
//           }
//         }
//         ... on ContentfulContactForm {
//           contactFormTitle
//           mailTo
//         }
//         ... on ContentfulBlogPostSelected {
//           blogPostSelectedTitle
//           blogPost {
//             slug
//             title
//             subtitle
//             hero {
//               fluid {
//                 ...GatsbyContentfulFluid
//               }
//             }
//           }
//         }
//         ... on ContentfulSocials {
//           socialsTitle
//           socials {
//             socialTitle
//             socialLink
//           }
//         }
//         ... on ContentfulNewsLetterSuscribe {
//           newsLetterSuscribeTitle
//           placeholderNewsLetterSuscribe
//           callToActionNewsLetterSuscribe
//         }
//         ... on ContentfulQuote {
//           quote {
//             quote
//           }
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
//         ... on ContentfulImageFullScreen {
//           id
//           image {
//             fluid(quality: 50, maxWidth: 1800) {
//               ...GatsbyContentfulFluid
//             }
//           }
//         }
//         ... on ContentfulQuoteAndText {
//           id
//           text {
//             text
//           }
//           quote {
//             quote
//           }
//         }
//         ... on ContentfulProjectsSelected {
//           titleProjectsSelected
//           projectsSelected {
//             ... on ContentfulProject {
//               slug
//               projectTitle
//               projectTitleDate
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
//       }
//     }
//   }
// `
