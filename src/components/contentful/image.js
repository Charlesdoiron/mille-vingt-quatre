import React from "react"
import classNames from "classnames"

import { ImgBlur } from "./../animations/image"
export const Image = props => {
  return (
    <div
      className={classNames("image__container", {
        [props.image.display.map(d => d).join(" ")]: true,
      })}
    >
      <div data-aos="fade-up">
        <ImgBlur
          className="image__blur"
          data-aos="fade-up"
          style={{
            backgroundImage: `url(${props.image.image.fluid.src})`,
            width: "100%",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></ImgBlur>

        {props.image.text && (
          <div
            dangerouslySetInnerHTML={{ __html: props.image.text.text }}
            className="text__for__image "
            data-aos="fade-up"
          />
        )}
      </div>
    </div>
  )
}
