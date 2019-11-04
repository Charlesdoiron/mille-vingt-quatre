import React, { useState } from "react"
import { Collapse } from "react-collapse"
import classNames from "classnames"

import arrow_down_behind from "./../../img/pictos/arrow_down_behind.svg"

import { BehindTheScenePost } from "./behindTheScenePost"

export const BehindTheScene = props => {
  const [behindTheSceneIsOpen, setBehindTheSceneIsOpen] = useState(false)
  console.log(props.project)
  return (
    <div className="behind__the__scene">
      <h3 onClick={e => setBehindTheSceneIsOpen(!behindTheSceneIsOpen)}>
        <img
          alt="behind"
          src={arrow_down_behind}
          className={classNames({
            isOpen: behindTheSceneIsOpen,
          })}
        />
        <span>Behind the scenes</span>

        <img
          alt="behind"
          src={arrow_down_behind}
          className={classNames({
            isOpen: behindTheSceneIsOpen,
          })}
        />
      </h3>

      {props.project.categories && (
        <div className="content__collapsed">
          <Collapse isOpened={behindTheSceneIsOpen}>
            {props.project.categories[0].blog_post.map(post => {
              return <BehindTheScenePost {...post} />
            })}
          </Collapse>
        </div>
      )}
    </div>
  )
}
