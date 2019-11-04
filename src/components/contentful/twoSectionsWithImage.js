import React from "react"

export const TwoSectionsWithImage = props => {
  console.log("TWO SECTIONS", props.twoSectionsImageText)
  return (
    <div>
      <p>{props.twoSectionsImageText.twoSectionsText.twoSectionsText}</p>
      <img
        src={props.twoSectionsImageText.image.fluid.src}
        alt="two sections"
      />
    </div>
  )
}
