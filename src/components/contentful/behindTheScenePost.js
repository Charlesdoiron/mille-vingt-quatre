import React from "react"
import { ImgBlur } from "./../animations/image"
import { Link } from "gatsby"

import { Styledblogdate, Styledpostblogfont } from "../typos"

export const BehindTheScenePost = props => {
  return (
    <div className="behind__the__scene__post__container">
      <ImgBlur
        className="img__behind"
        style={{
          backgroundImage: `url(${props.hero.fluid.src})`,
        }}
      />
      <div className="content__behind">
        <div className="blogDate">
          <Styledblogdate>{props.createdAt.substring(0, 5)}</Styledblogdate>
          <Styledblogdate>{props.createdAt.substring(6, 10)}</Styledblogdate>
        </div>
        <Link to={`/${props.slug}`}>
          <Styledpostblogfont>{props.title}</Styledpostblogfont>
        </Link>

        {props.excerpt && (
          <div
            className="rich__text"
            dangerouslySetInnerHTML={{ __html: props.excerpt.excerpt }}
          ></div>
        )}
      </div>
    </div>
  )
}
