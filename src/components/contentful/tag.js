import React from "react"
export const Tag = props => {
  return (
    <div>
      <ul>
        {props.tags.map(tag => (
          <li>tag</li>
        ))}
      </ul>
    </div>
  )
}
