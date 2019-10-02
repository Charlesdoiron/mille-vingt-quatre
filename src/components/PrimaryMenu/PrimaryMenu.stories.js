import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import PrimaryMenu from "./index"

export const actions = {
  onHoverItem: action("onHoverItem"),
  onClickItem: action("onClickItem"),
}

storiesOf("PrimaryMenu", module).add("default", () => (
  <PrimaryMenu {...actions} />
))
