import React from "react"
import { Link } from "gatsby"
import { Styledcapitalize } from "../typos"
import { ImgBlur } from "./../animations/image"

export const BlogPostsSelected = props => {
  return (
    <div className="wrapper--m no--wrapper--mobile">
      <div className="blog-post-selected__container" data-aos="fade">
        <Styledcapitalize>
          {props.postSelected.blogPostSelectedTitle}
        </Styledcapitalize>

        <div>
          {props.postSelected.blogPost.map((post, i) => {
            return (
              <Link
                className="blog-post-selected__card"
                to={`/${post.slug}`}
                key={i}
              >
                <ImgBlur
                  className="img__bck"
                  style={{ backgroundImage: `url(${post.hero.sizes.src})` }}
                ></ImgBlur>
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
