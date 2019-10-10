import React from "react"
import { Link } from "gatsby"
export const BlogPostsSelected = props => {
  return (
    <div className="wrapper--m">
      <div className="blog-post-selected__container">
        {props.postSelected.blogPost.map((post, i) => {
          return (
            <Link
              to={`/${post.slug}`}
              key={i}
              style={{ backgroundImage: `url(${post.hero.fluid.src})` }}
            >
              <h1>{post.title}</h1>
              <p>{post.subtitle}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
