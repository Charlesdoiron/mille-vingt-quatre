import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import { Styledblogdate, Styledpostblogfont } from "../typos"

export const BehindTheScenePost = props => {
  console.log(props, "in behind")
  return (
    <div className="behind__the__scene__post__container">
      <Img
        className="img__behind"
        fluid={props.hero.fluid}
        style={{ width: "650px", height: "400px" }}
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
