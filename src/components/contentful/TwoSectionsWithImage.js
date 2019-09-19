import React from "react"

export const TwoSectionsWithImage = props => {
  return (
    <div className="two__sections__with__image">
      <h2>{props.data.title}</h2>
      <div style={{ display: `flex`, justifyContent: `space-between` }}>
        <p>{props.data.twoSectionsText.twoSectionsText}</p>
        <img src={props.data.image.fixed.src} alt="" />
      </div>
    </div>
  )
}
