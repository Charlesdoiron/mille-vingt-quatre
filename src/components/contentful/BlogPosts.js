import React from "react"
import { Link } from "gatsby"
export const BlogPosts = props => {
  console.log("POST", props.posts)

  return (
    <Link to={`/${props.post.slug}`}>
      <h1>{props.post.title}</h1>
      <p>{props.post.subtitle}</p>
      <img src={props.post.hero.fluid.src} />
    </Link>
  )
}
