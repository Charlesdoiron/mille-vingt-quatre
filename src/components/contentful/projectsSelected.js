import React from "react"
import { ProjectsSelectedList } from "./projectsSelectedList"
import ShowIfDeviceIs from "./../../utils/mediaqueries"

export const ProjectsSelected = props => {
  return (
    <div>
      {ShowIfDeviceIs("mobile") ? (
        <ProjectsSelectedList
          projectSelected={props.projectSelected}
          key={props.i}
          title="selected projects"
        />
      ) : (
        <p>plaf</p>
      )}
    </div>
  )
}
