import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Bold = ({ children }) => <p className="bold">{children}</p>

const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
  renderText: text => text.replace("!", "?"),
}

export const Wysiwyg = props => {
  console.log("WYSIWYG", props.content.description)
  return (
    <div>{documentToReactComponents(props.content.description, options)}</div>
  )
}
