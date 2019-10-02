import React from "react"

export const BlogPostsSelected = props => {
  console.log("POST SELECTED", props.posts)
  return props.posts.blogPost.map(post => {
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.subtitle}</p>
        <img src={post.hero.fluid.src} />
      </div>
    )
  })
}
