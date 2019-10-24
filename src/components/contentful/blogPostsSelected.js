import React from "react"
import { Link } from "gatsby"
import { styledcapitalize } from "../typos"
export const BlogPostsSelected = props => {
  return (
    <div className="wrapper--m">
      <div className="blog-post-selected__container">
        <styledcapitalize>
          {props.postSelected.blogPostSelectedTitle}
        </styledcapitalize>

        <div>
          {props.postSelected.blogPost.map((post, i) => {
            return (
              <Link
                className="blog-post-selected__card"
                to={`/${post.slug}`}
                key={i}
                style={{ backgroundImage: `url(${post.hero.sizes.src})` }}
              >
                <h1>{post.title}</h1>
                <p>
                  <span className="line"></span> {post.subtitle}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
