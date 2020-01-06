import React from "react"
import { ProjectsSelectedList } from "./projectsSelectedList"
import { ProjectsSelectedSliderMobile } from "./projectsSelectedSliderMobile"

import { ShowIfDeviceIs as showIfDeviceIs } from "./../../utils/mediaqueries"
export const ProjectsSelected = props => {
  if (showIfDeviceIs("mobile")) {
    return (
      <ProjectsSelectedSliderMobile projectSelected={props.projectSelected} />
    )
  } else {
    return (
      <ProjectsSelectedList
        projectSelected={props.projectSelected}
        key={props.i}
        title="selected projects"
      />
    )
  }
}
