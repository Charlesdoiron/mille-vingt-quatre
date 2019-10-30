// import React, { Component } from "react"
// import { Link } from "gatsby"
// import { StaticQuery, graphql } from "gatsby"
// import { Styledh5, Styledcapitalize } from "../typos"
// import Slider from "react-slick"
// import "./../../../node_modules/slick-carousel/slick/slick.css"
// import "./../../../node_modules/slick-carousel/slick/slick-theme.css"
// class BlogPosts extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 2,
//       slidesToScroll: 1,
//       swipe: true,
//       // responsive: [
//       //   {
//       //     breakpoint: 1800,
//       //     settings: {
//       //       infinite: true,
//       //       slidesToShow: 2,
//       //       slidesToScroll: 1,
//       //       arrows: false,
//       //       swipe: true,
//       //       touchThreshold: 10,
//       //       swipeToSlide: true,
//       //       speed: 5,
//       //     },
//       //   },
//       // ],
//     }

//     return (
//       <div className="blog-post__container">
//         <Styledcapitalize>JOURNAL</Styledcapitalize>

//         <Slider {...settings}>
//           {this.props.data.allContentfulBlogPost.edges.map(({ node }, i) => {
//             return (
//               <div>
//                 <div
//                   className="blog-post-selected__card"
//                   to={`/${node.slug}`}
//                   key={i}
//                 >
//                   <Styledh5>{node.title}</Styledh5>
//                   <p>
//                     <span className="line"></span> {node.subtitle}
//                   </p>
//                   {/* <div
//                     style={{
//                       backgroundImage: `url(${node.hero.sizes.src})`,
//                     }}
//                     className="blog-post__background"
//                   ></div> */}
//                 </div>
//               </div>
//             )
//           })}
//         </Slider>
//       </div>
//     )
//   }
// }

// export default props => (
//   <StaticQuery
//     query={graphql`
//       query BlogPosts {
//         allContentfulBlogPost {
//           edges {
//             node {
//               id
//               slug
//               title
//               subtitle
//               hero {
//                 sizes(quality: 90, maxWidth: 1800) {
//                   src
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={data => <BlogPosts data={data} {...props} />}
//   />
// )
