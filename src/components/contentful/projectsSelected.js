import React from "react"
import { ProjectsSelectedList } from "./projectsSelectedList"

export const ProjectsSelected = props => {
  return (
    <ProjectsSelectedList
      projectSelected={props.projectSelected}
      key={props.i}
      title="selected projects"
    />
  )
}
